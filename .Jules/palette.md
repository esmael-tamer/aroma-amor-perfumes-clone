## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-06-29 - Robust Form Accessibility
**Learning:** Implicitly wrapped input and label elements may not be robustly supported by all screen readers and assistive technologies. Forms benefit significantly from explicitly linking inputs to labels using `id` and `htmlFor` attributes, and similarly declaring their validity using `aria-invalid`.
**Action:** Always link `<input>` and `<textarea>` elements to their corresponding `<label>` elements using explicit `id` and `htmlFor` attributes. Additionally, communicate field validation states clearly using `aria-invalid`.
