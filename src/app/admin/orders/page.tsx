"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function OrdersPage() {
  return (
    <AdminLayout activeTab="orders">
      <AdminDashboard />
    </AdminLayout>
  );
}
