// =====================================================
// Constants - بيانات ثابتة للمشروع
// =====================================================

// معلومات الشركة
export const COMPANY_INFO = {
  name: "Aroma Amor",
  nameAr: "عطور أروما أمور",
  slogan: "عطور فاخرة من الكويت",
  description:
    "نقدم لك أفضل العطور الفاخرة الأصلية 100% من قلب الكويت إلى جميع دول الخليج بأسعار تنافسية وجودة عالية.",
  logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/13457591-dfc4-41dc-91fd-9d07a9f98199-aromaamorperfumes-com/assets/icons/logo_2082_1711618876-2.png",
  email: "info@aromaamor.com",
  phone: "+965 XXXX XXXX",
  location: "الكويت، دولة الكويت",
  workingHours: {
    days: "السبت - الخميس",
    hours: "9:00 ص - 10:00 م",
  },
} as const;

// روابط التنقل
export const NAVIGATION_LINKS = [
  { name: "الرئيسية", nameEn: "Home", href: "#" },
  { name: "المنتجات", nameEn: "Products", href: "#products" },
  { name: "من نحن", nameEn: "About", href: "#about" },
  { name: "اتصل بنا", nameEn: "Contact", href: "#contact" },
] as const;

// دول الخليج للتوصيل
export const GCC_COUNTRIES = [
  { name: "الكويت", flag: "🇰🇼" },
  { name: "السعودية", flag: "🇸🇦" },
  { name: "الإمارات", flag: "🇦🇪" },
  { name: "قطر", flag: "🇶🇦" },
  { name: "البحرين", flag: "🇧🇭" },
  { name: "عمان", flag: "🇴🇲" },
] as const;

// روابط التواصل الاجتماعي
export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: "Facebook" },
  { name: "Instagram", href: "#", icon: "Instagram" },
  { name: "Twitter", href: "#", icon: "Twitter" },
] as const;

// فئات المنتجات
export const PRODUCT_CATEGORIES = [
  { id: "all", name: "الكل", nameEn: "All" },
  { id: "perfumes", name: "عطور", nameEn: "Perfumes" },
  { id: "collections", name: "المجموعات", nameEn: "Collections" },
  { id: "body soap", name: "صابون", nameEn: "Body Soap" },
  { id: "body scrub", name: "مقشرات", nameEn: "Body Scrub" },
  { id: "body cream", name: "كريم الجسم", nameEn: "Body Cream" },
  { id: "body butter", name: "زبدة الجسم", nameEn: "Body Butter" },
  { id: "oils", name: "زيوت", nameEn: "Oils" },
] as const;

// إحصائيات الشركة
export const COMPANY_STATS = [
  { value: "200+", label: "منتج أصلي" },
  { value: "5000+", label: "عميل سعيد" },
  { value: "10+", label: "سنوات خبرة" },
] as const;

// العملة
export const CURRENCY = {
  code: "KWD",
  symbol: "د.ك",
  name: "دينار كويتي",
} as const;

// Product Interface
export interface Product {
  id: number;
  name: string;
  nameAr: string;
  nameEn?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  category: string;
  categoryAr: string;
  image: string;
  badge?: string;
  discount?: string;
  stock: number;
  brand?: string;
  size?: string;
  isNew?: boolean;
  isBestseller?: boolean;
  description?: string;
  descriptionAr?: string;
}

// SEO Metadata
export const SEO_CONFIG = {
  title: "Aroma Amor | عطور فاخرة أصلية من الكويت",
  description:
    "أفخر العطور العالمية الأصلية 100% من الكويت. توصيل سريع لجميع دول الخليج. خصومات تصل إلى 88% مع ضمان استرجاع المال.",
  keywords: [
    "عطور",
    "عطور أصلية",
    "عطور الكويت",
    "عطور فاخرة",
    "perfumes",
    "Kuwait perfumes",
    "Aroma Amor",
    "عطور رجالية",
    "عطور نسائية",
    "توصيل عطور الخليج",
  ],
  openGraph: {
    siteName: "Aroma Amor Perfumes",
    locale: "ar_KW",
    type: "website",
  },
} as const;
