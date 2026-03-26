## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Native Button Accessibility
**Learning:** Native `<button>` elements (not using Radix or our `Button` component) lose keyboard focus rings and implicit `type="button"` attributes when used with Tailwind.
**Action:** Always add `focus-visible:ring-2 outline-none` and `type="button"` to native `<button>` elements.

## 2024-05-26 - Disabled Button Hover States
**Learning:** Adding Tailwind disabled states (`disabled:opacity-40`) doesn't prevent hover states (`hover:bg-emerald-50`) from applying when disabled.
**Action:** Add `disabled:hover:bg-transparent disabled:hover:text-inherit` to cancel hover effects on disabled custom buttons.
