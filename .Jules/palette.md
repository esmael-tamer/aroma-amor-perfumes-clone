## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Accessible Skip to Content Links
**Learning:** For Next.js apps, 'Skip to Content' links need a persistent `fixed` position on focus to avoid being obscured by sticky headers. The target anchor ID should be placed on a global wrapper around `{children}` in the root layout to avoid duplicating IDs across pages.
**Action:** Use `<div id="main-content" tabIndex={-1} className="outline-none">` around `{children}` and style the skip link with `sr-only focus:not-sr-only focus:fixed focus:z-[100]`.
