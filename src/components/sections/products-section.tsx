'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Tag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  nameAr: string;
  price: number;
  originalPrice?: number;
  rating: number;
  category: string;
  categoryAr: string;
  image: string;
  badge?: string;
  discount?: string;
  stock: number;
}

const products: Product[] = [
  // العطور - Perfumes
  {
    id: 30,
    name: "BELLEZA",
    nameAr: "BELLEZA – عطر",
    price: 23,
    originalPrice: 130,
    rating: 4.9,
    category: "Perfumes",
    categoryAr: "عطور",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
    badge: "🔥 الأكثر مبيعاً",
    discount: "82%",
    stock: 130
  },
  {
    id: 27,
    name: "LUJO",
    nameAr: "LUJO – عطر",
    price: 23,
    originalPrice: 171,
    rating: 5,
    category: "Perfumes",
    categoryAr: "عطور",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80",
    badge: "💎 فاخر",
    discount: "87%",
    stock: 171
  },
  {
    id: 24,
    name: "FRAGANTE",
    nameAr: "FRAGANTE – عطر",
    price: 23,
    originalPrice: 191,
    rating: 4.8,
    category: "Perfumes",
    categoryAr: "عطور",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&q=80",
    discount: "88%",
    stock: 191
  },
  {
    id: 21,
    name: "ATRACTIVO",
    nameAr: "ATRACTIVO – عطر",
    price: 23,
    originalPrice: 173,
    rating: 4.9,
    category: "Perfumes",
    categoryAr: "عطور",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&q=80",
    discount: "87%",
    stock: 173
  },
  {
    id: 18,
    name: "FABULOUSO",
    nameAr: "FABULOUSO – عطر",
    price: 23,
    originalPrice: 189,
    rating: 5,
    category: "Perfumes",
    categoryAr: "عطور",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&q=80",
    discount: "88%",
    stock: 189
  },
  {
    id: 15,
    name: "AROMA AMOR",
    nameAr: "AROMA AMOR – عطر",
    price: 19,
    originalPrice: 108,
    rating: 4.8,
    category: "Perfumes",
    categoryAr: "عطور",
    image: "https://images.unsplash.com/photo-1600428877938-29b44fc4b6f5?w=500&q=80",
    badge: "✨ جديد",
    discount: "82%",
    stock: 108
  },
  {
    id: 12,
    name: "Calida",
    nameAr: "Calida – عطر",
    price: 19,
    originalPrice: 108,
    rating: 4.7,
    category: "Perfumes",
    categoryAr: "عطور",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&q=80",
    discount: "82%",
    stock: 108
  },
  {
    id: 96,
    name: "Jayden",
    nameAr: "جايدن",
    price: 19,
    originalPrice: 28,
    rating: 4.6,
    category: "Perfumes",
    categoryAr: "عطور",
    image: "https://images.unsplash.com/photo-1619994403073-7a5d9b6b9f0f?w=500&q=80",
    discount: "32%",
    stock: 28
  },
  {
    id: 33,
    name: "HAIR MYST",
    nameAr: "عطر الشعر",
    price: 11,
    originalPrice: 125,
    rating: 4.5,
    category: "Perfumes",
    categoryAr: "عطور",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80",
    badge: "🌸 للشعر",
    discount: "91%",
    stock: 125
  },

  // العروض الخاصة - Collections
  {
    id: 93,
    name: "Atractivo Special Offer",
    nameAr: "Atractivo عرض خاص",
    price: 38,
    originalPrice: 70,
    rating: 5,
    category: "Collections",
    categoryAr: "المجموعات",
    image: "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=500&q=80",
    badge: "💎 عرض خاص",
    discount: "46%",
    stock: 70
  },
  {
    id: 90,
    name: "Jayden Special Offer",
    nameAr: "Jayden عرض خاص",
    price: 45,
    originalPrice: 100,
    rating: 5,
    category: "Collections",
    categoryAr: "المجموعات",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&q=80",
    badge: "🔥 الأكثر مبيعاً",
    discount: "55%",
    stock: 100
  },
  {
    id: 87,
    name: "Calida Special Offer",
    nameAr: "Calida عرض خاص",
    price: 45,
    originalPrice: 20,
    rating: 4.8,
    category: "Collections",
    categoryAr: "المجموعات",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&q=80",
    badge: "✨ جديد",
    stock: 20
  },
  {
    id: 84,
    name: "Aroma Amor Special Offer",
    nameAr: "Aroma Amor عرض خاص",
    price: 45,
    originalPrice: 100,
    rating: 5,
    category: "Collections",
    categoryAr: "المجموعات",
    image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=500&q=80",
    badge: "💎 عرض خاص",
    discount: "55%",
    stock: 100
  },
  {
    id: 81,
    name: "Belleza Special Offer",
    nameAr: "Belleza عرض خاص",
    price: 45,
    rating: 4.9,
    category: "Collections",
    categoryAr: "المجموعات",
    image: "https://images.unsplash.com/photo-1587556930754-94e1f7b8569f?w=500&q=80",
    stock: 0
  },

  // الزيوت - Oils
  {
    id: 78,
    name: "Calida Oil",
    nameAr: "Calida – زيت",
    price: 8,
    originalPrice: 22,
    rating: 4.7,
    category: "Oils",
    categoryAr: "زيوت",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80",
    discount: "64%",
    stock: 22
  },

  // زبدة الجسم - Body Butter
  {
    id: 75,
    name: "Jayden Body Butter",
    nameAr: "Jayden – زبدة الجسم",
    price: 13,
    originalPrice: 21,
    rating: 4.8,
    category: "Body Butter",
    categoryAr: "زبدة الجسم",
    image: "https://images.unsplash.com/photo-1556228578-dd516b1877f4?w=500&q=80",
    discount: "38%",
    stock: 21
  },

  // الصابون - Body Soap
  {
    id: 72,
    name: "ATRACTIVO Body Soap",
    nameAr: "ATRACTIVO – صابونة الجسم",
    price: 10,
    originalPrice: 24,
    rating: 4.6,
    category: "Body Soap",
    categoryAr: "صابون",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&q=80",
    discount: "58%",
    stock: 24
  },
  {
    id: 69,
    name: "BELLEZA Body Soap",
    nameAr: "BELLEZA – صابونة الجسم",
    price: 10,
    originalPrice: 55,
    rating: 4.7,
    category: "Body Soap",
    categoryAr: "صابون",
    image: "https://images.unsplash.com/photo-1576544070731-c0c33d5aac26?w=500&q=80",
    discount: "82%",
    stock: 55
  },
  {
    id: 66,
    name: "AROMA AMOR Body Soap",
    nameAr: "AROMA AMOR – صابونة الجسم",
    price: 10,
    originalPrice: 22,
    rating: 4.5,
    category: "Body Soap",
    categoryAr: "صابون",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
    discount: "55%",
    stock: 22
  },
  {
    id: 63,
    name: "Calida Body Soap",
    nameAr: "Calida – صابونة الجسم",
    price: 10,
    originalPrice: 28,
    rating: 4.6,
    category: "Body Soap",
    categoryAr: "صابون",
    image: "https://images.unsplash.com/photo-1585933646503-0857265d0a6f?w=500&q=80",
    discount: "64%",
    stock: 28
  },
  {
    id: 60,
    name: "Jayden Body Soap",
    nameAr: "Jayden – صابونة الجسم",
    price: 12,
    originalPrice: 15,
    rating: 4.8,
    category: "Body Soap",
    categoryAr: "صابون",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba60f2f?w=500&q=80",
    discount: "20%",
    stock: 15
  },

  // كريم الجسم - Body Cream
  {
    id: 57,
    name: "ATRACTIVO Body Cream",
    nameAr: "ATRACTIVO – كريم الجسم",
    price: 10,
    originalPrice: 29,
    rating: 4.7,
    category: "Body Cream",
    categoryAr: "كريم الجسم",
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500&q=80",
    discount: "66%",
    stock: 29
  },
  {
    id: 54,
    name: "BELLEZA Body Cream",
    nameAr: "BELLEZA – كريم الجسم",
    price: 10,
    rating: 4.6,
    category: "Body Cream",
    categoryAr: "كريم الجسم",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80",
    stock: 0
  },
  {
    id: 51,
    name: "AROMA AMOR Body Cream",
    nameAr: "AROMA AMOR – كريم الجسم",
    price: 10,
    originalPrice: 27,
    rating: 4.8,
    category: "Body Cream",
    categoryAr: "كريم الجسم",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80",
    discount: "63%",
    stock: 27
  },

  // المقشرات - Body Scrub
  {
    id: 48,
    name: "ATRACTIVO Body Scrub",
    nameAr: "ATRACTIVO – مقشر الجسم",
    price: 10,
    originalPrice: 9,
    rating: 4.5,
    category: "Body Scrub",
    categoryAr: "مقشرات",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80",
    stock: 9
  },
  {
    id: 45,
    name: "BELLEZA Body Scrub",
    nameAr: "BELLEZA – مقشر الجسم",
    price: 10,
    originalPrice: 15,
    rating: 4.6,
    category: "Body Scrub",
    categoryAr: "مقشرات",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&q=80",
    discount: "33%",
    stock: 15
  },
  {
    id: 42,
    name: "AROMA AMOR Body Scrub",
    nameAr: "AROMA AMOR – مقشر الجسم",
    price: 10,
    originalPrice: 23,
    rating: 4.7,
    category: "Body Scrub",
    categoryAr: "مقشرات",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80",
    discount: "57%",
    stock: 23
  },
  {
    id: 39,
    name: "Calida Body Scrub",
    nameAr: "Calida – مقشر الجسم",
    price: 10,
    originalPrice: 25,
    rating: 4.6,
    category: "Body Scrub",
    categoryAr: "مقشرات",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&q=80",
    discount: "60%",
    stock: 25
  },
  {
    id: 36,
    name: "Jayden Body Scrub",
    nameAr: "Jayden – مقشر الجسم",
    price: 10,
    originalPrice: 14,
    rating: 4.8,
    category: "Body Scrub",
    categoryAr: "مقشرات",
    image: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=500&q=80",
    discount: "29%",
    stock: 14
  }
];

const categories = [
  { id: 'all', name: 'الكل', nameEn: 'All' },
  { id: 'perfumes', name: 'عطور', nameEn: 'Perfumes' },
  { id: 'collections', name: 'المجموعات', nameEn: 'Collections' },
  { id: 'body soap', name: 'صابون', nameEn: 'Body Soap' },
  { id: 'body scrub', name: 'مقشرات', nameEn: 'Body Scrub' },
  { id: 'body cream', name: 'كريم الجسم', nameEn: 'Body Cream' },
  { id: 'body butter', name: 'زبدة الجسم', nameEn: 'Body Butter' },
  { id: 'oils', name: 'زيوت', nameEn: 'Oils' },
];

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
              <div className="relative aspect-square overflow-hidden bg-[#E8EAED]">
                <Image
                  src={product.image}
                  alt={product.nameAr}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {product.badge}
                  </div>
                )}

                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    خصم {product.discount}
                  </div>
                )}

                {/* Out of Stock Badge */}
                {product.stock === 0 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold">
                      نفذت الكمية
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                {product.stock > 0 && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button 
                      size="lg"
                      className="bg-white text-[#2C2420] hover:bg-[#E8EAED] rounded-full px-8 font-bold shadow-xl"
                    >
                      اشتري الآن 🛍️
                    </Button>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                {/* Category */}
                <div className="inline-block bg-[#E8EAED] text-[#2C2420] px-3 py-1 rounded-full text-sm font-bold">
                  {product.categoryAr}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-[#2C2420] line-clamp-2 min-h-[3.5rem]">
                  {product.nameAr}
                </h3>

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
                  
                  <Button
                    size="icon"
                    disabled={product.stock === 0}
                    className="bg-gradient-to-br from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-6 h-6" />
                  </Button>
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
              <Button 
                size="lg"
                className="bg-white text-[#2C2420] hover:bg-[#E8EAED] px-12 py-7 text-xl rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                تسوق الآن واستفد 🛒
              </Button>
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