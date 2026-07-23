'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSiteSettings } from '@/context/SiteSettingsContext';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  X, 
  Save,
  Package,
  Filter,
  Eye,
  EyeOff
} from 'lucide-react';

export default function ProductsManager() {
  const { products, addProduct, updateProduct, deleteProduct, categories } = useSiteSettings();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [formData, setFormData] = useState({
    nameAr: '',
    nameEn: '',
    descriptionAr: '',
    descriptionEn: '',
    price: 0,
    originalPrice: 0,
    categoryAr: '',
    categoryEn: '',
    brand: '',
    size: '',
    image: '',
    stock: 10,
    rating: 4.5,
    reviews: 0,
    isNew: false,
    isBestseller: false,
    isFeatured: false,
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.nameAr.includes(searchQuery) || 
                         (product.nameEn?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
                         (product.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    const matchesCategory = filterCategory === 'all' || product.categoryAr === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      nameAr: '',
      nameEn: '',
      descriptionAr: '',
      descriptionEn: '',
      price: 0,
      originalPrice: 0,
      categoryAr: categories[0]?.nameAr || '',
      categoryEn: categories[0]?.nameEn || '',
      brand: '',
      size: '100ml',
      image: '',
      stock: 10,
      rating: 4.5,
      reviews: 0,
      isNew: false,
      isBestseller: false,
      isFeatured: false,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (product: any) => {
    setEditingProduct(product);
    setFormData({
      nameAr: product.nameAr,
      nameEn: product.nameEn,
      descriptionAr: product.descriptionAr,
      descriptionEn: product.descriptionEn,
      price: product.price,
      originalPrice: product.originalPrice || 0,
      categoryAr: product.categoryAr,
      categoryEn: product.categoryEn,
      brand: product.brand,
      size: product.size,
      image: product.image,
      stock: product.stock,
      rating: product.rating,
      reviews: product.reviews,
      isNew: product.isNew || false,
      isBestseller: product.isBestseller || false,
      isFeatured: product.isFeatured || false,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(editingProduct.id, formData);
    } else {
      addProduct(formData as any);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      deleteProduct(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إدارة المنتجات</h1>
          <p className="text-gray-500">{products.length} منتج</p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-[#2C2420] hover:bg-[#4A5568] text-white px-6 py-3 rounded-xl transition-colors"
          aria-label="إضافة منتج جديد"
        >
          <Plus className="w-5 h-5" />
          إضافة منتج
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="بحث في المنتجات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-12 pl-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
            aria-label="تصفية حسب القسم"
          >
            <option value="all">جميع الأقسام</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.nameAr}>{cat.nameAr}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.nameAr}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                {product.isNew && (
                  <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">جديد</span>
                )}
                {product.isBestseller && (
                  <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">الأكثر مبيعاً</span>
                )}
              </div>
              <div className="absolute top-2 left-2">
                <span className={`text-xs px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                  {product.stock > 0 ? `متوفر: ${product.stock}` : 'نفذ'}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-gray-800 line-clamp-1">{product.nameAr}</h3>
              <p className="text-sm text-gray-500">{product.brand || '-'} - {product.size || '-'}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#2C2420]">{product.price} د.ك</span>
                  {(product.originalPrice ?? 0) > 0 && (
                    <span className="text-xs text-gray-400 line-through mr-2">{product.originalPrice}</span>
                  )}
                </div>
                <span className="text-xs text-gray-500">{product.categoryAr}</span>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => openEditModal(product)}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 rounded-lg transition-colors"
                  aria-label={`تعديل منتج ${product.nameAr}`}
                >
                  <Edit2 className="w-4 h-4" />
                  تعديل
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="flex items-center justify-center bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded-lg transition-colors"
                  aria-label="حذف المنتج"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">لا توجد منتجات</h3>
          <p className="text-gray-500">أضف منتجاً جديداً للبدء</p>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setIsModalOpen(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-50 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {editingProduct ? 'تعديل المنتج' : 'إضافة منتج جديد'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg" aria-label="إغلاق">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nameAr" className="block text-sm font-medium text-gray-700 mb-1">الاسم بالعربي *</label>
                  <input
                    id="nameAr"
                    type="text"
                    required
                    value={formData.nameAr}
                    onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="nameEn" className="block text-sm font-medium text-gray-700 mb-1">الاسم بالإنجليزي *</label>
                  <input
                    id="nameEn"
                    type="text"
                    required
                    value={formData.nameEn}
                    onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="descriptionAr" className="block text-sm font-medium text-gray-700 mb-1">الوصف بالعربي</label>
                <textarea
                  id="descriptionAr"
                  value={formData.descriptionAr}
                  onChange={(e) => setFormData({ ...formData, descriptionAr: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">السعر *</label>
                  <input
                    id="price"
                    type="number"
                    required
                    step="0.001"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700 mb-1">السعر القديم</label>
                  <input
                    id="originalPrice"
                    type="number"
                    step="0.001"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">المخزون *</label>
                  <input
                    id="stock"
                    type="number"
                    required
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="categoryAr" className="block text-sm font-medium text-gray-700 mb-1">القسم *</label>
                  <select
                    id="categoryAr"
                    required
                    value={formData.categoryAr}
                    onChange={(e) => {
                      const cat = categories.find(c => c.nameAr === e.target.value);
                      setFormData({ 
                        ...formData, 
                        categoryAr: e.target.value,
                        categoryEn: cat?.nameEn || ''
                      });
                    }}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.nameAr}>{cat.nameAr}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">الماركة *</label>
                  <input
                    id="brand"
                    type="text"
                    required
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">الحجم</label>
                  <input
                    id="size"
                    type="text"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    placeholder="100ml"
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">رابط الصورة *</label>
                  <input
                    id="image"
                    type="url"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#2C2420] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isNew}
                    onChange={(e) => setFormData({ ...formData, isNew: e.target.checked })}
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-sm">منتج جديد</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isBestseller}
                    onChange={(e) => setFormData({ ...formData, isBestseller: e.target.checked })}
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-sm">الأكثر مبيعاً</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-sm">منتج مميز</span>
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#2C2420] hover:bg-[#4A5568] text-white py-3 rounded-xl transition-colors"
                  aria-label={editingProduct ? 'حفظ تعديلات المنتج' : 'حفظ المنتج الجديد'}
                >
                  <Save className="w-5 h-5" />
                  {editingProduct ? 'حفظ التعديلات' : 'إضافة المنتج'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl transition-colors"
                  aria-label="إلغاء"
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
