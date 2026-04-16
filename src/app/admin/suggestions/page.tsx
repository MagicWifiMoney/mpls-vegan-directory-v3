/**
 * Admin page to review restaurant suggestions.
 * Access: GET /admin/suggestions
 *
 * This is a server-rendered page that reads suggestions from the local
 * JSON store. In production, protect this route with auth middleware.
 */

import { readSuggestions, type Suggestion } from '@/lib/suggestions';
import SuggestionActions from './suggestion-actions';

export const dynamic = 'force-dynamic';

export default function AdminSuggestionsPage() {
  const all = readSuggestions();
  const pending = all.filter((s) => s.status === 'pending');
  const approved = all.filter((s) => s.status === 'approved');
  const rejected = all.filter((s) => s.status === 'rejected');

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
        🌱 Restaurant Suggestions
      </h1>
      <p className="text-gray-400 mb-8">Community-submitted suggestions for the MPLS Vegan directory</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
          <p className="text-gray-400 text-sm">Pending Review</p>
          <p className="text-3xl font-bold text-amber-400 mt-1">{pending.length}</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
          <p className="text-gray-400 text-sm">Approved</p>
          <p className="text-3xl font-bold text-green-400 mt-1">{approved.length}</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
          <p className="text-gray-400 text-sm">Rejected</p>
          <p className="text-3xl font-bold text-red-400 mt-1">{rejected.length}</p>
        </div>
      </div>

      {/* Pending first */}
      {[
        { label: 'Pending Review', items: pending, color: 'amber' },
        { label: 'Approved', items: approved, color: 'green' },
        { label: 'Rejected', items: rejected, color: 'red' },
      ].map(({ label, items, color }) =>
        items.length > 0 ? (
          <section key={label} className="mb-10">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full bg-${color}-400`} />
              {label}
            </h2>
            <div className="space-y-4">
              {items.map((s) => (
                <SuggestionCard key={s.id} suggestion={s} />
              ))}
            </div>
          </section>
        ) : null
      )}

      {all.length === 0 && (
        <div className="text-center py-20 text-gray-600">
          <p className="text-4xl mb-4">🌿</p>
          <p>No suggestions yet. Share the form link to get community input!</p>
        </div>
      )}
    </div>
  );
}

function SuggestionCard({ suggestion: s }: { suggestion: Suggestion }) {
  const statusColor = {
    pending: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    approved: 'text-green-400 bg-green-400/10 border-green-400/20',
    rejected: 'text-red-400 bg-red-400/10 border-red-400/20',
  }[s.status];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="font-semibold text-lg">{s.restaurantName}</h3>
          {s.address && <p className="text-gray-400 text-sm mt-0.5">{s.address}</p>}
        </div>
        <span className={`text-xs px-2 py-1 rounded-full border font-medium ${statusColor} shrink-0`}>
          {s.status}
        </span>
      </div>

      {s.whyVeganFriendly && (
        <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
          &ldquo;{s.whyVeganFriendly}&rdquo;
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500">
          <span>{s.submitterEmail}</span>
          <span className="mx-2">·</span>
          <span>{new Date(s.submittedAt).toLocaleDateString()}</span>
        </div>

        {s.status === 'pending' && <SuggestionActions id={s.id} />}
      </div>
    </div>
  );
}
