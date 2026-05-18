import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed right-4 top-4 z-[100] -translate-y-[150%] focus:translate-y-0 transition-transform bg-[#2C2420] text-white px-4 py-2 rounded-lg font-bold shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2C2420]"
    >
      تخطي إلى المحتوى الرئيسي
    </a>
  );
}
