import * as React from "react"
import { cn } from "@/lib/utils"

const SkipLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-white focus:text-[#2C2420] focus:font-bold focus:shadow-xl focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C2420] transition-all",
        className
      )}
      {...props}
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  )
})
SkipLink.displayName = "SkipLink"

export { SkipLink }
