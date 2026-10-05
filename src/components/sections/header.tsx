'use client';

import { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ShoppingCart, Menu, X, Search, User, Phone, MapPin, Settings } from 'lucide-react';
import { NAVIGATION_LINKS, COMPANY_INFO } from '@/lib/constants';
import { useCart } from '@/context/CartContext';

const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, [setIsCartOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b-2 border-[#D4CCC4]/30">
      {/* Top Bar - Kuwait Location & Free Shipping */}
      <div className="bg-gradient-to-r from-[#2C2420] via-[#4A5568] to-[#2C2420] text-white py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" aria-hidden="true" />
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
          <a href="#" className="flex items-center gap-3" aria-label={COMPANY_INFO.name}>
            <Image
              src={COMPANY_INFO.logo}
              alt={`${COMPANY_INFO.name} Logo`}
              width={60}
              height={60}
              className="cursor-pointer"
              priority
            />
            <div>
              <h1 className="text-2xl font-bold text-[#2C2420]">{COMPANY_INFO.name}</h1>
              <p className="text-xs text-[#9B8F85] font-semibold">{COMPANY_INFO.slogan} 🇰🇼</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="التنقل الرئيسي">
            {NAVIGATION_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#2C2420] hover:text-[#9B8F85] font-bold transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C2420] group-hover:w-full transition-all duration-300" />
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
                  <Search className="w-5 h-5" aria-hidden="true" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>بحث</p>
              </TooltipContent>
            </Tooltip>

            {/* User Account - Desktop */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/admin">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden md:flex text-[#2C2420] hover:bg-[#E8EAED]"
                    aria-label="لوحة التحكم"
                  >
                    <Settings className="w-5 h-5" aria-hidden="true" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>لوحة التحكم</p>
              </TooltipContent>
            </Tooltip>

            {/* Shopping Cart */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={openCart}
                  className="relative text-[#2C2420] hover:bg-[#E8EAED]"
                  aria-label={`سلة التسوق - ${totalItems} منتجات`}
                >
                  <ShoppingCart className="w-6 h-6" aria-hidden="true" />
                  {totalItems > 0 && (
                    <span
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg animate-bounce-quick"
                      aria-hidden="true"
                    >
                      {totalItems > 9 ? '9+' : totalItems}
                    </span>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>سلة التسوق</p>
              </TooltipContent>
            </Tooltip>

            {/* Contact Phone - Desktop */}
            <Button
              className="hidden lg:flex bg-gradient-to-r from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white gap-2 rounded-full px-6 shadow-lg hover:shadow-xl transition-all font-bold"
              aria-label="اتصل بنا"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>📞 اتصل الآن</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#2C2420]"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav 
          id="mobile-menu"
          className="lg:hidden bg-white border-t-2 border-[#E8EAED] shadow-xl"
          aria-label="القائمة الجوال"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {NAVIGATION_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#2C2420] hover:text-[#9B8F85] font-bold py-3 px-4 rounded-xl hover:bg-[#E8EAED] transition-all"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t-2 border-[#E8EAED] flex flex-col gap-3">
              <Button className="bg-gradient-to-r from-[#2C2420] to-[#4A5568] hover:from-[#4A5568] hover:to-[#2C2420] text-white w-full rounded-full py-6 font-bold shadow-lg">
                <Phone className="w-4 h-4 ml-2" aria-hidden="true" />
                📞 اتصل الآن
              </Button>
              <div className="text-center text-sm text-[#4A5568] font-medium">
                🚚 توصيل مجاني لجميع دول الخليج
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
});

export default Header;