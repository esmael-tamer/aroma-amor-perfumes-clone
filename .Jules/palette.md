## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-02-18 - Accessible Disabled Buttons
**Learning:** Native `disabled` attribute removes elements from tab order. For better accessibility, use `aria-disabled="true"` with custom styling and event guard.
**Action:** Prefer `aria-disabled` over `disabled` for interactive elements that should remain discoverable when inactive, and provide context (e.g., via `title`).
