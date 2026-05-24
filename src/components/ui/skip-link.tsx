import * as React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed right-4 top-4 z-[100] -translate-y-[150%] bg-[#2C2420] text-white px-4 py-2 rounded-lg font-bold shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      تخطي إلى المحتوى الرئيسي
    </a>
  );
}
