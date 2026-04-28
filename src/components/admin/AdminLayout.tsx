'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Package, 
  FolderTree, 
  Settings, 
  ShoppingCart, 
  Tag, 
  Image as ImageIcon,
  Users,
  BarChart3,
  ArrowRight,
  Menu,
  X,
  Home,
  LogOut
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  activeTab: string;
}

const menuItems = [
  { id: 'dashboard', label: 'لوحة التحكم', icon: LayoutDashboard, href: '/admin' },
  { id: 'orders', label: 'الطلبات', icon: ShoppingCart, href: '/admin/orders' },
  { id: 'products', label: 'المنتجات', icon: Package, href: '/admin/products' },
  { id: 'categories', label: 'الأقسام', icon: FolderTree, href: '/admin/categories' },
  { id: 'promotions', label: 'العروض', icon: Tag, href: '/admin/promotions' },
  { id: 'banners', label: 'البانرات', icon: ImageIcon, href: '/admin/banners' },
  { id: 'settings', label: 'الإعدادات', icon: Settings, href: '/admin/settings' },
];

export default function AdminLayout({ children, activeTab }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex" dir="rtl">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 right-0 z-50
        w-72 bg-gradient-to-b from-[#2C2420] to-[#1a1614] text-white
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Aroma & Amor</h1>
              <p className="text-sm text-white/60">لوحة التحكم</p>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
              aria-label="إغلاق القائمة"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                  ${isActive 
                    ? 'bg-white text-[#2C2420] shadow-lg' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {isActive && <ArrowRight className="w-4 h-4 mr-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-white/10 rounded-xl transition-all"
          >
            <Home className="w-5 h-5" />
            <span>الذهاب للموقع</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                aria-label="فتح القائمة"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-bold text-gray-800">
                {menuItems.find(item => item.id === activeTab)?.label || 'لوحة التحكم'}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-left">
                <p className="text-sm font-medium text-gray-800">المدير</p>
                <p className="text-xs text-gray-500">admin@aromaamor.com</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-[#2C2420] to-[#4A5568] rounded-full flex items-center justify-center text-white font-bold">
                م
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main id="main-content" className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
