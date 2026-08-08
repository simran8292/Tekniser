interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

/**
 * In-memory sliding window rate limiter for API protection
 * @param ip Client IP address or identifier
 * @param maxHits Max allowed requests in window
 * @param windowMs Window duration in milliseconds (default: 1 minute)
 */
export function checkRateLimit(ip: string, maxHits = 5, windowMs = 60 * 1000): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    const newRecord: RateLimitRecord = { count: 1, resetAt: now + windowMs };
    rateLimitMap.set(ip, newRecord);
    return { allowed: true, remaining: maxHits - 1, resetAt: newRecord.resetAt };
  }

  if (record.count >= maxHits) {
    return { allowed: false, remaining: 0, resetAt: record.resetAt };
  }

  record.count += 1;
  rateLimitMap.set(ip, record);

  return { allowed: true, remaining: maxHits - record.count, resetAt: record.resetAt };
}
