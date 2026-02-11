import React from 'react'
import Link from 'next/link'

export default function EntryCard({ e }: { e: any }) {
  return (
    <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
      <h3 style={{ margin: '6px 0' }}>{e.name}</h3>
      <p style={{ margin: '6px 0', color: '#444' }}>{e.description}</p>
      <p style={{ margin: '6px 0', color: '#888', fontSize: 13 }}>tags: {e.tags?.join(', ')}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <Link href={`/entries/${encodeURIComponent(e.id)}`}><a style={{ color: '#0070f3' }}>View details</a></Link>
        <div style={{ fontSize: 13, color: '#666' }}>Votes: {e.votes ?? 0} <span style={{ fontStyle: 'italic', marginLeft: 8, color: '#999' }}>(experimental)</span></div>
      </div>
    </div>
  )
}
