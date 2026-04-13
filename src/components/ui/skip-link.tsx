import * as React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute top-4 left-4 -translate-y-[150%] focus:translate-y-0 z-[100] transition-transform bg-[#2C2420] text-white px-4 py-2 rounded-lg font-bold shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2C2420]"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}
