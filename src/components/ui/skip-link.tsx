'use client';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed right-4 top-4 z-[100] rounded-md bg-primary px-4 py-2 text-primary-foreground shadow-lg outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] -translate-y-[150%] focus:translate-y-0 transition-transform font-medium"
    >
      تخطي إلى المحتوى الرئيسي
    </a>
  );
}
