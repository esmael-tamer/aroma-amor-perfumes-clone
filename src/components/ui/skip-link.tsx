import Link from 'next/link';
import { memo } from 'react';

export const SkipLink = memo(function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#2C2420] focus:font-bold focus:rounded-full focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#2C2420] transition-all"
    >
      تجاوز إلى المحتوى الرئيسي
    </Link>
  );
});

export default SkipLink;
