## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-06-30 - Dynamic Text Updates & Hidden SVGs
**Learning:** Screen readers won't automatically announce numeric updates (like cart quantities) unless explicitly told, and will read decorative SVG content if not hidden, creating noise.
**Action:** Always add `aria-live='polite'` to inline text values that update without a page reload. Additionally, explicitly hide inner decorative SVGs/icons in buttons using `aria-hidden='true'` to prevent redundant announcements.
