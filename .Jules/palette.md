## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-11-23 - RTL Skip to Content Link Positioning and Focusability
**Learning:** Skip to Content accessibility links need specific adjustments for Arabic/RTL applications and programmatic focus. Positioning should remain consistent with reading direction (e.g., `right-4` instead of `left-4`) even when absolute or fixed. Target containers for the link must include `tabIndex={-1}` and `outline-none` to properly receive programmatic focus without showing an unwanted visible focus ring.
**Action:** Use `focus:fixed focus:top-4 focus:right-4 focus:z-[100]` for skip links in RTL, and always apply `tabIndex={-1}` and Tailwind's `outline-none` class to the destination `<main>` elements to ensure clean, accessible programmatic focus management.
