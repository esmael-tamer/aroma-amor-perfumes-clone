## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-03-27 - Accessible Skip Links with Tailwind v4
**Learning:** In Tailwind CSS v4, the `not-sr-only` utility resets padding and margins, creating a visual discrepancy when an `sr-only` element receives focus. Furthermore, placing an absolute skip link optimally requires positioning like `left-4` to stay clear of the layout flow, but it also requires a very high z-index (e.g. `z-[100]`) to ensure it layers above fixed application components such as Headers. Finally, for standard semantic flow, programmatic focus on the container `<main>` must use `tabIndex={-1}` and `className="outline-none"` to bypass visual artifacts when the user triggers the jump.
**Action:** Always manually specify focus padding (`focus:px-4 focus:py-2`) alongside `focus:not-sr-only` when building Skip Links, and ensure `z-[100]` is applied to layer correctly over fixed headers. The target main container must have `id="main-content"`, `tabIndex={-1}`, and `outline-none` explicitly declared.
