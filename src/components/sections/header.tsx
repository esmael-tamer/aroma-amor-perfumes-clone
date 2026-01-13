'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ShoppingCart, Menu, X, Search, User, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'الرئيسية', nameEn: 'Home', href: '#' },
    { name: 'المنتجات', nameEn: 'Products', href: '#products' },
    { name: 'من نحن', nameEn: 'About', href: '#about' },
    { name: 'اتصل بنا', nameEn: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg shadow-lg border-b-2 border-[#D4CCC4]/30">
      {/* Top Bar - Kuwait Location & Free Shipping */}
      <div className="bg-gradient-to-r from-[#2C2420] to-[#4A5568] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="font-bold">📍 الكويت</span>
              <span className="hidden sm:inline text-white/80">| نوصل لجميع دول الخليج 🚚</span>
            </div>
            <div className="flex items-center gap-2 font-bold">
              ✨ شحن مجاني على جميع الطلبات | عطور أصلية 100%
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/13457591-dfc4-41dc-91fd-9d07a9f98199-aromaamorperfumes-com/assets/icons/logo_2082_1711618876-2.png"
              alt="Aroma Amor Logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#2C2420]">Aroma Amor</h1>
              <p className="text-xs text-[#9B8F85] font-semibold">عطور فاخرة من الكويت 🇰🇼</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#2C2420] hover:text-[#9B8F85] font-bold transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2420] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search Button - Desktop */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:flex text-[#2C2420] hover:bg-[#E8EAED]"
                  aria-label="بحث"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>بحث</p>
              </TooltipContent>
            </Tooltip>

            {/* User Account - Desktop */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:flex text-[#2C2420] hover:bg-[#E8EAED]"
                  aria-label="حسابي"
                >
                  <User className="w-5 h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>حسابي</p>
              </TooltipContent>
            </Tooltip>

            {/* Shopping Cart */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-[#2C2420] hover:bg-[#E8EAED]"
                  aria-label="سلة المشتريات"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg">
                    0
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>سلة المشتريات</p>
              </TooltipContent>
            </Tooltip>

            {/* Contact Phone - Desktop */}
            <Button
              className="hidden lg:flex bg-gradient-to-r from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white gap-2 rounded-full px-6 shadow-lg hover:shadow-xl transition-all font-bold"
            >
              <Phone className="w-4 h-4" />
              <span>📞 اتصل الآن</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#2C2420]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'إغلاق القائمة' : 'القائمة'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-[#E8EAED] shadow-xl">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#2C2420] hover:text-[#9B8F85] font-bold py-3 px-4 rounded-xl hover:bg-[#E8EAED] transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t-2 border-[#E8EAED] flex flex-col gap-3">
              <Button className="bg-gradient-to-r from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white w-full rounded-full py-6 font-bold shadow-lg">
                <Phone className="w-4 h-4 ml-2" />
                📞 اتصل الآن
              </Button>
              <div className="text-center text-sm text-[#4A5568] font-medium">
                🚚 توصيل مجاني لجميع دول الخليج
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;