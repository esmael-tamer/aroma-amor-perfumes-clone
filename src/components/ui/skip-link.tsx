import Link from 'next/link';

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#2C2420] focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C2420] transition-all"
    >
      تجاوز إلى المحتوى الرئيسي
    </Link>
  );
}
