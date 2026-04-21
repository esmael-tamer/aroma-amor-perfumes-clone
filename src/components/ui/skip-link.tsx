import React from 'react';

export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="absolute top-4 right-4 z-[100] -translate-y-[150%] bg-[#2C2420] text-white px-4 py-2 font-bold rounded-lg shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber-500"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
};
