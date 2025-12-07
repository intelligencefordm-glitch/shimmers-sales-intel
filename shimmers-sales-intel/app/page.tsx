import React from 'react'

export default function HomePage() {
  return (
    <div style={{fontFamily: 'Inter, sans-serif', padding: 24, background: '#f7f7fb', minHeight: '100vh'}}>
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
        <h1 style={{fontSize: 22}}>Shimmers — Sales Intelligence (Demo)</h1>
        <div>Owner: Darsh</div>
      </header>

      <section style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16}}>
        <div style={{background: 'white', padding: 16, borderRadius: 8}}>
          <h2 style={{marginBottom: 8}}>Revenue (mock)</h2>
          <div style={{height: 220, background: '#eef2ff', borderRadius: 6, display:'flex', alignItems:'center', justifyContent:'center'}}>Chart placeholder</div>
        </div>
        <div style={{background: 'white', padding: 16, borderRadius: 8}}>
          <h3>KPIs</h3>
          <ul>
            <li>Weekly club revenue: ₹1,24,000</li>
            <li>Avg spend per cover: ₹2200</li>
            <li>VIP visits this week: 18</li>
          </ul>
        </div>
      </section>

      <section style={{display:'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16}}>
        <div style={{background:'white', padding:16, borderRadius:8}}>
          <h3>Event Suggestions</h3>
          <div id="events-root">Use /api/events/suggest to fetch ideas.</div>
        </div>
        <div style={{background:'white', padding:16, borderRadius:8}}>
          <h3>Upload Data</h3>
          <p>Use the API endpoint /api/upload to POST CSV files (not implemented in demo).</p>
        </div>
      </section>
    </div>
  )
}
