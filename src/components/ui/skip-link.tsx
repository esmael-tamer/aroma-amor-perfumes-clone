import * as React from "react"

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed right-4 top-4 z-[100] -translate-y-[150%] rounded-md bg-gray-900 text-white px-4 py-2 font-bold shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
    >
      تجاوز إلى المحتوى الرئيسي
    </a>
  )
}
