'use client';

import { useState, memo } from 'react';
import Image from 'next/image';
import { useOrders, Order } from '@/context/OrdersContext';
import { CURRENCY, COMPANY_INFO } from '@/lib/constants';
import { 
  Package, 
  Clock, 
  CheckCircle, 
  Truck, 
  XCircle, 
  Eye, 
  Search,
  Filter,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingBag,
  ArrowLeft,
  Phone,
  MapPin,
  Calendar,
  ChevronDown,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const statusConfig = {
  pending: { label: 'قيد الانتظار', color: 'bg-yellow-100 text-yellow-800', icon: Clock },
  confirmed: { label: 'مؤكد', color: 'bg-blue-100 text-blue-800', icon: CheckCircle },
  processing: { label: 'قيد التجهيز', color: 'bg-purple-100 text-purple-800', icon: Package },
  shipped: { label: 'تم الشحن', color: 'bg-indigo-100 text-indigo-800', icon: Truck },
  delivered: { label: 'تم التوصيل', color: 'bg-green-100 text-green-800', icon: CheckCircle },
  cancelled: { label: 'ملغي', color: 'bg-red-100 text-red-800', icon: XCircle },
};

const AdminDashboard = memo(function AdminDashboard() {
  const { orders, stats, updateOrderStatus, deleteOrder } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = orders
    .filter(order => filterStatus === 'all' || order.status === filterStatus)
    .filter(order => 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.phone.includes(searchTerm)
    );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-KW', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2C2420] to-[#4A5568] text-white sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={COMPANY_INFO.logo}
                alt={COMPANY_INFO.name}
                width={50}
                height={50}
                className="rounded-full bg-white p-1"
              />
              <div>
                <h1 className="text-2xl font-bold">لوحة التحكم</h1>
                <p className="text-white/70 text-sm">إدارة الطلبات والمبيعات</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2C2420]">
                <ArrowLeft className="w-4 h-4 ml-2" />
                العودة للمتجر
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-r-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">إجمالي الطلبات</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalOrders}</p>
              </div>
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-7 h-7 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-r-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">طلبات قيد التنفيذ</p>
                <p className="text-3xl font-bold text-gray-800">{stats.pendingOrders}</p>
              </div>
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="w-7 h-7 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-r-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">طلبات مكتملة</p>
                <p className="text-3xl font-bold text-gray-800">{stats.completedOrders}</p>
              </div>
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-r-4 border-emerald-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">إجمالي الإيرادات</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalRevenue.toFixed(3)} <span className="text-lg">{CURRENCY.symbol}</span></p>
              </div>
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="بحث برقم الطلب أو اسم العميل أو الهاتف..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-12 pl-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                aria-label="تصفية حسب حالة الطلب"
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none bg-white"
              >
                <option value="all">جميع الحالات</option>
                <option value="pending">قيد الانتظار</option>
                <option value="confirmed">مؤكد</option>
                <option value="processing">قيد التجهيز</option>
                <option value="shipped">تم الشحن</option>
                <option value="delivered">تم التوصيل</option>
                <option value="cancelled">ملغي</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Package className="w-6 h-6" />
              قائمة الطلبات ({filteredOrders.length})
            </h2>
          </div>

          {filteredOrders.length === 0 ? (
            <div className="p-12 text-center">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">لا توجد طلبات</h3>
              <p className="text-gray-400">الطلبات الجديدة ستظهر هنا</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-600">رقم الطلب</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-600">العميل</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-600">التاريخ</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-600">المبلغ</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-600">الحالة</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-600">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredOrders.map((order) => {
                    const StatusIcon = statusConfig[order.status].icon;
                    return (
                      <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="font-mono font-bold text-[#2C2420]">{order.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-gray-800">{order.customer.fullName}</p>
                            <p className="text-sm text-gray-500">{order.customer.phone}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {formatDate(order.createdAt)}
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-gray-800">{order.totalPrice.toFixed(3)} {CURRENCY.symbol}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${statusConfig[order.status].color}`}>
                            <StatusIcon className="w-4 h-4" />
                            {statusConfig[order.status].label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setSelectedOrder(order)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 outline-none"
                              title="عرض التفاصيل"
                              aria-label={`عرض تفاصيل الطلب ${order.id}`}
                            >
                              <Eye className="w-5 h-5" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Order Details Modal */}
      {selectedOrder && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => setSelectedOrder(null)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl z-50 p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">تفاصيل الطلب</h3>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                aria-label="إغلاق تفاصيل الطلب"
                className="text-gray-400 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-400 outline-none rounded-full"
              >
                <XCircle className="w-8 h-8" aria-hidden="true" />
              </button>
            </div>

            {/* Order ID & Status */}
            <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm text-gray-500">رقم الطلب</p>
                <p className="font-mono font-bold text-xl text-[#2C2420]">{selectedOrder.id}</p>
              </div>
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${statusConfig[selectedOrder.status].color}`}>
                {statusConfig[selectedOrder.status].label}
              </span>
            </div>

            {/* Update Status */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-600 mb-2">تحديث حالة الطلب:</label>
              <div className="flex flex-wrap gap-2">
                {Object.entries(statusConfig).map(([key, value]) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => {
                      updateOrderStatus(selectedOrder.id, key as Order['status']);
                      setSelectedOrder({ ...selectedOrder, status: key as Order['status'] });
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedOrder.status === key
                        ? 'bg-[#2C2420] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {value.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Info */}
            <div className="mb-6 p-4 bg-blue-50 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                معلومات العميل
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">الاسم:</span>
                  <span className="font-medium mr-2">{selectedOrder.customer.fullName}</span>
                </div>
                <div>
                  <span className="text-gray-500">الهاتف:</span>
                  <a href={`tel:${selectedOrder.customer.phone}`} className="font-medium mr-2 text-blue-600">
                    {selectedOrder.customer.phone}
                  </a>
                </div>
                {selectedOrder.customer.email && (
                  <div className="col-span-2">
                    <span className="text-gray-500">البريد:</span>
                    <span className="font-medium mr-2">{selectedOrder.customer.email}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Address */}
            <div className="mb-6 p-4 bg-green-50 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                عنوان التوصيل
              </h4>
              <p className="text-sm text-gray-700">
                {selectedOrder.address.country} - {selectedOrder.address.city}
                <br />
                {selectedOrder.address.area} - قطعة {selectedOrder.address.block} - شارع {selectedOrder.address.street}
                <br />
                مبنى {selectedOrder.address.building}
                {selectedOrder.address.floor && ` - طابق ${selectedOrder.address.floor}`}
                {selectedOrder.address.apartment && ` - شقة ${selectedOrder.address.apartment}`}
              </p>
              {selectedOrder.notes && (
                <p className="mt-2 text-sm text-gray-500 italic">ملاحظات: {selectedOrder.notes}</p>
              )}
            </div>

            {/* Order Items */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                المنتجات ({selectedOrder.items.length})
              </h4>
              <div className="space-y-3">
                {selectedOrder.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image src={item.image} alt={item.productName} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{item.productName}</p>
                      <p className="text-sm text-gray-500">{item.price} {CURRENCY.symbol} × {item.quantity}</p>
                    </div>
                    <p className="font-bold text-gray-800">{(item.price * item.quantity).toFixed(3)} {CURRENCY.symbol}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="p-4 bg-[#2C2420] text-white rounded-xl flex items-center justify-between">
              <span className="font-bold text-lg">الإجمالي:</span>
              <span className="font-bold text-2xl">{selectedOrder.totalPrice.toFixed(3)} {CURRENCY.symbol}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              <a
                href={`https://wa.me/${selectedOrder.customer.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`مرحباً ${selectedOrder.customer.fullName}، بخصوص طلبك رقم ${selectedOrder.id}...`)}`}
                target="_blank"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold text-center transition-colors"
              >
                📱 تواصل عبر واتساب
              </a>
              <a
                href={`tel:${selectedOrder.customer.phone}`}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold text-center transition-colors"
              >
                📞 اتصال
              </a>
            </div>

            {/* Delete Order */}
            <button
              type="button"
              onClick={() => {
                if (confirm('هل أنت متأكد من حذف هذا الطلب؟')) {
                  deleteOrder(selectedOrder.id);
                  setSelectedOrder(null);
                }
              }}
              className="w-full mt-3 text-red-500 hover:bg-red-50 py-2 rounded-xl font-medium transition-colors focus-visible:ring-2 focus-visible:ring-red-500 outline-none"
              aria-label={`حذف الطلب ${selectedOrder.id}`}
            >
              🗑️ حذف الطلب
            </button>
          </div>
        </>
      )}
    </div>
  );
});

export default AdminDashboard;
