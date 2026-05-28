import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed right-4 top-4 z-[100] -translate-y-[150%] rounded-md bg-white px-4 py-2 font-bold text-[#2C2420] shadow-xl transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C2420]"
    >
      تخطي إلى المحتوى
    </a>
  );
}
