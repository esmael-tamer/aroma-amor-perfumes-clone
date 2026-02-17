'use client';

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function SkipToContent() {
  return (
    <Link
      href="#main-content"
      className={cn(
        buttonVariants({ variant: "outline" }),
        "fixed right-4 top-4 z-[100] -translate-y-[200%] transition-transform focus:translate-y-0 shadow-md",
        "bg-background text-foreground"
      )}
    >
      تخطى إلى المحتوى
    </Link>
  )
}
