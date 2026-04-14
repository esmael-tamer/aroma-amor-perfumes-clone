import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute top-4 left-4 z-[100] -translate-y-[150%] rounded-md bg-[#2C2420] px-4 py-2 text-sm font-bold text-white shadow-lg outline-none transition-transform focus:translate-y-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2C2420]"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}

export default SkipLink;
