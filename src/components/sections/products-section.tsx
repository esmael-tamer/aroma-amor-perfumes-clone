'use client';

import { useState, useMemo, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product-card';
import { products } from '@/data/products';
import { PRODUCT_CATEGORIES } from '@/lib/constants';

const ProductsSection = memo(function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Memoize filtered products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter(p => p.category.toLowerCase() === selectedCategory);
  }, [selectedCategory]);

  // Memoize category change handler
  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  return (
    <section 
      id="products" 
      className="py-20 bg-white"
      aria-labelledby="products-title"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-8 py-3 rounded-full text-sm font-bold mb-6 shadow-md">
            🌸 منتجات أصلية 100%
          </span>
          <h2 
            id="products-title"
            className="text-4xl md:text-6xl font-bold text-[#2C2420] mb-6 leading-tight"
          >
            جميع منتجاتنا
            <span className="block text-[#9B8F85] text-3xl md:text-4xl mt-2">({products.length} منتج)</span>
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            اختر من بين مجموعة واسعة من العطور الفاخرة الأصلية المتاحة للشحن السريع لجميع دول الخليج
          </p>
        </header>

        {/* Category Filter */}
        <nav 
          className="flex flex-wrap justify-center gap-3 mb-12"
          aria-label="فئات المنتجات"
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <button type="button"
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-xl ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#2C2420] to-[#4A5568] text-white shadow-2xl scale-110'
                  : 'bg-white text-[#4A5568] hover:bg-[#D4CCC4] hover:scale-105 border-2 border-[#E8EAED]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </nav>

        {/* Products Count */}
        <p className="text-center mb-8 text-lg font-semibold text-[#4A5568]" aria-live="polite">
          عرض {filteredProducts.length} من {products.length} منتج
        </p>

        {/* Products Grid */}
        <div 
          id="products-grid"
          role="tabpanel"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-[#4A5568]">لا توجد منتجات في هذه الفئة</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 relative overflow-hidden bg-gradient-to-br from-[#2C2420] via-[#4A5568] to-[#2C2420] rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative max-w-3xl mx-auto space-y-8">
            <div className="text-6xl mb-4 animate-bounce-slow" aria-hidden="true">🎁</div>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              عرض خاص لفترة محدودة!
            </h3>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              خصومات تصل إلى <span className="text-amber-400 font-bold text-3xl">88%</span> على جميع المنتجات
              <br />
              <span className="text-emerald-400">+ شحن مجاني لجميع دول الخليج 🚚</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                type="button"
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-[#2C2420] hover:from-amber-500 hover:to-orange-600 px-12 py-8 text-xl rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                aria-label="تسوق الآن واستفد من العروض"
              >
                تسوق الآن واستفد 🛒
              </Button>
              <Button 
                type="button"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2C2420] px-12 py-8 text-xl rounded-full font-bold transition-all duration-300 hover:scale-105"
                aria-label="اتصل للطلب"
              >
                📞 اتصل للطلب
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ProductsSection;