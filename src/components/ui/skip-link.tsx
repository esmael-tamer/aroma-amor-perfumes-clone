import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed right-4 top-4 z-[100] -translate-y-[150%] rounded-md bg-primary px-4 py-2 text-primary-foreground shadow-sm transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="تخطي إلى المحتوى الرئيسي"
    >
      تخطي إلى المحتوى الرئيسي
    </a>
  );
}
