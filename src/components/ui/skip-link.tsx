import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[100] -translate-y-[150%] bg-white text-[#2C2420] px-4 py-2 font-bold shadow-lg rounded-xl border-2 border-[#E8EAED] transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#4A5568]"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}

export default SkipLink;
