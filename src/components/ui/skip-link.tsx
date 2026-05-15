import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed right-4 top-4 z-[100] -translate-y-[150%] focus:translate-y-0 transition-transform bg-[#2C2420] text-white px-4 py-2 rounded-md shadow-lg outline-none focus:ring-2 focus:ring-amber-500 font-bold"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}

export default SkipLink;
