## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Implementing Skip-to-Content in RTL Contexts
**Learning:** Adding a "Skip to Content" link in Next.js requires wrapping the layout children in a persistent container with `id="main-content"` and `tabIndex={-1}`. In Right-to-Left (RTL) applications, the visually hidden link should use `right-4` instead of `left-4` to appear in the logical starting position when focused.
**Action:** When implementing skip links, ensure correct positioning (RTL vs LTR) and wrap children appropriately to manage programmatic focus without adding an unwanted visual outline (`outline-none`).
