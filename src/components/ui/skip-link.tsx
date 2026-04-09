import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-0 z-[100] -translate-y-[150%] bg-white px-4 py-2 font-bold text-[#2C2420] shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#2C2420]"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}
