import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function SkipToContent() {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "fixed start-4 top-4 z-[100] -translate-y-[200%] transition-transform focus:translate-y-0 shadow-md",
        "bg-background text-foreground"
      )}
    >
      <a href="#main-content">
        تخطى إلى المحتوى
      </a>
    </Button>
  )
}
