## 2024-05-23 - [Icon-Only Button Accessibility]
**Learning:** Icon-only buttons often lack accessible names, making them unusable for screen reader users. Adding 'aria-label' and tooltips provides both accessibility and better UX for mouse users.
**Action:** Always wrap icon-only buttons in 'Tooltip' components and ensure they have a descriptive 'aria-label' or tooltip content. Use 'asChild' on 'TooltipTrigger' to avoid button-in-button nesting.
