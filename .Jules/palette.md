## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-26 - Accessible Action Buttons
**Learning:** Custom `<button>` elements representing inline actions (like viewing details in a list) often miss core accessibility attributes and rely on visual cues or native tooltips via the `title` attribute, which are inaccessible to keyboard or screen reader users. Furthermore, relying only on static text for repeated actions fails to convey context.
**Action:** Always include `type="button"` for non-submitting buttons, provide dynamic, context-aware `aria-label`s instead of static titles, use `focus-visible:ring-2 outline-none` for keyboard focus, and hide purely decorative inner SVG icons using `aria-hidden="true"`.
