'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/sections/loading-screen';
import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero-section';
import ProductsSection from '@/components/sections/products-section';
import FeaturesSection from '@/components/sections/features-section';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
}