export interface Product {
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
  description?: string;
  descriptionAr?: string;
  features?: string[];
  featuresAr?: string[];
  images?: string[];
}

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
    stock: 130,
    descriptionAr: "عطر BELLEZA الفاخر، تركيبة استثنائية من أرقى العطور العالمية. عطر يجمع بين الأناقة والفخامة ليمنحك تجربة عطرية لا تُنسى.",
    description: "BELLEZA luxury perfume, an exceptional blend of the finest international fragrances. A perfume that combines elegance and luxury to give you an unforgettable fragrance experience.",
    featuresAr: [
      "عطر أصلي 100%",
      "ثبات يدوم طوال اليوم",
      "تركيز عالٍ من الزيوت العطرية",
      "عبوة فاخرة ومميزة",
      "مناسب لجميع المناسبات",
      "رائحة منعشة وجذابة"
    ],
    features: [
      "100% Original",
      "Long-lasting all day",
      "High concentration of fragrance oils",
      "Luxury packaging",
      "Suitable for all occasions",
      "Fresh and attractive scent"
    ],
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
    ]
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
    stock: 171,
    descriptionAr: "عطر LUJO الفاخر، رائحة ساحرة تجمع بين النفحات الزهرية والخشبية. عطر يعكس شخصيتك القوية والمميزة.",
    description: "LUJO luxury perfume, an enchanting scent that combines floral and woody notes. A perfume that reflects your strong and distinctive personality.",
    featuresAr: [
      "عطر أصلي 100%",
      "ثبات استثنائي لأكثر من 12 ساعة",
      "تركيبة فاخرة من أجود المكونات",
      "عبوة أنيقة وراقية",
      "مناسب للرجال والنساء",
      "رائحة فاخرة ومميزة"
    ],
    features: [
      "100% Original",
      "Exceptional longevity over 12 hours",
      "Luxury formula with finest ingredients",
      "Elegant packaging",
      "Unisex fragrance",
      "Luxurious and distinctive scent"
    ],
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
    ]
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
    stock: 191,
    descriptionAr: "عطر FRAGANTE المنعش، تجربة عطرية فريدة تمزج بين الفواكه الطازجة والورود الفواحة.",
    description: "FRAGANTE refreshing perfume, a unique fragrance experience that blends fresh fruits and blooming roses.",
    featuresAr: [
      "عطر أصلي 100%",
      "رائحة منعشة وحيوية",
      "ثبات طويل الأمد",
      "مناسب للاستخدام اليومي",
      "عبوة عصرية وأنيقة",
      "سعر منافس وجودة عالية"
    ],
    features: [
      "100% Original",
      "Fresh and vibrant scent",
      "Long-lasting",
      "Perfect for daily use",
      "Modern and elegant bottle",
      "Competitive price and high quality"
    ],
    images: [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80",
      "https://images.unsplash.com/photo-1600428877938-29b44fc4b6f5?w=800&q=80"
    ]
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
    stock: 173,
    descriptionAr: "عطر ATRACTIVO الجذاب، تركيبة ساحرة تترك انطباعاً لا يُنسى أينما ذهبت.",
    description: "ATRACTIVO attractive perfume, a charming formula that leaves an unforgettable impression wherever you go.",
    featuresAr: [
      "عطر أصلي 100%",
      "رائحة جذابة ومغرية",
      "ثبات قوي طوال اليوم",
      "تصميم عبوة فاخر",
      "مناسب للمناسبات الخاصة",
      "خصم 87% على السعر الأصلي"
    ],
    features: [
      "100% Original",
      "Attractive and alluring scent",
      "Strong longevity all day",
      "Luxury bottle design",
      "Perfect for special occasions",
      "87% discount on original price"
    ],
    images: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
      "https://images.unsplash.com/photo-1619994403073-7a5d9b6b9f0f?w=800&q=80"
    ]
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
    stock: 189,
    descriptionAr: "عطر FABULOUSO الرائع، تجربة عطرية خيالية تجمع بين الفخامة والأناقة في زجاجة واحدة.",
    description: "FABULOUSO wonderful perfume, a fantastic fragrance experience that combines luxury and elegance in one bottle.",
    featuresAr: [
      "عطر أصلي 100%",
      "رائحة خيالية ومميزة",
      "ثبات استثنائي",
      "عبوة أنيقة وفاخرة",
      "مناسب لجميع الأوقات",
      "أفضل قيمة مقابل السعر"
    ],
    features: [
      "100% Original",
      "Fantastic and distinctive scent",
      "Exceptional longevity",
      "Elegant and luxurious bottle",
      "Suitable for all times",
      "Best value for money"
    ],
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80",
      "https://images.unsplash.com/photo-1600428877938-29b44fc4b6f5?w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
    ]
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
    stock: 108,
    descriptionAr: "عطر AROMA AMOR الأيقوني، العطر الذي يحمل اسم علامتنا التجارية. تجربة عطرية متكاملة من قلب الكويت.",
    description: "AROMA AMOR iconic perfume, the fragrance that carries our brand name. A complete fragrance experience from the heart of Kuwait.",
    featuresAr: [
      "عطر أصلي 100%",
      "العطر الأيقوني للعلامة التجارية",
      "رائحة مميزة ومتوازنة",
      "ثبات طويل الأمد",
      "سعر مناسب للجميع",
      "منتج جديد في المجموعة"
    ],
    features: [
      "100% Original",
      "Brand's iconic fragrance",
      "Distinctive and balanced scent",
      "Long-lasting",
      "Affordable for everyone",
      "New in collection"
    ],
    images: [
      "https://images.unsplash.com/photo-1600428877938-29b44fc4b6f5?w=800&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
    ]
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
    stock: 108,
    descriptionAr: "عطر Calida الدافئ، رائحة ناعمة ودافئة تمنحك شعوراً بالراحة والثقة.",
    description: "Calida warm perfume, a soft and warm scent that gives you a feeling of comfort and confidence.",
    featuresAr: [
      "عطر أصلي 100%",
      "رائحة دافئة وناعمة",
      "مناسب للاستخدام اليومي",
      "ثبات جيد",
      "عبوة أنيقة",
      "سعر منافس"
    ],
    features: [
      "100% Original",
      "Warm and soft scent",
      "Perfect for daily use",
      "Good longevity",
      "Elegant bottle",
      "Competitive price"
    ],
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
    ]
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
    stock: 28,
    descriptionAr: "عطر جايدن العصري، عطر شبابي عصري يناسب جيل الألفية الجديدة.",
    description: "Jayden modern perfume, a youthful contemporary scent perfect for the new millennium generation.",
    featuresAr: [
      "عطر أصلي 100%",
      "رائحة عصرية وشبابية",
      "مناسب للشباب",
      "ثبات جيد",
      "تصميم عصري",
      "سعر معقول"
    ],
    features: [
      "100% Original",
      "Modern and youthful scent",
      "Perfect for youth",
      "Good longevity",
      "Modern design",
      "Reasonable price"
    ],
    images: [
      "https://images.unsplash.com/photo-1619994403073-7a5d9b6b9f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
      "https://images.unsplash.com/photo-1600428877938-29b44fc4b6f5?w=800&q=80"
    ]
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
    stock: 125,
    descriptionAr: "عطر الشعر المميز، تركيبة خاصة للشعر تمنحه رائحة رائعة ولمعان صحي.",
    description: "Special hair mist, a unique formula for hair that gives it a wonderful scent and healthy shine.",
    featuresAr: [
      "منتج أصلي 100%",
      "تركيبة خاصة للشعر",
      "لا يضر بالشعر",
      "رائحة منعشة طوال اليوم",
      "يمنح الشعر لمعاناً صحياً",
      "خصم 91% على السعر الأصلي"
    ],
    features: [
      "100% Original product",
      "Special formula for hair",
      "Hair-friendly",
      "Fresh scent all day",
      "Gives hair healthy shine",
      "91% discount on original price"
    ],
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "https://images.unsplash.com/photo-1556228578-dd516b1877f4?w=800&q=80"
    ]
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
    stock: 70,
    descriptionAr: "مجموعة Atractivo الخاصة، مجموعة متكاملة من العطور والعناية بالجسم بسعر مميز.",
    description: "Atractivo Special Collection, a complete set of perfumes and body care at a special price.",
    featuresAr: [
      "مجموعة متكاملة",
      "عطر + منتجات عناية بالجسم",
      "توفير 46% على السعر",
      "منتجات أصلية 100%",
      "مناسبة كهدية",
      "عرض محدود"
    ],
    features: [
      "Complete collection",
      "Perfume + body care products",
      "Save 46% on price",
      "100% Original products",
      "Perfect as a gift",
      "Limited offer"
    ],
    images: [
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=800&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80"
    ]
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
    stock: 100,
    descriptionAr: "مجموعة Jayden الخاصة، أكثر المجموعات مبيعاً في متجرنا. مجموعة عصرية متكاملة.",
    description: "Jayden Special Collection, our best-selling collection. A complete modern set.",
    featuresAr: [
      "الأكثر مبيعاً",
      "مجموعة متكاملة",
      "توفير 55% على السعر",
      "عصرية ومميزة",
      "مناسبة للشباب",
      "هدية مثالية"
    ],
    features: [
      "Best seller",
      "Complete collection",
      "Save 55% on price",
      "Modern and distinctive",
      "Perfect for youth",
      "Ideal gift"
    ],
    images: [
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80",
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=800&q=80",
      "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=800&q=80"
    ]
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
    stock: 20,
    descriptionAr: "مجموعة Calida الخاصة، مجموعة جديدة من العطور الدافئة ومنتجات العناية.",
    description: "Calida Special Collection, a new collection of warm perfumes and care products.",
    featuresAr: [
      "منتج جديد",
      "مجموعة دافئة وناعمة",
      "منتجات متكاملة",
      "أصلية 100%",
      "عبوة فاخرة",
      "كمية محدودة"
    ],
    features: [
      "New product",
      "Warm and soft collection",
      "Complete products",
      "100% Original",
      "Luxury packaging",
      "Limited quantity"
    ],
    images: [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
      "https://images.unsplash.com/photo-1587556930754-94e1f7b8569f?w=800&q=80",
      "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=800&q=80"
    ]
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
    stock: 100,
    descriptionAr: "مجموعة Aroma Amor الخاصة، مجموعة العلامة التجارية الأيقونية بسعر خاص.",
    description: "Aroma Amor Special Collection, our iconic brand collection at a special price.",
    featuresAr: [
      "مجموعة العلامة التجارية",
      "توفير 55%",
      "منتجات متكاملة",
      "أصلية 100%",
      "هدية مثالية",
      "عرض محدود"
    ],
    features: [
      "Brand collection",
      "Save 55%",
      "Complete products",
      "100% Original",
      "Perfect gift",
      "Limited offer"
    ],
    images: [
      "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=800&q=80",
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=800&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
    ]
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
    stock: 0,
    descriptionAr: "مجموعة Belleza الخاصة، مجموعة فاخرة من العطور ومنتجات العناية بالجسم. (نفذت الكمية)",
    description: "Belleza Special Collection, a luxury collection of perfumes and body care products. (Out of stock)",
    featuresAr: [
      "مجموعة فاخرة",
      "منتجات متكاملة",
      "أصلية 100%",
      "نفذت الكمية حالياً",
      "ستتوفر قريباً",
      "احجز الآن"
    ],
    features: [
      "Luxury collection",
      "Complete products",
      "100% Original",
      "Currently out of stock",
      "Available soon",
      "Reserve now"
    ],
    images: [
      "https://images.unsplash.com/photo-1587556930754-94e1f7b8569f?w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
    ]
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
    stock: 22,
    descriptionAr: "زيت Calida العطري، زيت عطري مركز برائحة دافئة ومميزة. مثالي للاستخدام اليومي.",
    description: "Calida aromatic oil, a concentrated fragrance oil with a warm and distinctive scent. Perfect for daily use.",
    featuresAr: [
      "زيت عطري مركز",
      "رائحة دافئة",
      "ثبات قوي",
      "اقتصادي في الاستخدام",
      "أصلي 100%",
      "خصم 64%"
    ],
    features: [
      "Concentrated fragrance oil",
      "Warm scent",
      "Strong longevity",
      "Economical to use",
      "100% Original",
      "64% discount"
    ],
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "https://images.unsplash.com/photo-1556228578-dd516b1877f4?w=800&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
    ]
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
    stock: 21,
    descriptionAr: "زبدة الجسم Jayden، تركيبة غنية تغذي البشرة وتمنحها رائحة رائعة ونعومة فائقة.",
    description: "Jayden Body Butter, a rich formula that nourishes the skin and gives it a wonderful scent and super softness.",
    featuresAr: [
      "تغذية عميقة للبشرة",
      "رائحة منعشة",
      "ترطيب يدوم 24 ساعة",
      "مناسبة لجميع أنواع البشرة",
      "امتصاص سريع",
      "منتج أصلي"
    ],
    features: [
      "Deep skin nourishment",
      "Refreshing scent",
      "24-hour hydration",
      "Suitable for all skin types",
      "Quick absorption",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1556228578-dd516b1877f4?w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80"
    ]
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
    stock: 24,
    descriptionAr: "صابونة ATRACTIVO للجسم، تنظيف عميق مع رائحة جذابة تدوم طويلاً.",
    description: "ATRACTIVO Body Soap, deep cleansing with an attractive long-lasting scent.",
    featuresAr: [
      "تنظيف عميق",
      "رائحة جذابة",
      "لطيفة على البشرة",
      "رغوة كريمية",
      "ترطيب مع التنظيف",
      "منتج أصلي"
    ],
    features: [
      "Deep cleansing",
      "Attractive scent",
      "Gentle on skin",
      "Creamy lather",
      "Moisturizing while cleansing",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80",
      "https://images.unsplash.com/photo-1576544070731-c0c33d5aac26?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ]
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
    stock: 55,
    descriptionAr: "صابونة BELLEZA الفاخرة، تنظيف فاخر مع رائحة العطر الأيقوني.",
    description: "BELLEZA luxury body soap, luxurious cleansing with the iconic perfume scent.",
    featuresAr: [
      "صابونة فاخرة",
      "رائحة BELLEZA الأيقونية",
      "ترطيب وتنظيف",
      "لطيفة على البشرة",
      "خصم 82%",
      "منتج أصلي"
    ],
    features: [
      "Luxury soap",
      "BELLEZA iconic scent",
      "Moisturizing and cleansing",
      "Gentle on skin",
      "82% discount",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1576544070731-c0c33d5aac26?w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80",
      "https://images.unsplash.com/photo-1585933646503-0857265d0a6f?w=800&q=80"
    ]
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
    stock: 22,
    descriptionAr: "صابونة AROMA AMOR، صابونة العلامة التجارية الأيقونية بتركيبة لطيفة.",
    description: "AROMA AMOR Body Soap, our iconic brand soap with a gentle formula.",
    featuresAr: [
      "صابونة العلامة التجارية",
      "تركيبة لطيفة",
      "رائحة مميزة",
      "تنظيف وترطيب",
      "سعر مناسب",
      "منتج أصلي"
    ],
    features: [
      "Brand soap",
      "Gentle formula",
      "Distinctive scent",
      "Cleansing and moisturizing",
      "Affordable price",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1576544070731-c0c33d5aac26?w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80"
    ]
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
    stock: 28,
    descriptionAr: "صابونة Calida الدافئة، تنظيف لطيف مع رائحة دافئة ومريحة.",
    description: "Calida warm body soap, gentle cleansing with a warm and comforting scent.",
    featuresAr: [
      "تنظيف لطيف",
      "رائحة دافئة",
      "مناسبة للاستخدام اليومي",
      "ترطيب طبيعي",
      "خصم 64%",
      "منتج أصلي"
    ],
    features: [
      "Gentle cleansing",
      "Warm scent",
      "Perfect for daily use",
      "Natural moisturizing",
      "64% discount",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1585933646503-0857265d0a6f?w=800&q=80",
      "https://images.unsplash.com/photo-1600857062241-98e5dba60f2f?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ]
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
    stock: 15,
    descriptionAr: "صابونة Jayden العصرية، تنظيف منعش مع رائحة شبابية حيوية.",
    description: "Jayden modern body soap, refreshing cleansing with a vibrant youthful scent.",
    featuresAr: [
      "تنظيف منعش",
      "رائحة شبابية",
      "رغوة غنية",
      "مناسبة للشباب",
      "ترطيب فعال",
      "منتج أصلي"
    ],
    features: [
      "Refreshing cleansing",
      "Youthful scent",
      "Rich lather",
      "Perfect for youth",
      "Effective moisturizing",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1600857062241-98e5dba60f2f?w=800&q=80",
      "https://images.unsplash.com/photo-1585933646503-0857265d0a6f?w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80"
    ]
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
    stock: 29,
    descriptionAr: "كريم الجسم ATRACTIVO، ترطيب عميق مع رائحة جذابة تدوم طوال اليوم.",
    description: "ATRACTIVO Body Cream, deep hydration with an attractive all-day scent.",
    featuresAr: [
      "ترطيب عميق",
      "رائحة جذابة",
      "امتصاص سريع",
      "نعومة فائقة",
      "خصم 66%",
      "منتج أصلي"
    ],
    features: [
      "Deep hydration",
      "Attractive scent",
      "Quick absorption",
      "Super softness",
      "66% discount",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
    ]
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
    stock: 0,
    descriptionAr: "كريم الجسم BELLEZA الفاخر، ترطيب فاخر مع رائحة العطر الأيقوني. (نفذت الكمية)",
    description: "BELLEZA luxury body cream, luxurious hydration with the iconic perfume scent. (Out of stock)",
    featuresAr: [
      "كريم فاخر",
      "رائحة BELLEZA",
      "ترطيب مكثف",
      "نفذت الكمية",
      "ستتوفر قريباً",
      "احجز الآن"
    ],
    features: [
      "Luxury cream",
      "BELLEZA scent",
      "Intensive hydration",
      "Out of stock",
      "Available soon",
      "Reserve now"
    ],
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
    ]
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
    stock: 27,
    descriptionAr: "كريم الجسم AROMA AMOR، كريم العلامة التجارية الأيقوني بتركيبة غنية.",
    description: "AROMA AMOR Body Cream, our iconic brand cream with a rich formula.",
    featuresAr: [
      "كريم العلامة التجارية",
      "تركيبة غنية",
      "ترطيب يدوم",
      "رائحة مميزة",
      "خصم 63%",
      "منتج أصلي"
    ],
    features: [
      "Brand cream",
      "Rich formula",
      "Long-lasting hydration",
      "Distinctive scent",
      "63% discount",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80"
    ]
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
    stock: 9,
    descriptionAr: "مقشر الجسم ATRACTIVO، تقشير لطيف يزيل الخلايا الميتة ويمنح البشرة نعومة فائقة.",
    description: "ATRACTIVO Body Scrub, gentle exfoliation that removes dead cells and gives skin super softness.",
    featuresAr: [
      "تقشير لطيف",
      "يزيل الخلايا الميتة",
      "نعومة فورية",
      "رائحة جذابة",
      "طبيعي وآمن",
      "منتج أصلي"
    ],
    features: [
      "Gentle exfoliation",
      "Removes dead cells",
      "Instant softness",
      "Attractive scent",
      "Natural and safe",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80"
    ]
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
    stock: 15,
    descriptionAr: "مقشر الجسم BELLEZA الفاخر، تقشير فاخر مع رائحة العطر الأيقوني.",
    description: "BELLEZA luxury body scrub, luxurious exfoliation with the iconic perfume scent.",
    featuresAr: [
      "مقشر فاخر",
      "رائحة BELLEZA",
      "تقشير فعال",
      "نعومة فائقة",
      "خصم 33%",
      "منتج أصلي"
    ],
    features: [
      "Luxury scrub",
      "BELLEZA scent",
      "Effective exfoliation",
      "Super softness",
      "33% discount",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&q=80"
    ]
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
    stock: 23,
    descriptionAr: "مقشر الجسم AROMA AMOR، مقشر العلامة التجارية الأيقوني بتركيبة فعالة.",
    description: "AROMA AMOR Body Scrub, our iconic brand scrub with an effective formula.",
    featuresAr: [
      "مقشر العلامة التجارية",
      "تركيبة فعالة",
      "تقشير لطيف",
      "رائحة مميزة",
      "خصم 57%",
      "منتج أصلي"
    ],
    features: [
      "Brand scrub",
      "Effective formula",
      "Gentle exfoliation",
      "Distinctive scent",
      "57% discount",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&q=80",
      "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800&q=80"
    ]
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
    stock: 25,
    descriptionAr: "مقشر الجسم Calida الدافئ، تقشير لطيف مع رائحة دافئة ومريحة.",
    description: "Calida warm body scrub, gentle exfoliation with a warm and comforting scent.",
    featuresAr: [
      "تقشير لطيف",
      "رائحة دافئة",
      "نعومة طبيعية",
      "مناسب للبشرة الحساسة",
      "خصم 60%",
      "منتج أصلي"
    ],
    features: [
      "Gentle exfoliation",
      "Warm scent",
      "Natural softness",
      "Suitable for sensitive skin",
      "60% discount",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80"
    ]
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
    stock: 14,
    descriptionAr: "مقشر الجسم Jayden العصري، تقشير منعش مع رائحة شبابية حيوية.",
    description: "Jayden modern body scrub, refreshing exfoliation with a vibrant youthful scent.",
    featuresAr: [
      "تقشير منعش",
      "رائحة شبابية",
      "نعومة فورية",
      "مناسب للشباب",
      "خصم 29%",
      "منتج أصلي"
    ],
    features: [
      "Refreshing exfoliation",
      "Youthful scent",
      "Instant softness",
      "Perfect for youth",
      "29% discount",
      "Original product"
    ],
    images: [
      "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80"
    ]
  }
];

export const categories = [
  { id: 'all', name: 'الكل', nameEn: 'All' },
  { id: 'perfumes', name: 'عطور', nameEn: 'Perfumes' },
  { id: 'collections', name: 'المجموعات', nameEn: 'Collections' },
  { id: 'body soap', name: 'صابون', nameEn: 'Body Soap' },
  { id: 'body scrub', name: 'مقشرات', nameEn: 'Body Scrub' },
  { id: 'body cream', name: 'كريم الجسم', nameEn: 'Body Cream' },
  { id: 'body butter', name: 'زبدة الجسم', nameEn: 'Body Butter' },
  { id: 'oils', name: 'زيوت', nameEn: 'Oils' },
];

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}
