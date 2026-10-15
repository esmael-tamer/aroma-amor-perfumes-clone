'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { useSiteSettings } from '@/context/SiteSettingsContext';
import { useOrders } from '@/context/OrdersContext';
import Link from 'next/link';
import { 
  Package, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  FolderTree,
  Tag,
  Settings,
  ArrowLeft
} from 'lucide-react';

export default function AdminPage() {
  const { products, categories, promotions } = useSiteSettings();
  const { orders, stats } = useOrders();

  const quickStats = [
    { 
      label: 'إجمالي المنتجات', 
      value: products.length, 
      icon: Package, 
      color: 'bg-blue-500',
      href: '/admin/products'
    },
    { 
      label: 'الطلبات', 
      value: orders.length, 
      icon: ShoppingCart, 
      color: 'bg-emerald-500',
      href: '/admin/orders'
    },
    { 
      label: 'الإيرادات', 
      value: `${stats.totalRevenue.toFixed(0)} د.ك`, 
      icon: DollarSign, 
      color: 'bg-amber-500',
      href: '/admin/orders'
    },
    { 
      label: 'طلبات قيد الانتظار', 
      value: stats.pendingOrders,
      icon: TrendingUp, 
      color: 'bg-purple-500',
      href: '/admin/orders'
    },
  ];

  const quickLinks = [
    { label: 'إدارة المنتجات', icon: Package, href: '/admin/products', desc: 'إضافة وتعديل وحذف المنتجات' },
    { label: 'إدارة الطلبات', icon: ShoppingCart, href: '/admin/orders', desc: 'متابعة طلبات العملاء' },
    { label: 'الأقسام', icon: FolderTree, href: '/admin/categories', desc: 'تنظيم أقسام المنتجات' },
    { label: 'العروض', icon: Tag, href: '/admin/promotions', desc: 'إدارة الخصومات والعروض' },
    { label: 'الإعدادات', icon: Settings, href: '/admin/settings', desc: 'إعدادات الموقع العامة' },
  ];

  const recentOrders = orders.slice(0, 5);

  return (
    <AdminLayout activeTab="dashboard">
      <div className="space-y-6">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-[#2C2420] to-[#4A5568] rounded-2xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">مرحباً بك في لوحة التحكم 👋</h1>
          <p className="text-white/80">إدارة متجر Aroma & Amor للعطور الفاخرة</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Link 
                key={index} 
                href={stat.href}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Links & Recent Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Links */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4">الوصول السريع</h2>
            <div className="space-y-3">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link 
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[#2C2420]/10 rounded-xl flex items-center justify-center text-[#2C2420]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{link.label}</p>
                      <p className="text-sm text-gray-500">{link.desc}</p>
                    </div>
                    <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-[#2C2420] group-hover:-translate-x-1 transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">آخر الطلبات</h2>
              <Link href="/admin/orders" className="text-sm text-[#2C2420] hover:underline">
                عرض الكل
              </Link>
            </div>
            
            {recentOrders.length > 0 ? (
              <div className="space-y-3">
                {recentOrders.map(order => (
                  <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-medium text-gray-800">{order.customer.fullName}</p>
                      <p className="text-sm text-gray-500">{order.id}</p>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-[#2C2420]">{order.totalPrice.toFixed(3)} د.ك</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'delivered' ? 'bg-emerald-100 text-emerald-700' :
                        order.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {order.status === 'pending' ? 'قيد الانتظار' :
                         order.status === 'delivered' ? 'تم التوصيل' :
                         order.status === 'confirmed' ? 'مؤكد' :
                         order.status === 'processing' ? 'قيد التجهيز' :
                         order.status === 'shipped' ? 'تم الشحن' : 'ملغي'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <ShoppingCart className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                <p>لا توجد طلبات بعد</p>
              </div>
            )}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">الأقسام</h3>
            <p className="text-3xl font-bold text-[#2C2420]">{categories.length}</p>
            <p className="text-sm text-gray-500 mt-1">{categories.filter(c => c.isActive).length} قسم نشط</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">العروض النشطة</h3>
            <p className="text-3xl font-bold text-[#2C2420]">{promotions.filter(p => p.isActive).length}</p>
            <p className="text-sm text-gray-500 mt-1">من أصل {promotions.length} عرض</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">الطلبات المكتملة</h3>
            <p className="text-3xl font-bold text-emerald-600">{stats.completedOrders}</p>
            <p className="text-sm text-gray-500 mt-1">نسبة الإكمال: {orders.length > 0 ? Math.round((stats.completedOrders / orders.length) * 100) : 0}%</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
