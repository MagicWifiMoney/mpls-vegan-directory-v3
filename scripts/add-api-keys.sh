#!/bin/bash

# Helper script to add Google API keys to .env.local

ENV_FILE="/home/ec2-user/clawd/projects/mpls-vegan-directory-v3/.env.local"

echo "🗺️  Adding Google API Keys to .env.local"
echo

# Get server key
read -p "Paste SERVER API key (GOOGLE_PLACES_API_KEY): " SERVER_KEY
read -p "Paste CLIENT API key (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY): " CLIENT_KEY

echo
echo "Adding keys to $ENV_FILE..."

# Add or update keys
if grep -q "GOOGLE_PLACES_API_KEY" "$ENV_FILE" 2>/dev/null; then
  sed -i "s|GOOGLE_PLACES_API_KEY=.*|GOOGLE_PLACES_API_KEY=$SERVER_KEY|" "$ENV_FILE"
else
  echo "" >> "$ENV_FILE"
  echo "# Google Maps & Places API" >> "$ENV_FILE"
  echo "GOOGLE_PLACES_API_KEY=$SERVER_KEY" >> "$ENV_FILE"
fi

if grep -q "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" "$ENV_FILE" 2>/dev/null; then
  sed -i "s|NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=.*|NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$CLIENT_KEY|" "$ENV_FILE"
else
  echo "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$CLIENT_KEY" >> "$ENV_FILE"
fi

echo "✅ Keys added!"
echo
echo "Next steps:"
echo "1. Test locally: cd /home/ec2-user/clawd/projects/mpls-vegan-directory-v3 && npm run dev"
echo "2. Deploy to Vercel production:"
echo "   vercel env add GOOGLE_PLACES_API_KEY production"
echo "   vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY production"
echo "   vercel --prod"
