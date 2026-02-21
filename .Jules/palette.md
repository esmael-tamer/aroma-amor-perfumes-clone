## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-02-22 - Native Title vs. Radix Tooltip in Workers
**Learning:** The Radix UI-based `Tooltip` component causes Cloudflare Workers build failures when used in certain client-side components (like `Header` or `ProductCard`).
**Action:** Prefer native `title` attributes for simple icon-only buttons in this environment to ensure build stability and simplify the DOM.
