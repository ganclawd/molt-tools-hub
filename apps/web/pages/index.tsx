import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import React from 'react'

export async function getStaticProps() {
  const p = path.join(process.cwd(), 'data', 'seed.json')
  const raw = fs.readFileSync(p, 'utf8')
  const data = JSON.parse(raw)
  return { props: { entries: data.entries } }
}

export default function Home({ entries }: { entries: any[] }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 24 }}>
      <h1>Molt Tools Hub — Registry (MVP v0.1)</h1>
      <p style={{ color: '#666' }}>Read-only, manually seeded registry of Molt-related tools. Votes are experimental / UI-only.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 20 }}>
        {entries.map((e) => (
          <div key={e.id} style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
            <h3 style={{ margin: '6px 0' }}>{e.name}</h3>
            <p style={{ margin: '6px 0', color: '#444' }}>{e.description}</p>
            <p style={{ margin: '6px 0', color: '#888', fontSize: 13 }}>tags: {e.tags?.join(', ')}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
              <Link href={`/entries/${encodeURIComponent(e.id)}`}><a style={{ color: '#0070f3' }}>View details</a></Link>
              <div style={{ fontSize: 13, color: '#666' }}>Votes: {e.votes ?? 0} <span style={{ fontStyle: 'italic', marginLeft: 8, color: '#999' }}>(experimental)</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
