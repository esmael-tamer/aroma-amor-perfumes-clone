"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import PromotionsManager from "@/components/admin/PromotionsManager";

export default function PromotionsPage() {
  return (
    <AdminLayout activeTab="promotions">
      <PromotionsManager />
    </AdminLayout>
  );
}
