1. **Analyze CI failure:**
   - The CI check "Workers Builds: aroma-amor-perfumes-clone" failed.
   - Based on my memory context: "All `<button>` elements in client-side components must explicitly include `type='button'` to prevent Cloudflare Workers CI build failures related to implicit type inference or form submission."
   - I added UX/A11y focus rings to `<button>` elements in `src/components/cart/CartDrawer.tsx` but I overwrote the prior commit that had added `type="button"`.
   - To fix the CI failure *while* keeping the UX improvement, I need to add `type="button"` back to those `CartDrawer.tsx` buttons in addition to the `focus-visible` classes I added.

2. **Implement fix:**
   - Add `type="button"` to all 6 `<button>` tags in `CartDrawer.tsx`.

3. **Verify locally:**
   - Run `pnpm lint`, `pnpm build`, `npx tsc --noEmit`.

4. **Complete Pre-commit steps:**
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.

5. **Submit:**
   - Submit the change with appropriate messages.
