import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import AdminDashboard from "./AdminDashboard";

export default async function AdminPage() {
  const session = await getAuthSession();
  if (!session || session.role !== "ADMIN") {
    redirect("/admin/login");
  }
  return <AdminDashboard session={session} />;
}
