# Build Safety Checks

## ✅ Build Verification Status

Last verified: 2026-02-02
Status: **PASSING** ✅

---

## Safeguards in Place

### 1. Type Check Script
```bash
npm run type-check
```
Runs TypeScript compiler without emitting files. Catches type errors before build.

### 2. Pre-Commit Hook
Located at `.husky/pre-commit` - automatically runs before each git commit:
- Runs full build
- Prevents commits if build fails
- Ensures only working code gets committed

### 3. Verification Script
```bash
./scripts/verify-build.sh
```
Runs all checks:
- Type checking
- Build
- Lint

---

## Before Deploying

**Always run:**
```bash
npm run build
```

**Or use the full verification:**
```bash
./scripts/verify-build.sh
```

---

## Common Build Errors & Fixes

### TypeScript Errors
- **Error:** `Cannot find name 'div'` or similar
- **Fix:** Check for unclosed JSX tags or missing imports
- **Check:** Run `npm run type-check`

### Missing Dependencies
- **Error:** `Cannot find module 'X'`
- **Fix:** `npm install`

### Next.js Build Errors
- **Error:** Build fails during static generation
- **Fix:** Check restaurant data in `src/data/restaurants.ts`
- **Check:** Verify all Google Place IDs are valid strings

---

## Failed Deployments

If a Vercel deployment fails:

1. **Check the error in Vercel dashboard**
2. **Run locally:** `npm run build`
3. **Fix errors**
4. **Verify:** `./scripts/verify-build.sh`
5. **Deploy:** `vercel --prod`

---

## Prevention Checklist

Before pushing to master:

- [ ] Run `npm run build` locally
- [ ] Fix any TypeScript errors
- [ ] Test in browser (`npm run dev`)
- [ ] Verify API calls work (check restaurant detail pages)
- [ ] Commit with meaningful message
- [ ] Push to master (pre-commit hook will run automatically)

---

## Emergency Recovery

If a bad build gets deployed:

1. **Revert to last good commit:**
   ```bash
   git revert HEAD
   git push origin master
   ```

2. **Or redeploy previous version:**
   ```bash
   vercel rollback
   ```

---

**Never commit:**
- Backup files (`.bak`, `-old.tsx`, etc.)
- Console.log debugging
- Commented-out code blocks
- Broken TypeScript

**Always:**
- Run `npm run build` before pushing
- Test locally first
- Check Vercel deployment logs
