import { memo } from 'react';
import { Sparkles, ShieldCheck, Truck, HeadphonesIcon, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  titleEn: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: 'عطور أصلية 100%',
    titleEn: 'Authentic Perfumes',
    description: 'جميع منتجاتنا أصلية ومضمونة من أفضل العلامات التجارية العالمية',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: ShieldCheck,
    title: 'ضمان استرجاع المال',
    titleEn: 'Quality Guarantee',
    description: 'ضمان استرجاع المال خلال 30 يوم إذا لم تكن راضياً عن المنتج',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Truck,
    title: 'توصيل سريع للخليج',
    titleEn: 'Fast Delivery',
    description: 'توصيل سريع لجميع دول الخليج - من الكويت إلى باب منزلك',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: HeadphonesIcon,
    title: 'دعم على مدار الساعة',
    titleEn: 'Premium Support',
    description: 'فريق خدمة العملاء متاح 24/7 للرد على استفساراتك',
    color: 'from-purple-500 to-pink-500'
  }
];

const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-[#E8EAED]"
      aria-labelledby="features-title"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 px-6 py-2 rounded-full text-sm font-bold mb-6">
            ✨ لماذا نحن الخيار الأفضل
          </span>
          <h2 
            id="features-title"
            className="text-4xl md:text-5xl font-bold text-[#2C2420] mb-4"
          >
            مميزات لا تُضاهى
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            نقدم لك تجربة تسوق استثنائية مع أفضل الخدمات في الكويت والخليج
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.titleEn}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#E8EAED] hover:border-[#D4CCC4] hover:-translate-y-4 hover:scale-105"
                role="listitem"
              >
                {/* Icon Container */}
                <div 
                  className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}
                  aria-hidden="true"
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#2C2420] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#4A5568] leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div 
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D4CCC4]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" 
                  aria-hidden="true"
                />
                
                {/* Number Badge */}
                <span 
                  className="absolute -top-3 -right-3 bg-[#2C2420] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
              </article>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-[#D4CCC4]/50">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-[#2C2420] mb-2">موثوق بنا في جميع أنحاء الخليج</h3>
            <p className="text-[#4A5568]">آلاف العملاء السعداء في الكويت والسعودية والإمارات وقطر والبحرين وعمان</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8" role="list" aria-label="إحصائيات الثقة">
            <div className="text-center" role="listitem">
              <div className="text-4xl mb-2" aria-label="تقييم 5 نجوم">⭐⭐⭐⭐⭐</div>
              <div className="text-sm text-[#4A5568] font-medium">تقييم 5/5</div>
            </div>
            <div className="h-12 w-px bg-[#D4CCC4]" aria-hidden="true" />
            <div className="text-center" role="listitem">
              <div className="text-3xl font-bold text-[#2C2420]">5000+</div>
              <div className="text-sm text-[#4A5568] font-medium">عميل راضٍ</div>
            </div>
            <div className="h-12 w-px bg-[#D4CCC4]" aria-hidden="true" />
            <div className="text-center" role="listitem">
              <div className="text-3xl font-bold text-[#2C2420]">99%</div>
              <div className="text-sm text-[#4A5568] font-medium">نسبة الرضا</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FeaturesSection;