## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-02-12 - Persistent Skip-to-Content Target
**Learning:** In Next.js App Router applications, placing the 'Skip to Content' focus target (`id="main-content"`) directly on individual page components can lead to inconsistent behavior across client-side navigation.
**Action:** Always place the target ID on a persistent wrapper element (like a `<div>` around `{children}`) within the root `layout.tsx`, and ensure it has `tabIndex={-1}` and `className="outline-none"` to gracefully accept programmatic focus without a visible focus ring.
