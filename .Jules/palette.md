## 2024-05-24 - Icon-only buttons need tooltips
**Learning:** Icon-only buttons (like Search, Cart, Settings) are common in this app but often lack visual labels, relying only on icons which might be ambiguous for some users. Adding tooltips improves discoverability and accessibility.
**Action:** When encountering icon-only buttons, wrap them in `Tooltip` components from `@/components/ui/tooltip` with descriptive Arabic labels matching their function or `aria-label`.
