import { memo } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { NAVIGATION_LINKS, GCC_COUNTRIES, SOCIAL_LINKS, COMPANY_INFO } from '@/lib/constants';

const Footer = memo(function Footer() {
  const categories = [
    { name: 'عطور نسائية', href: '#' },
    { name: 'عطور رجالية', href: '#' },
    { name: 'عطور شرقية', href: '#' },
    { name: 'عطور فاخرة', href: '#' },
  ];

  // Map icon names to components
  const iconMap = {
    Facebook,
    Instagram,
    Twitter,
  } as const;

  return (
    <footer 
      className="bg-gradient-to-b from-[#2C2420] via-[#1a1614] to-black text-white relative overflow-hidden"
      role="contentinfo"
      aria-label="تذييل الموقع"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4CCC4]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9B8F85]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2">
                <Image
                  src={COMPANY_INFO.logo}
                  alt={`${COMPANY_INFO.name} Logo`}
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{COMPANY_INFO.name}</h2>
                <p className="text-sm text-[#D4CCC4]">{COMPANY_INFO.slogan}</p>
              </div>
            </div>
            <p className="text-[#D4CCC4] leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="flex gap-3" role="list" aria-label="روابط التواصل الاجتماعي">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`تابعنا على ${social.name}`}
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
                    role="listitem"
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="روابط سريعة">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-amber-500 rounded-full" aria-hidden="true" />
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#D4CCC4] hover:text-white transition-colors inline-flex items-center gap-2 hover:translate-x-2 transition-transform"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full" aria-hidden="true" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* GCC Delivery */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full" aria-hidden="true" />
              نوصل إلى
            </h3>
            <ul className="space-y-3" aria-label="دول التوصيل">
              {GCC_COUNTRIES.map((country) => (
                <li key={country.name} className="text-[#D4CCC4] flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden="true" />
                  {country.flag} {country.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <address className="not-italic">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full" aria-hidden="true" />
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="text-[#D4CCC4]">
                  {COMPANY_INFO.location} 🇰🇼
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-[#D4CCC4] hover:text-white transition-colors text-left" 
                  dir="ltr"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-[#D4CCC4] hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="text-[#D4CCC4]">
                  {COMPANY_INFO.workingHours.days}<br/>
                  {COMPANY_INFO.workingHours.hours}
                </span>
              </li>
            </ul>
          </address>
        </div>

        {/* Trust Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center" role="list" aria-label="مميزاتنا">
              <div role="listitem">
                <div className="text-3xl font-bold text-amber-500" aria-hidden="true">✓</div>
                <div className="text-sm text-[#D4CCC4] mt-1">منتجات أصلية</div>
              </div>
              <div className="h-8 w-px bg-white/20" aria-hidden="true" />
              <div role="listitem">
                <div className="text-3xl font-bold text-emerald-500" aria-hidden="true">✓</div>
                <div className="text-sm text-[#D4CCC4] mt-1">شحن مجاني</div>
              </div>
              <div className="h-8 w-px bg-white/20" aria-hidden="true" />
              <div role="listitem">
                <div className="text-3xl font-bold text-blue-500" aria-hidden="true">✓</div>
                <div className="text-sm text-[#D4CCC4] mt-1">توصيل سريع</div>
              </div>
              <div className="h-8 w-px bg-white/20" aria-hidden="true" />
              <div role="listitem">
                <div className="text-3xl font-bold text-purple-500" aria-hidden="true">✓</div>
                <div className="text-sm text-[#D4CCC4] mt-1">ضمان الجودة</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#D4CCC4] text-sm">
            <p className="text-center md:text-right">
              © {new Date().getFullYear()} {COMPANY_INFO.name} - الكويت 🇰🇼 | جميع الحقوق محفوظة
            </p>
            <nav className="flex gap-6" aria-label="روابط قانونية">
              <a href="#" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-white transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="hover:text-white transition-colors">
                سياسة الاسترجاع
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;