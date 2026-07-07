'use client';

import { useState } from 'react';
import { useSiteSettings } from '@/context/SiteSettingsContext';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  X, 
  Save,
  FolderTree,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

export default function CategoriesManager() {
  const { categories, addCategory, updateCategory, deleteCategory } = useSiteSettings();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const [formData, setFormData] = useState({
    nameAr: '',
    nameEn: '',
    icon: '📦',
    isActive: true,
  });

  const emojiOptions = ['👔', '👗', '✨', '🎁', '🪵', '🌹', '💎', '🌸', '🌿', '🍋', '🧴', '💐'];

  const openAddModal = () => {
    setEditingCategory(null);
    setFormData({ nameAr: '', nameEn: '', icon: '📦', isActive: true });
    setIsModalOpen(true);
  };

  const openEditModal = (category: any) => {
    setEditingCategory(category);
    setFormData({
      nameAr: category.nameAr,
      nameEn: category.nameEn,
      icon: category.icon,
      isActive: category.isActive,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategory) {
      updateCategory(editingCategory.id, formData);
    } else {
      addCategory(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا القسم؟')) {
      deleteCategory(id);
    }
  };

  const toggleActive = (category: any) => {
    updateCategory(category.id, { isActive: !category.isActive });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إدارة الأقسام</h1>
          <p className="text-gray-500">{categories.length} قسم</p>
        </div>
        <button type="button"
          onClick={openAddModal}
          className="flex items-center gap-2 bg-[#2C2420] hover:bg-[#4A5568] text-white px-6 py-3 rounded-xl transition-colors"
        >
          <Plus className="w-5 h-5" />
          إضافة قسم
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => (
          <div 
            key={category.id} 
            className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border-2 ${
              category.isActive ? 'border-emerald-200' : 'border-gray-200 opacity-60'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-5xl">{category.icon}</div>
              <button type="button"
                onClick={() => toggleActive(category)}
                className={`p-1 rounded-lg ${category.isActive ? 'text-emerald-500' : 'text-gray-400'}`}
                aria-label={category.isActive ? 'إلغاء التفعيل' : 'تفعيل'}
              >
                {category.isActive ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
              </button>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{category.nameAr}</h3>
            <p className="text-gray-500 mb-4">{category.nameEn}</p>
            <div className="flex gap-2">
              <button type="button"
                onClick={() => openEditModal(category)}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 rounded-lg transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                تعديل
              </button>
              <button type="button"
                onClick={() => handleDelete(category.id)}
                className="flex items-center justify-center bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded-lg transition-colors"
                aria-label="حذف القسم"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center">
          <FolderTree className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">لا توجد أقسام</h3>
          <p className="text-gray-500">أضف قسماً جديداً للبدء</p>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setIsModalOpen(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {editingCategory ? 'تعديل القسم' : 'إضافة قسم جديد'}
              </h2>
              <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg" aria-label="إغلاق">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="catNameAr" className="block text-sm font-medium text-gray-700 mb-1">الاسم بالعربي *</label>
                <input
                  id="catNameAr"
                  type="text"
                  required
                  value={formData.nameAr}
                  onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="catNameEn" className="block text-sm font-medium text-gray-700 mb-1">الاسم بالإنجليزي *</label>
                <input
                  id="catNameEn"
                  type="text"
                  required
                  value={formData.nameEn}
                  onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الأيقونة</label>
                <div className="flex flex-wrap gap-2">
                  {emojiOptions.map(emoji => (
                    <button type="button"
                      key={emoji}

                      onClick={() => setFormData({ ...formData, icon: emoji })}
                      className={`w-12 h-12 text-2xl rounded-xl border-2 transition-all ${
                        formData.icon === emoji 
                          ? 'border-[#2C2420] bg-[#2C2420]/10' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button type="button"
                  onClick={() => setFormData({ ...formData, isActive: !formData.isActive })}
                  className={`p-1 rounded-lg ${formData.isActive ? 'text-emerald-500' : 'text-gray-400'}`}
                >
                  {formData.isActive ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
                </button>
                <span className="text-sm text-gray-600">
                  {formData.isActive ? 'القسم مفعّل' : 'القسم معطّل'}
                </span>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="button"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#2C2420] hover:bg-[#4A5568] text-white py-3 rounded-xl transition-colors"
                >
                  <Save className="w-5 h-5" />
                  {editingCategory ? 'حفظ التعديلات' : 'إضافة القسم'}
                </button>
                <button type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl transition-colors"
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
