import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Truck } from 'lucide-react';

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#E8EAED] to-[#D4CCC4]/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4CCC4]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9B8F85]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <MapPin className="w-5 h-5 text-[#2C2420]" />
              <span className="text-[#2C2420] font-semibold">الكويت 🇰🇼</span>
            </div>

            <div className="inline-block mb-4">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/13457591-dfc4-41dc-91fd-9d07a9f98199-aromaamorperfumes-com/assets/icons/logo_2082_1711618876-2.png"
                alt="Aroma Amor Logo"
                width={120}
                height={120}
                className="mx-auto lg:mx-0"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C2420] leading-tight">
              Aroma Amor
              <span className="block text-[#9B8F85] mt-2" style={{ fontFamily: 'var(--font-logo-script)' }}>
                Perfumes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#4A5568] max-w-xl mx-auto lg:mx-0 font-semibold">
              أفخر العطور العالمية من قلب الكويت 🌸
            </p>
            
            <p className="text-lg text-[#4A5568] max-w-xl mx-auto lg:mx-0">
              عطور أصلية 100% • توصيل سريع لجميع دول الخليج • أسعار منافسة
            </p>

            {/* GCC Countries */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-[#2C2420]" />
                <h3 className="text-lg font-bold text-[#2C2420]">نوصل لجميع دول الخليج</h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {['🇰🇼 الكويت', '🇸🇦 السعودية', '🇦🇪 الإمارات', '🇶🇦 قطر', '🇧🇭 البحرين', '🇴🇲 عمان'].map((country) => (
                  <span key={country} className="bg-[#2C2420] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {country}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-[#2C2420] hover:bg-[#2C2420]/90 text-white px-10 py-7 text-xl rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={scrollToProducts}
              >
                تسوق الآن 🛍️
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[#2C2420] text-[#2C2420] hover:bg-[#2C2420] hover:text-white px-10 py-7 text-xl rounded-full transition-all"
              >
                📞 اتصل بنا
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-right bg-white/50 rounded-xl p-4">
                <div className="text-4xl font-bold text-[#2C2420]">200+</div>
                <div className="text-sm text-[#9B8F85] font-medium">منتج أصلي</div>
              </div>
              <div className="text-center lg:text-right bg-white/50 rounded-xl p-4">
                <div className="text-4xl font-bold text-[#2C2420]">5000+</div>
                <div className="text-sm text-[#9B8F85] font-medium">عميل سعيد</div>
              </div>
              <div className="text-center lg:text-right bg-white/50 rounded-xl p-4">
                <div className="text-4xl font-bold text-[#2C2420]">10+</div>
                <div className="text-sm text-[#9B8F85] font-medium">سنوات خبرة</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Product Display */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#D4CCC4]/40 to-transparent blur-2xl" />
              </div>
              
              {/* Product Showcase */}
              <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-[#D4CCC4]/50">
                <div className="aspect-square bg-gradient-to-br from-[#D4CCC4]/30 to-[#E8EAED]/50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80"
                    alt="Luxury Perfume"
                    width={400}
                    height={400}
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-block bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                    🔥 الأكثر مبيعاً
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C2420]">عطور فاخرة أصلية</h3>
                  <p className="text-[#4A5568] mt-2">تجربة عطرية استثنائية</p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-5 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="text-3xl mb-1">✨</div>
                <div className="text-xs font-bold">أصلي 100%</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl p-5 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="text-3xl mb-1">🚚</div>
                <div className="text-xs font-bold">توصيل مجاني</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#2C2420] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#2C2420] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;