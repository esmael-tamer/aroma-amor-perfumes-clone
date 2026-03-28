## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-03-28 - Tooltips on Disabled Buttons
**Learning:** In Cloudflare Workers CI environments, Radix UI Tooltips fail when applied to complex client components like `CartDrawer`. Additionally, native disabled buttons do not trigger hover events for `title` tooltips.
**Action:** Always wrap disabled native buttons in a `div` containing the `title` attribute to ensure the tooltip is accessible while preserving the button's native disabled state and preventing CI failures.
