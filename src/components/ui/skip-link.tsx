import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute top-4 left-4 z-[100] -translate-y-[150%] focus:translate-y-0 transition-transform bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}

export default SkipLink;
