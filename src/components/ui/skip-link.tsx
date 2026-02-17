import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SkipLink() {
  return (
    <Button
      asChild
      variant="secondary"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:px-4 focus:py-2 z-50 shadow-lg"
    >
      <Link href="#main-content">
        تخطي إلى المحتوى الرئيسي
      </Link>
    </Button>
  )
}
