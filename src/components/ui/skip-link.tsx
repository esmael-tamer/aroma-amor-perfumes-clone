export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 z-[100] focus:px-4 focus:py-2 bg-white text-black font-bold rounded-md shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}
