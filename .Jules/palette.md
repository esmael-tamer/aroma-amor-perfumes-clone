## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-11-23 - Accessible Skip to Content in Next.js RTL Apps
**Learning:** In Next.js App Router applications, placing a 'Skip to Content' link requires carefully positioning the element using logical properties or explicit RTL classes (like `right-4` instead of `left-4`), and wrapping the layout `{children}` in a focusable container (`tabIndex={-1}`) with `outline-none` so it receives programmatic focus without showing an ugly focus ring.
**Action:** When adding 'Skip to Content' links in Next.js RTL apps, ensure the target wrapper `div` uses `id="main-content" tabIndex={-1} className="outline-none"` in `layout.tsx`.
