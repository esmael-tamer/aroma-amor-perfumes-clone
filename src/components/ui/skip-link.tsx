import * as React from "react"

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute right-4 top-4 z-[100] -translate-y-[150%] rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-black"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  )
}
