import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'المنتجات', href: '#products' },
    { name: 'من نحن', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  const categories = [
    { name: 'عطور نسائية', href: '#' },
    { name: 'عطور رجالية', href: '#' },
    { name: 'عطور شرقية', href: '#' },
    { name: 'عطور فاخرة', href: '#' },
  ];

  const gccCountries = [
    '🇰🇼 الكويت',
    '🇸🇦 السعودية', 
    '🇦🇪 الإمارات',
    '🇶🇦 قطر',
    '🇧🇭 البحرين',
    '🇴🇲 عمان'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2C2420] to-[#1a1614] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/13457591-dfc4-41dc-91fd-9d07a9f98199-aromaamorperfumes-com/assets/icons/logo_2082_1711618876-2.png"
                  alt="Aroma Amor Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Aroma Amor</h3>
                <p className="text-sm text-[#D4CCC4]">عطور فاخرة من الكويت</p>
              </div>
            </div>
            <p className="text-[#D4CCC4] leading-relaxed">
              نقدم لك أفضل العطور الفاخرة الأصلية 100% من قلب الكويت إلى جميع دول الخليج بأسعار تنافسية وجودة عالية.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#D4CCC4] hover:text-white transition-colors inline-flex items-center gap-2 hover:translate-x-2 transition-transform"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* GCC Delivery */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
              نوصل إلى
            </h4>
            <div className="space-y-3">
              {gccCountries.map((country) => (
                <div key={country} className="text-[#D4CCC4] flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  {country}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-[#D4CCC4]">
                  الكويت، دولة الكويت 🇰🇼
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-[#D4CCC4] text-left" dir="ltr">+965 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-[#D4CCC4]">info@aromaamor.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-[#D4CCC4]">
                  السبت - الخميس<br/>
                  9:00 ص - 10:00 م
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-500">✓</div>
                <div className="text-sm text-[#D4CCC4] mt-1">منتجات أصلية</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold text-emerald-500">✓</div>
                <div className="text-sm text-[#D4CCC4] mt-1">شحن مجاني</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold text-blue-500">✓</div>
                <div className="text-sm text-[#D4CCC4] mt-1">توصيل سريع</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold text-purple-500">✓</div>
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
              © 2024 Aroma Amor Perfumes - الكويت 🇰🇼 | جميع الحقوق محفوظة
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-white transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="hover:text-white transition-colors">
                سياسة الاسترجاع
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;