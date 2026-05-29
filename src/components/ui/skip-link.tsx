import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed right-4 top-4 z-[100] -translate-y-[150%] focus:translate-y-0 transition-transform bg-gradient-to-r from-[#2C2420] to-[#4A5568] text-white px-4 py-2 rounded-md shadow-lg font-bold outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      تخطي إلى المحتوى
    </a>
  );
}

export default SkipLink;
