'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SuggestionActions({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function update(status: 'approved' | 'rejected') {
    setLoading(true);
    await fetch(`/api/suggestions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    router.refresh();
    setLoading(false);
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => update('approved')}
        disabled={loading}
        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30 transition-colors disabled:opacity-50"
      >
        Approve
      </button>
      <button
        onClick={() => update('rejected')}
        disabled={loading}
        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30 transition-colors disabled:opacity-50"
      >
        Reject
      </button>
    </div>
  );
}
