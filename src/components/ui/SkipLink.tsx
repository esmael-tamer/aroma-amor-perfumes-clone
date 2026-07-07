import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#2C2420] focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C2420]"
    >
      تخطي إلى المحتوى الرئيسي
    </a>
  );
};

export default SkipLink;
