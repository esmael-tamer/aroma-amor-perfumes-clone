import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-[100] -translate-y-[150%] focus:translate-y-0 focus:px-4 focus:py-2 bg-white text-[#2C2420] font-bold rounded shadow-md outline-none focus:ring-2 focus:ring-[#2C2420] transition-transform"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}

export default SkipLink;
