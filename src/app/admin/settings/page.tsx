'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import SettingsManager from '@/components/admin/SettingsManager';

export default function SettingsPage() {
  return (
    <AdminLayout activeTab="settings">
      <SettingsManager />
    </AdminLayout>
  );
}
