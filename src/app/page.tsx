import { Suspense } from 'react';
import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero-section';
import ProductsSection from '@/components/sections/products-section';
import FeaturesSection from '@/components/sections/features-section';
import Footer from '@/components/sections/footer';
import LoadingScreen from '@/components/sections/loading-screen';

// JSON-LD للـ SEO (Structured Data)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Aroma Amor Perfumes',
  description: 'أفخر العطور العالمية الأصلية 100% من الكويت',
  url: 'https://aromaamor.com',
  logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/13457591-dfc4-41dc-91fd-9d07a9f98199-aromaamorperfumes-com/assets/icons/logo_2082_1711618876-2.png',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KW',
    addressRegion: 'الكويت',
  },
  priceRange: '$$',
  openingHours: 'Sa-Th 09:00-22:00',
  areaServed: ['KW', 'SA', 'AE', 'QA', 'BH', 'OM'],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      
      <main id="main-content" className="min-h-screen" role="main">
        <Suspense fallback={<LoadingScreen />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
          <FeaturesSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
          <ProductsSection />
        </Suspense>
      </main>
      
      <Footer />
    </>
  );
}