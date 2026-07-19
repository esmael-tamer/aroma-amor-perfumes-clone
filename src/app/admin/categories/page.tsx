"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import CategoriesManager from "@/components/admin/CategoriesManager";

export default function CategoriesPage() {
  return (
    <AdminLayout activeTab="categories">
      <CategoriesManager />
    </AdminLayout>
  );
}
