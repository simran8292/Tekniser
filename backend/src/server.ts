import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { prisma } from './lib/db';
import { contactInquirySchema, loginSchema, updateInquiryStatusSchema } from './lib/validations';
import { checkRateLimit } from './lib/rate-limit';
import { logEvent } from './lib/logger';
import { verifyPassword, signAuthToken, setBackendAuthCookie, clearBackendAuthCookie, verifyAuthToken, AUTH_COOKIE_NAME } from './lib/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://takniser.com' : 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Middleware to check admin auth
const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies[AUTH_COOKIE_NAME];
  if (!token) {
    res.status(401).json({ error: "Unauthorized access" });
    return;
  }
  const payload = verifyAuthToken(token);
  if (!payload || payload.role !== "ADMIN") {
    res.status(401).json({ error: "Unauthorized access" });
    return;
  }
  (req as any).user = payload;
  next();
};

// --- API ROUTES ---

// 1. Contact Form Submission
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const ip = req.ip || req.socket.remoteAddress || '127.0.0.1';
    const rateCheck = checkRateLimit(ip, 5, 60 * 1000);

    if (!rateCheck.allowed) {
      logEvent("warn", "CONTACT_FORM_RATE_LIMIT_EXCEEDED", { ip });
      res.status(429).json({ error: "Too many contact submissions. Please wait a minute before trying again." });
      return;
    }

    const validationResult = contactInquirySchema.safeParse(req.body);

    if (!validationResult.success) {
      logEvent("warn", "CONTACT_FORM_VALIDATION_FAILED", { ip, errors: validationResult.error.flatten() });
      res.status(400).json({
        error: "Validation failed",
        details: validationResult.error.flatten().fieldErrors,
      });
      return;
    }

    const { fullName, company, email, phone, country, subject, message } = validationResult.data;

    const inquiry = await prisma.contactInquiry.create({
      data: {
        fullName,
        company,
        email,
        phone: phone || null,
        country,
        subject,
        message,
        ipAddress: ip,
        status: "PENDING",
      },
    });

    logEvent("info", "CONTACT_INQUIRY_CREATED", { inquiryId: inquiry.id, email, company });

    res.status(201).json({
      success: true,
      message: "Thank you for contacting TAKNISER ONE GLOBE. Our corporate representative will get back to you shortly.",
      inquiryId: inquiry.id,
    });
  } catch (error: any) {
    logEvent("error", "CONTACT_INQUIRY_ERROR", { error: error.message });
    res.status(500).json({ error: "An internal server error occurred while submitting your message. Please try again later." });
  }
});

// 2. Admin Login
app.post('/api/auth/login', async (req: Request, res: Response) => {
  try {
    const ip = req.ip || req.socket.remoteAddress || '127.0.0.1';
    const rateCheck = checkRateLimit(`login_${ip}`, 10, 60 * 1000);

    if (!rateCheck.allowed) {
      logEvent("warn", "LOGIN_RATE_LIMIT_EXCEEDED", { ip });
      res.status(429).json({ error: "Too many login attempts. Please wait a minute before retrying." });
      return;
    }

    const validationResult = loginSchema.safeParse(req.body);
    if (!validationResult.success) {
      res.status(400).json({ error: "Invalid login format", details: validationResult.error.flatten().fieldErrors });
      return;
    }

    const { email, password } = validationResult.data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      logEvent("warn", "LOGIN_FAILED_UNKNOWN_USER", { email, ip });
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      logEvent("warn", "LOGIN_FAILED_WRONG_PASSWORD", { email, ip });
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = signAuthToken({ userId: user.id, email: user.email, role: user.role });
    setBackendAuthCookie(res, token);

    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "ADMIN_LOGIN_SUCCESS",
        details: `Successful admin login for ${user.email}`,
        ipAddress: ip,
      },
    });

    logEvent("info", "ADMIN_LOGIN_SUCCESS", { userId: user.id, email });

    res.status(200).json({
      success: true,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    });
  } catch (error: any) {
    logEvent("error", "LOGIN_API_ERROR", { error: error.message });
    res.status(500).json({ error: "Authentication system error" });
  }
});

// 3. Admin Logout
app.post('/api/auth/logout', (req: Request, res: Response) => {
  clearBackendAuthCookie(res);
  res.status(200).json({ success: true });
});

// 4. Get Inquiries (Admin)
app.get('/api/admin/inquiries', requireAdmin, async (req: Request, res: Response) => {
  try {
    const inquiries = await prisma.contactInquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json({ inquiries });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Internal error" });
  }
});

// 5. Update Inquiry Status (Admin)
app.put('/api/admin/inquiries', requireAdmin, async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;
    if (!id) {
      res.status(400).json({ error: "Inquiry ID is required" });
      return;
    }

    const validation = updateInquiryStatusSchema.safeParse(req.body);
    if (!validation.success) {
      res.status(400).json({ error: "Invalid status" });
      return;
    }

    const updated = await prisma.contactInquiry.update({
      where: { id },
      data: { status: validation.data.status },
    });

    res.status(200).json({ success: true, inquiry: updated });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Internal error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 TAKNISER Backend running on http://localhost:${PORT}`);
});
