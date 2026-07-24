'use client';

import { memo, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Truck } from 'lucide-react';
import { GCC_COUNTRIES, COMPANY_INFO, COMPANY_STATS } from '@/lib/constants';

const HeroSection = memo(function HeroSection() {
  const scrollToProducts = useCallback(() => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Memoize GCC countries display
  const gccDisplay = useMemo(() => 
    GCC_COUNTRIES.map(country => `${country.flag} ${country.name}`),
    []
  );

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E8EAED] via-white to-[#D4CCC4]/40 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#D4CCC4]/30 to-[#9B8F85]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#9B8F85]/20 to-[#D4CCC4]/30 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <MapPin className="w-5 h-5 text-[#2C2420]" aria-hidden="true" />
              <span className="text-[#2C2420] font-semibold">الكويت 🇰🇼</span>
            </div>

            <div className="inline-block mb-4">
              <Image
                src={COMPANY_INFO.logo}
                alt={COMPANY_INFO.name}
                width={120}
                height={120}
                className="mx-auto lg:mx-0"
                priority
              />
            </div>
            
            <h1 
              id="hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C2420] leading-tight"
            >
              {COMPANY_INFO.name}
              <span 
                className="block text-[#9B8F85] mt-2 font-logo-script"
              >
                Perfumes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#4A5568] max-w-xl mx-auto lg:mx-0 font-semibold">
              أفخر العطور العالمية من قلب الكويت 🌸
            </p>
            
            <p className="text-lg text-[#4A5568] max-w-xl mx-auto lg:mx-0">
              عطور أصلية 100% • توصيل سريع لجميع دول الخليج • أسعار منافسة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button type="button"
                size="lg" 
                className="bg-[#2C2420] hover:bg-[#2C2420]/90 text-white px-10 py-7 text-xl rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={scrollToProducts}
                aria-label="تصفح المنتجات"
              >
                تسوق الآن 🛍️
              </Button>
              <Button type="button"
                size="lg" 
                variant="outline"
                className="border-2 border-[#2C2420] text-[#2C2420] hover:bg-[#2C2420] hover:text-white px-10 py-7 text-xl rounded-full transition-all"
                aria-label="تواصل معنا"
              >
                📞 اتصل بنا
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8" role="list" aria-label="إحصائياتنا">
              {COMPANY_STATS.map((stat) => (
                <div 
                  key={stat.label} 
                  className="text-center lg:text-right bg-white/50 rounded-xl p-4"
                  role="listitem"
                >
                  <div className="text-4xl font-bold text-[#2C2420]">{stat.value}</div>
                  <div className="text-sm text-[#9B8F85] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Featured Product Display */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Circle */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#D4CCC4]/40 to-transparent blur-2xl" />
              </div>
              
              {/* Product Showcase */}
              <article className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-[#D4CCC4]/50">
                <div className="aspect-square bg-gradient-to-br from-[#D4CCC4]/30 to-[#E8EAED]/50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80"
                    alt="عطر فاخر - المنتج المميز"
                    width={400}
                    height={400}
                    className="object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                    🔥 الأكثر مبيعاً
                  </span>
                  <h3 className="text-2xl font-bold text-[#2C2420]">عطور فاخرة أصلية</h3>
                  <p className="text-[#4A5568] mt-2">تجربة عطرية استثنائية</p>
                </div>
              </article>

              {/* Floating Cards */}
              <div 
                className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-5 shadow-xl animate-bounce-3s"
                aria-hidden="true"
              >
                <div className="text-3xl mb-1">✨</div>
                <div className="text-xs font-bold">أصلي 100%</div>
              </div>
              <div 
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl p-5 shadow-xl animate-bounce-4s animation-delay-1000"
                aria-hidden="true"
              >
                <div className="text-3xl mb-1">🚚</div>
                <div className="text-xs font-bold">توصيل مجاني</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        type="button"
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2C2420] focus-visible:outline-none rounded-full"
        aria-label="اذهب إلى المنتجات"
      >
        <div className="w-6 h-10 border-2 border-[#2C2420] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#2C2420] rounded-full mt-2 animate-pulse" />
        </div>
      </button>
    </section>
  );
});

export default HeroSection;