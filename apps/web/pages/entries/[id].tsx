import fs from 'fs'
import path from 'path'
import React, {useState} from 'react'

export async function getStaticPaths() {
  const p = path.join(process.cwd(), 'data', 'seed.json')
  const raw = fs.readFileSync(p, 'utf8')
  const data = JSON.parse(raw)
  const paths = data.entries.map((e:any) => ({ params: { id: e.id } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const p = path.join(process.cwd(), 'data', 'seed.json')
  const raw = fs.readFileSync(p, 'utf8')
  const data = JSON.parse(raw)
  const entry = data.entries.find((x:any) => x.id === params.id)
  return { props: { entry } }
}

export default function EntryPage({ entry }: { entry: any }) {
  const [localVotes, setLocalVotes] = useState(entry.votes ?? 0)
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 24 }}>
      <a href="/" style={{ color: '#666', textDecoration: 'underline' }}>← Back to registry</a>
      <h1 style={{ marginTop: 12 }}>{entry.name}</h1>
      <p style={{ color: '#444' }}>{entry.description}</p>
      <h3>How to use with Moltstack</h3>
      <div style={{ background: '#fafafa', padding: 12, borderRadius: 6, border: '1px solid #eee' }}>
        <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{entry.how_to}</pre>
      </div>
      <h3 style={{ marginTop: 18 }}>Metadata</h3>
      <ul>
        <li><strong>Tags:</strong> {entry.tags?.join(', ')}</li>
        <li><strong>Source:</strong> {entry.source}</li>
        <li><strong>Notes:</strong> {entry.notes}</li>
      </ul>
      <div style={{ marginTop: 16 }}>
        <button onClick={() => setLocalVotes(v => v + 1)} style={{ padding: '8px 12px', marginRight: 8 }}>Upvote (UI only)</button>
        <button onClick={() => setLocalVotes(v => Math.max(0, v - 1))} style={{ padding: '8px 12px' }}>Downvote (UI only)</button>
        <span style={{ marginLeft: 12, color: '#666' }}>Votes (experimental): {localVotes}</span>
      </div>
      <p style={{ marginTop: 20, color: '#999' }}>Note: Votes are experimental and UI-only in v0.1. No one-vote-per-address enforcement.</p>
    </div>
  )
}
