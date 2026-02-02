#!/bin/bash
set -e

echo "🔍 Running build verification checks..."
echo

echo "1️⃣ Type checking..."
npm run type-check
echo "✅ Type check passed"
echo

echo "2️⃣ Building..."
npm run build
echo "✅ Build passed"
echo

echo "3️⃣ Linting..."
npm run lint
echo "✅ Lint passed"
echo

echo "✅ All checks passed! Safe to deploy."
