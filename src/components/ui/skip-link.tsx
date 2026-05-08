import React from 'react';

export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="fixed top-4 right-4 z-[100] -translate-y-[150%] focus:translate-y-0 transition-transform bg-[#2C2420] text-white px-4 py-2 rounded-full font-bold shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
};
