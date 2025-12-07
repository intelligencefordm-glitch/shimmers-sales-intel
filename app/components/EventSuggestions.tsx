'use client'
import React, { useEffect, useState } from 'react'

export default function EventSuggestions({ target = 'all' }: { target?: string }) {
  const [events, setEvents] = useState([])
  useEffect(() => {
    fetch(`/api/events/suggest?target=${target}`).then(r => r.json()).then(d => setEvents(d.suggestions || []))
  }, [target])
  return (
    <div>
      <h3 style={{fontSize:16, fontWeight:600}}>Instagrammable Event Ideas</h3>
      <div style={{display:'grid', gap:8, marginTop:8}}>
        {events.map((e, i) => (
          <div key={i} style={{padding:12, background:'#fff', borderRadius:8, boxShadow:'0 1px 3px rgba(0,0,0,0.06)'}}>
            <div style={{fontWeight:600}}>{e.title} <span style={{fontSize:12, color:'#666'}}>— {e.target}</span></div>
            <div style={{fontSize:13, marginTop:6}}>{e.hook}</div>
            <div style={{marginTop:8, fontWeight:600}}>IG Hook: {e.instagramHook}</div>
            <div style={{marginTop:6}}>Estimated Budget: ₹{e.estCost}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
