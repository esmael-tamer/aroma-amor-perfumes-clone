'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/lib/constants';

// أنواع البيانات
export interface Category {
  id: string;
  nameAr: string;
  nameEn: string;
  icon: string;
  isActive: boolean;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  isActive: boolean;
}

export interface SiteSettings {
  siteName: string;
  siteSlogan: string;
  logo: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  currency: string;
  currencySymbol: string;
  freeShippingThreshold: number;
  socialMedia: {
    instagram: string;
    twitter: string;
    facebook: string;
    tiktok: string;
  };
  workingHours: string;
  aboutText: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  code: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  minOrderAmount: number;
}

interface SiteSettingsContextType {
  // المنتجات
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: number, product: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  
  // الأقسام
  categories: Category[];
  addCategory: (category: Omit<Category, 'id'>) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  
  // البانرات
  banners: Banner[];
  addBanner: (banner: Omit<Banner, 'id'>) => void;
  updateBanner: (id: string, banner: Partial<Banner>) => void;
  deleteBanner: (id: string) => void;
  
  // إعدادات الموقع
  settings: SiteSettings;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  
  // العروض
  promotions: Promotion[];
  addPromotion: (promotion: Omit<Promotion, 'id'>) => void;
  updatePromotion: (id: string, promotion: Partial<Promotion>) => void;
  deletePromotion: (id: string) => void;
}

const defaultSettings: SiteSettings = {
  siteName: 'Aroma & Amor',
  siteSlogan: 'عطور فاخرة',
  logo: '/logo.png',
  phone: '+965 0000 0000',
  whatsapp: '96500000000',
  email: 'info@aromaamor.com',
  address: 'الكويت - السالمية',
  currency: 'KWD',
  currencySymbol: 'د.ك',
  freeShippingThreshold: 0,
  socialMedia: {
    instagram: 'https://instagram.com/aromaamor',
    twitter: 'https://twitter.com/aromaamor',
    facebook: 'https://facebook.com/aromaamor',
    tiktok: 'https://tiktok.com/@aromaamor',
  },
  workingHours: '10:00 صباحاً - 10:00 مساءً',
  aboutText: 'متجر متخصص في العطور الفاخرة والأصلية 100%',
};

const defaultCategories: Category[] = [
  { id: '1', nameAr: 'عطور رجالية', nameEn: 'Men', icon: '👔', isActive: true },
  { id: '2', nameAr: 'عطور نسائية', nameEn: 'Women', icon: '👗', isActive: true },
  { id: '3', nameAr: 'عطور يونيسكس', nameEn: 'Unisex', icon: '✨', isActive: true },
  { id: '4', nameAr: 'مجموعات هدايا', nameEn: 'Gift Sets', icon: '🎁', isActive: true },
  { id: '5', nameAr: 'عطور عود', nameEn: 'Oud', icon: '🪵', isActive: true },
];

const SiteSettingsContext = createContext<SiteSettingsContextType | undefined>(undefined);

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // تحميل البيانات من localStorage
  useEffect(() => {
    const loadData = async () => {
      try {
        // تحميل المنتجات من الملف الأصلي
        const { products: initialProducts } = await import('@/data/products');
        
        const savedProducts = localStorage.getItem('site_products');
        const savedCategories = localStorage.getItem('site_categories');
        const savedBanners = localStorage.getItem('site_banners');
        const savedSettings = localStorage.getItem('site_settings');
        const savedPromotions = localStorage.getItem('site_promotions');

        setProducts(savedProducts ? JSON.parse(savedProducts) : initialProducts);
        if (savedCategories) setCategories(JSON.parse(savedCategories));
        if (savedBanners) setBanners(JSON.parse(savedBanners));
        if (savedSettings) setSettings({ ...defaultSettings, ...JSON.parse(savedSettings) });
        if (savedPromotions) setPromotions(JSON.parse(savedPromotions));
      } catch (error) {
        console.error('Error loading site data:', error);
      }
      setIsLoaded(true);
    };
    loadData();
  }, []);

  // حفظ البيانات
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('site_products', JSON.stringify(products));
    }
  }, [products, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('site_categories', JSON.stringify(categories));
    }
  }, [categories, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('site_banners', JSON.stringify(banners));
    }
  }, [banners, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('site_settings', JSON.stringify(settings));
    }
  }, [settings, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('site_promotions', JSON.stringify(promotions));
    }
  }, [promotions, isLoaded]);

  // إدارة المنتجات
  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now() } as Product;
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: number, product: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...product } : p));
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // إدارة الأقسام
  const addCategory = (category: Omit<Category, 'id'>) => {
    const newCategory = { ...category, id: Date.now().toString() };
    setCategories(prev => [...prev, newCategory]);
  };

  const updateCategory = (id: string, category: Partial<Category>) => {
    setCategories(prev => prev.map(c => c.id === id ? { ...c, ...category } : c));
  };

  const deleteCategory = (id: string) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  };

  // إدارة البانرات
  const addBanner = (banner: Omit<Banner, 'id'>) => {
    const newBanner = { ...banner, id: Date.now().toString() };
    setBanners(prev => [...prev, newBanner]);
  };

  const updateBanner = (id: string, banner: Partial<Banner>) => {
    setBanners(prev => prev.map(b => b.id === id ? { ...b, ...banner } : b));
  };

  const deleteBanner = (id: string) => {
    setBanners(prev => prev.filter(b => b.id !== id));
  };

  // إعدادات الموقع
  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // إدارة العروض
  const addPromotion = (promotion: Omit<Promotion, 'id'>) => {
    const newPromotion = { ...promotion, id: Date.now().toString() };
    setPromotions(prev => [...prev, newPromotion]);
  };

  const updatePromotion = (id: string, promotion: Partial<Promotion>) => {
    setPromotions(prev => prev.map(p => p.id === id ? { ...p, ...promotion } : p));
  };

  const deletePromotion = (id: string) => {
    setPromotions(prev => prev.filter(p => p.id !== id));
  };

  return (
    <SiteSettingsContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      categories,
      addCategory,
      updateCategory,
      deleteCategory,
      banners,
      addBanner,
      updateBanner,
      deleteBanner,
      settings,
      updateSettings,
      promotions,
      addPromotion,
      updatePromotion,
      deletePromotion,
    }}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error('useSiteSettings must be used within SiteSettingsProvider');
  }
  return context;
}
