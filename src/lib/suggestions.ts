/**
 * File-based persistence for restaurant suggestions.
 *
 * On Vercel, the filesystem is ephemeral for serverless functions but
 * writable within a single request context. For durable storage, swap
 * readSuggestions / writeSuggestions for a DB or KV call.
 *
 * The suggestions file lives at data/suggestions.json (gitignored in prod).
 */

import path from 'path'
import fs from 'fs'

export type SuggestionStatus = 'pending' | 'approved' | 'rejected'

export interface Suggestion {
  id: string
  restaurantName: string
  address: string
  whyVeganFriendly: string
  submitterEmail: string
  status: SuggestionStatus
  submittedAt: string
}

const DATA_DIR = path.join(process.cwd(), 'data')
const SUGGESTIONS_FILE = path.join(DATA_DIR, 'suggestions.json')

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  if (!fs.existsSync(SUGGESTIONS_FILE)) {
    fs.writeFileSync(SUGGESTIONS_FILE, '[]', 'utf8')
  }
}

export function readSuggestions(): Suggestion[] {
  try {
    ensureFile()
    return JSON.parse(fs.readFileSync(SUGGESTIONS_FILE, 'utf8')) as Suggestion[]
  } catch {
    return []
  }
}

export function writeSuggestions(suggestions: Suggestion[]): void {
  ensureFile()
  fs.writeFileSync(SUGGESTIONS_FILE, JSON.stringify(suggestions, null, 2), 'utf8')
}

export function addSuggestion(data: Omit<Suggestion, 'id' | 'status' | 'submittedAt'>): Suggestion {
  const suggestions = readSuggestions()
  const suggestion: Suggestion = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    status: 'pending',
    submittedAt: new Date().toISOString(),
  }
  suggestions.push(suggestion)
  writeSuggestions(suggestions)
  return suggestion
}

export function updateSuggestionStatus(id: string, status: SuggestionStatus): boolean {
  const suggestions = readSuggestions()
  const idx = suggestions.findIndex((s) => s.id === id)
  if (idx === -1) return false
  suggestions[idx].status = status
  writeSuggestions(suggestions)
  return true
}
