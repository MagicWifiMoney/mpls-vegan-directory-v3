# Security Incident - API Keys Exposed

**Date:** February 2, 2026  
**Severity:** HIGH  
**Status:** FIXING

## Exposed API Keys

### 1. Google Generative AI (Gemini) Key
- **Key:** `***REMOVED***`
- **Location:** `test-gemini-local.mjs` (commit: 1b26ffd, 5999943)
- **Project:** gen-lang-client-0228692020
- **Impact:** PUBLIC (in GitHub history)

### 2. Google Places API Key
- **Key:** `***REMOVED***`
- **Location:** `scripts/refresh-place-ids.js` (commit: a54d284)
- **Project:** jga1 or similar
- **Impact:** PUBLIC (in GitHub history)

## Actions Required

### Immediate (Jake needs to do):
1. **Regenerate Google Generative AI Key**
   - Go to: https://console.cloud.google.com/apis/credentials?project=gen-lang-client-0228692020
   - Create new API key
   - Delete old key: `***REMOVED***...`

2. **Regenerate Google Places API Key**
   - Go to: https://console.cloud.google.com/apis/credentials
   - Create new API key
   - Delete old key: `***REMOVED***`

3. **Send new keys to Botti** to update:
   - mpls-vegan-directory-v3 (.env.local + Vercel)
   - dog-spa-portraits
   - Newsie-Images
   - OpenClaw config (memory search)

### Completed:
- ✅ Fixed `scripts/refresh-place-ids.js` to use env var
- ✅ Added test files to .gitignore
- ✅ Committed fixes to GitHub

### Optional (Advanced):
- Clean git history with BFG Repo Cleaner or git-filter-repo
- Force push cleaned history (will break existing clones)

## Root Cause

During Gemini debugging for mplsvegan.com popular items feature, test files and scripts were created with hardcoded API keys for quick testing. These files were accidentally committed before being added to .gitignore.

## Prevention

- ✅ All test files now in .gitignore
- ✅ Scripts updated to require env vars
- ⏳ Pre-commit hook to scan for API keys (optional future task)

## Timeline

- **Feb 2, 06:00-07:30:** Gemini debugging, test files created
- **Feb 2, 07:21:** test-gemini-local.mjs committed (leaked key)
- **Feb 2, 08:45:** Google security alert received
- **Feb 2, 08:50:** Incident response started
