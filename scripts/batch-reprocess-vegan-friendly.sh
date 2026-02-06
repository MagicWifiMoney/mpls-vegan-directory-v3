#!/bin/bash
# Batch reprocess all vegan-friendly and vegetarian restaurants

# List of slugs that need filtering (NOT 100% Vegan)
SLUGS=(
  "french-meadow"
  "hard-times-cafe"
  "seward-cafe"
  "modern-times"
  "bole-ethiopian"
  "everest-on-grand"
  "namaste-cafe"
  "himalayan-restaurant"
  "foxy-falafel"
  "tongue-in-cheek"
  "amazing-thailand"
  "glam-doll-donuts"
  "pizza-luce"
  "shish-mediterranean"
  "afro-deli"
  "common-roots-cafe"
  "khyber-pass-cafe"
  "crisp-and-green"
  "wedge-table"
  "may-day-cafe"
  "peninsula-malaysian"
  "ngon-vietnamese"
  "cafe-latte"
  "brasa-premium-rotisserie"
  "ipho-saigon"
  "galactic-pizza"
  "black-sheep-pizza"
  "red-cow"
  "wok-in-the-park"
  "salty-tart"
  "tori-ramen"
  "world-street-kitchen"
  "gandhi-mahal"
)

echo "🚀 Batch reprocessing ${#SLUGS[@]} vegan-friendly restaurants"
echo "======================================================================"

SUCCESS=0
FAILED=0

for slug in "${SLUGS[@]}"; do
  echo ""
  echo "[$(($SUCCESS + $FAILED + 1))/${#SLUGS[@]}] Processing: $slug"
  
  if node /home/ec2-user/clawd/projects/mpls-vegan-directory-v3/scripts/reprocess-vegan-friendly.js "$slug"; then
    SUCCESS=$((SUCCESS + 1))
  else
    FAILED=$((FAILED + 1))
    echo "  ❌ Failed: $slug"
  fi
  
  sleep 3
done

echo ""
echo "======================================================================"
echo "📊 Batch Summary"
echo "======================================================================"
echo "✅ Successful: $SUCCESS/${#SLUGS[@]}"
echo "❌ Failed: $FAILED/${#SLUGS[@]}"
echo "======================================================================"
