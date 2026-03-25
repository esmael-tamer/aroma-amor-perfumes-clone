"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function SkipLink() {
  const skipToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <a
      href="#main-content"
      onClick={skipToContent}
      className={cn(
        "sr-only focus:not-sr-only focus:px-4 focus:py-2 focus:bg-[#2C2420] focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C2420]",
        "absolute left-4 top-4 z-[100] rounded-md font-medium transition-colors"
      )}
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  );
}
