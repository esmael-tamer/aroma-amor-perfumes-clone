'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Tag, Eye } from 'lucide-react';
import { products, categories } from '@/lib/products';

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category.toLowerCase() === selectedCategory);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-bold mb-6">
            🌸 منتجات أصلية 100%
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2420] mb-4">
            جميع منتجاتنا ({products.length} منتج)
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            اختر من بين مجموعة واسعة من العطور الفاخرة الأصلية المتاحة للشحن السريع لجميع دول الخليج
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-3 rounded-full font-bold transition-all shadow-md ${
                selectedCategory === category.id
                  ? 'bg-[#2C2420] text-white shadow-xl scale-105'
                  : 'bg-[#E8EAED] text-[#4A5568] hover:bg-[#D4CCC4] hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Count */}
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-[#4A5568]">
            عرض {filteredProducts.length} من {products.length} منتج
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#E8EAED] hover:border-[#D4CCC4] hover:-translate-y-2"
            >
              {/* Product Image */}
              <Link href={`/product/${product.id}`} className="block">
                <div className="relative aspect-square overflow-hidden bg-[#E8EAED]">
                  <Image
                    src={product.image}
                    alt={product.nameAr}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                      {product.badge}
                    </div>
                  )}

                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 z-10">
                      <Tag className="w-3 h-3" />
                      خصم {product.discount}
                    </div>
                  )}

                  {/* Out of Stock Badge */}
                  {product.stock === 0 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                      <div className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold">
                        نفذت الكمية
                      </div>
                    </div>
                  )}

                  {/* Quick View Button */}
                  {product.stock > 0 && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-10">
                      <div className="bg-white text-[#2C2420] hover:bg-[#E8EAED] rounded-full px-6 py-3 font-bold shadow-xl flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        عرض التفاصيل
                      </div>
                    </div>
                  )}
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                {/* Category */}
                <div className="inline-block bg-[#E8EAED] text-[#2C2420] px-3 py-1 rounded-full text-sm font-bold">
                  {product.categoryAr}
                </div>

                {/* Name */}
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-xl font-bold text-[#2C2420] line-clamp-2 min-h-[3.5rem] hover:text-[#9B8F85] transition-colors cursor-pointer">
                    {product.nameAr}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-[#4A5568] mr-2 font-medium">
                    ({product.rating})
                  </span>
                </div>

                {/* Stock Info */}
                {product.stock > 0 && product.stock < 30 && (
                  <div className="text-sm text-orange-600 font-semibold">
                    ⚠️ متبقي {product.stock} قطعة فقط
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center justify-between pt-3 border-t-2 border-[#E8EAED]">
                  <div>
                    <div className="text-3xl font-bold text-[#2C2420]">
                      {product.price} د.ك
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-[#9B8F85] line-through font-medium">
                        {product.originalPrice} د.ك
                      </div>
                    )}
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <Button
                      size="icon"
                      disabled={product.stock === 0}
                      className="bg-gradient-to-br from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart className="w-6 h-6" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-[#2C2420] to-[#4A5568] rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="text-3xl md:text-4xl font-bold">
              عرض خاص لفترة محدودة!
            </h3>
            <p className="text-xl text-white/90">
              خصومات تصل إلى 88% على جميع المنتجات + شحن مجاني لجميع دول الخليج
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="#products">
                <Button
                  size="lg"
                  className="bg-white text-[#2C2420] hover:bg-[#E8EAED] px-12 py-7 text-xl rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  تسوق الآن واستفد 🛒
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white text-white hover:bg-white hover:text-[#2C2420] px-12 py-7 text-xl rounded-full font-bold transition-all"
              >
                📞 اتصل للطلب
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
