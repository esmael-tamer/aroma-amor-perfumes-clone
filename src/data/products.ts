// =====================================================
// Products Data - بيانات المنتجات
// =====================================================

import type { Product } from '@/lib/constants';

export const products: Product[] = [
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
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba60f2e?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80",
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

// Helper functions
export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getProductById = (id: number) => {
  return products.find(p => p.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.badge?.includes('الأكثر مبيعاً'));
};

export const getProductsInStock = () => {
  return products.filter(p => p.stock > 0);
};
