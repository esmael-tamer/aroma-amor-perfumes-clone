import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute top-4 left-4 z-[100] -translate-y-[150%] focus:translate-y-0 transition-transform bg-white text-[#2C2420] px-4 py-2 rounded-md font-bold shadow-lg focus-visible:ring-2 focus-visible:ring-[#2C2420] outline-none"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}

export default SkipLink;
