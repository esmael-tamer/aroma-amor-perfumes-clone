## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Tooltips in Complex Client Components
**Learning:** Using Radix UI Tooltips within complex client components like `CartDrawer` can cause build failures in Cloudflare Workers environments due to portal/context issues during SSR/hydration.
**Action:** Use native `title` attributes as a fallback for icon-only buttons in these specific high-interactivity client components to ensure stability.
