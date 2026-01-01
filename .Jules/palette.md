## 2024-05-23 - Icon-Only Buttons
**Learning:** Icon-only buttons (Search, Cart, User, Menu) were consistently missing `aria-label` attributes. This is a critical accessibility gap for screen reader users who would only hear "button" without context.
**Action:** When creating or reviewing icon-only buttons, always enforce `aria-label`. For localized apps, ensure labels are in the target language (Arabic in this case).
