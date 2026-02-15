## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-02-23 - Skip Links in Component-Based Headers
**Learning:** Since `Header` is used in pages (not layout), the "Skip to Content" link must be in `Header` but targets an ID (`#main-content`) that must be manually added to each page's `<main>` element.
**Action:** Ensure any new page using `Header` also includes `<main id="main-content">` to support the skip link.
