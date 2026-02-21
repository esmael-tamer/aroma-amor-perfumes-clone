'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SkipToContentProps extends React.HTMLAttributes<HTMLAnchorElement> {
  contentId?: string;
}

export function SkipToContent({
  className,
  contentId = 'main-content',
  ...props
}: SkipToContentProps) {
  return (
    <Button
      asChild
      variant="secondary"
      className={cn(
        'fixed top-4 right-4 z-[100] -translate-y-[150%] transition-transform focus:translate-y-0',
        'shadow-lg border-2 border-[#2C2420] font-bold',
        className
      )}
    >
      <a
        href={`#${contentId}`}
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById(contentId);
          if (element) {
            element.focus();
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        {...props}
      >
        تجاوز إلى المحتوى الرئيسي
      </a>
    </Button>
  );
}
