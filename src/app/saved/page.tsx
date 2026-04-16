import { Suspense } from 'react';
import SavedPageContent from './SavedPageContent';

export const metadata = {
  title: 'My Saved Restaurants | MPLS Vegan',
  description: 'Your bookmarked vegan and vegan-friendly restaurants in Minneapolis.',
};

export default function SavedPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#d4a574]/30 border-t-[#d4a574] rounded-full animate-spin" />
        </div>
      }
    >
      <SavedPageContent />
    </Suspense>
  );
}
