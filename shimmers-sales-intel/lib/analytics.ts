import fs from 'fs'
import path from 'path'

type Txn = { id: string; customerId: string; date: string; billAmount: number }

export function computeRFM(mockPath = '') {
  const txns: Txn[] = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'mock_transactions.json'), 'utf8'))
  const now = new Date()
  const byCust: Record<string, Txn[]> = {}
  txns.forEach(t => { (byCust[t.customerId] ||= []).push(t) })

  const rfm = Object.entries(byCust).map(([customerId, txs]) => {
    const recencyDays = Math.round((now.getTime() - Math.max(...txs.map(t => new Date(t.date).getTime()))) / 86400000)
    const frequency = txs.length
    const monetary = txs.reduce((s, x) => s + x.billAmount, 0)
    return { customerId, recencyDays, frequency, monetary }
  })
  const recencies = rfm.map(r => r.recencyDays).sort((a, b) => a - b)
  const freq = rfm.map(r => r.frequency).sort((a, b) => a - b)
  const mon = rfm.map(r => r.monetary).sort((a, b) => a - b)

  const q = (arr: number[], p: number) => arr[Math.floor((arr.length - 1) * p)]
  const rCuts = [q(recencies, 0.2), q(recencies, 0.4), q(recencies, 0.6), q(recencies, 0.8)]
  const fCuts = [q(freq, 0.2), q(freq, 0.4), q(freq, 0.6), q(freq, 0.8)]
  const mCuts = [q(mon, 0.2), q(mon, 0.4), q(mon, 0.6), q(mon, 0.8)]

  function score(val: number, cuts: number[], reverse = false) {
    let s = 5
    for (let i = 0; i < cuts.length; i++) {
      if ((reverse && val <= cuts[i]) || (!reverse && val <= cuts[i])) { s = i + 1; break }
    }
    return s
  }

  const scored = rfm.map(r => ({
    customerId: r.customerId,
    recency: r.recencyDays,
    frequency: r.frequency,
    monetary: r.monetary,
    rScore: score(r.recencyDays, rCuts, true),
    fScore: score(r.frequency, fCuts),
    mScore: score(r.monetary, mCuts),
  }))
  scored.forEach(s => { (s as any)['rfmScore'] = `${(s as any).rScore}${(s as any).fScore}${(s as any).mScore}`; (s as any)['segment'] = ((s as any).rScore>=4 && (s as any).fScore>=4 && (s as any).mScore>=4) ? 'VIP' : ((s as any).monetary>2000 && (s as any).frequency>=3 ? 'Potential VIP' : 'Regular') })
  fs.writeFileSync(path.join(process.cwd(), 'rfm_output.json'), JSON.stringify(scored, null, 2))
  return scored
}

if (require.main === module) computeRFM()
