'use client';

import * as React from 'react';

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="fixed top-4 right-4 z-[100] -translate-y-[200%] focus:translate-y-0 px-6 py-3 bg-white text-[#2C2420] font-bold shadow-xl rounded-full outline-none ring-4 ring-[#2C2420]/20 transition-transform duration-300"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}
