'use client';

import { useState } from 'react';
import { useSiteSettings, Promotion } from '@/context/SiteSettingsContext';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  X, 
  Save,
  Tag,
  ToggleLeft,
  ToggleRight,
  Percent,
  Calendar,
  Copy
} from 'lucide-react';

export default function PromotionsManager() {
  const { promotions, addPromotion, updatePromotion, deletePromotion } = useSiteSettings();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPromotion, setEditingPromotion] = useState<Promotion | null>(null);
  const [copied, setCopied] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    discountType: 'percentage' as 'percentage' | 'fixed',
    discountValue: 10,
    code: '',
    startDate: '',
    endDate: '',
    isActive: true,
    minOrderAmount: 0,
  });

  const generateCode = () => {
    const code = 'AROMA' + Math.random().toString(36).substr(2, 6).toUpperCase();
    setFormData({ ...formData, code });
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(''), 2000);
  };

  const openAddModal = () => {
    setEditingPromotion(null);
    setFormData({
      title: '',
      description: '',
      discountType: 'percentage',
      discountValue: 10,
      code: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      isActive: true,
      minOrderAmount: 0,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (promotion: Promotion) => {
    setEditingPromotion(promotion);
    setFormData({
      title: promotion.title,
      description: promotion.description,
      discountType: promotion.discountType,
      discountValue: promotion.discountValue,
      code: promotion.code,
      startDate: promotion.startDate,
      endDate: promotion.endDate,
      isActive: promotion.isActive,
      minOrderAmount: promotion.minOrderAmount,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPromotion) {
      updatePromotion(editingPromotion.id, formData);
    } else {
      addPromotion(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا العرض؟')) {
      deletePromotion(id);
    }
  };

  const toggleActive = (promotion: Promotion) => {
    updatePromotion(promotion.id, { isActive: !promotion.isActive });
  };

  const isExpired = (endDate: string) => {
    if (!endDate) return false;
    return new Date(endDate) < new Date();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إدارة العروض والخصومات</h1>
          <p className="text-gray-500">{promotions.length} عرض</p>
        </div>
        <button type="button"
          onClick={openAddModal}
          className="flex items-center gap-2 bg-[#2C2420] hover:bg-[#4A5568] text-white px-6 py-3 rounded-xl transition-colors"
          aria-label="إضافة عرض"
        >
          <Plus className="w-5 h-5" />
          إضافة عرض
        </button>
      </div>

      {/* Promotions List */}
      <div className="space-y-4">
        {promotions.map(promotion => (
          <div 
            key={promotion.id} 
            className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border-2 ${
              !promotion.isActive ? 'border-gray-200 opacity-60' : 
              isExpired(promotion.endDate) ? 'border-red-200' : 'border-emerald-200'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                promotion.discountType === 'percentage' 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'bg-emerald-100 text-emerald-600'
              }`}>
                {promotion.discountType === 'percentage' ? (
                  <Percent className="w-8 h-8" />
                ) : (
                  <Tag className="w-8 h-8" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-800">{promotion.title}</h3>
                  {isExpired(promotion.endDate) && (
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">منتهي</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm mb-2">{promotion.description}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-mono font-bold flex items-center gap-2">
                    {promotion.code}
                    <button type="button"
                      onClick={() => copyCode(promotion.code)}
                      className="hover:text-[#2C2420]"
                      aria-label="نسخ الكود"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    {copied === promotion.code && (
                      <span className="text-emerald-500 text-xs">تم النسخ!</span>
                    )}
                  </span>
                  <span className="text-purple-600 font-bold">
                    {promotion.discountType === 'percentage' 
                      ? `${promotion.discountValue}%` 
                      : `${promotion.discountValue} د.ك`
                    }
                  </span>
                  {promotion.minOrderAmount > 0 && (
                    <span className="text-gray-500">
                      الحد الأدنى: {promotion.minOrderAmount} د.ك
                    </span>
                  )}
                </div>
              </div>

              {/* Dates */}
              <div className="text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>من: {promotion.startDate}</span>
                </div>
                {promotion.endDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>إلى: {promotion.endDate}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button type="button"
                  onClick={() => toggleActive(promotion)}
                  className={`p-2 rounded-lg ${promotion.isActive ? 'text-emerald-500' : 'text-gray-400'}`}
                  aria-label={promotion.isActive ? 'إلغاء التفعيل' : 'تفعيل'}
                >
                  {promotion.isActive ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
                </button>
                <button type="button"
                  onClick={() => openEditModal(promotion)}
                  className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                  aria-label="تعديل العرض"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button type="button"
                  onClick={() => handleDelete(promotion.id)}
                  className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                  aria-label="حذف العرض"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {promotions.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center">
          <Tag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">لا توجد عروض</h3>
          <p className="text-gray-500">أضف عرضاً جديداً لجذب المزيد من العملاء</p>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setIsModalOpen(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-50 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {editingPromotion ? 'تعديل العرض' : 'إضافة عرض جديد'}
              </h2>
              <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg" aria-label="إغلاق">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="promoTitle" className="block text-sm font-medium text-gray-700 mb-1">عنوان العرض *</label>
                <input
                  id="promoTitle"
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="مثال: خصم العيد"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="promoDesc" className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
                <textarea
                  id="promoDesc"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-1">كود الخصم *</label>
                <div className="flex gap-2">
                  <input
                    id="promoCode"
                    type="text"
                    required
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                    placeholder="AROMA2024"
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none font-mono"
                  />
                  <button type="button"
                    type="button"
                    onClick={generateCode}
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                    aria-label="توليد كود خصم"
                  >
                    توليد
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="discountType" className="block text-sm font-medium text-gray-700 mb-1">نوع الخصم</label>
                  <select
                    id="discountType"
                    value={formData.discountType}
                    onChange={(e) => setFormData({ ...formData, discountType: e.target.value as 'percentage' | 'fixed' })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  >
                    <option value="percentage">نسبة مئوية %</option>
                    <option value="fixed">مبلغ ثابت</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="discountValue" className="block text-sm font-medium text-gray-700 mb-1">قيمة الخصم *</label>
                  <input
                    id="discountValue"
                    type="number"
                    required
                    value={formData.discountValue}
                    onChange={(e) => setFormData({ ...formData, discountValue: parseFloat(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">تاريخ البداية</label>
                  <input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">تاريخ الانتهاء</label>
                  <input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="minOrder" className="block text-sm font-medium text-gray-700 mb-1">الحد الأدنى للطلب</label>
                <input
                  id="minOrder"
                  type="number"
                  value={formData.minOrderAmount}
                  onChange={(e) => setFormData({ ...formData, minOrderAmount: parseFloat(e.target.value) })}
                  placeholder="0 = بدون حد أدنى"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button type="button"
                  type="button"
                  onClick={() => setFormData({ ...formData, isActive: !formData.isActive })}
                  className={`p-1 rounded-lg ${formData.isActive ? 'text-emerald-500' : 'text-gray-400'}`}
                  aria-label={formData.isActive ? 'إلغاء تفعيل العرض' : 'تفعيل العرض'}
                >
                  {formData.isActive ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
                </button>
                <span className="text-sm text-gray-600">
                  {formData.isActive ? 'العرض مفعّل' : 'العرض معطّل'}
                </span>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="button"
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#2C2420] hover:bg-[#4A5568] text-white py-3 rounded-xl transition-colors"
                  aria-label={editingPromotion ? 'حفظ التعديلات' : 'إضافة العرض'}
                >
                  <Save className="w-5 h-5" />
                  {editingPromotion ? 'حفظ التعديلات' : 'إضافة العرض'}
                </button>
                <button type="button"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl transition-colors"
                  aria-label="إلغاء التعديلات"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
