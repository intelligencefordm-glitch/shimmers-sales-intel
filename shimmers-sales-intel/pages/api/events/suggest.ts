// Next.js API route (CommonJS)
export default function handler(req, res) {
  const EVENT_TEMPLATES = [
    { title: 'Premium Lounge Night', hook: 'Exclusive seating, bottle service, curated cocktails', target: 'Premium, 25-40', instagramHook: 'Slow-motion bottle pour + VIP reactions', estCost: 40000 },
    { title: 'Bollywood Retro Night', hook: 'Old hits, themed dress code, dance floor', target: 'Mixed, 20-35', instagramHook: 'Throwback transitions + lip-sync', estCost: 20000 },
    { title: 'Ladies First Night', hook: 'Free entry for ladies till 11pm, special drinks menu', target: 'Female-forward', instagramHook: 'Group selfies + dance montage', estCost: 15000 },
    { title: 'Silent Disco', hook: 'Headset-powered silent disco for a unique content', target: 'College & young professionals', instagramHook: 'Viral POV headset switch', estCost: 30000 },
    { title: 'Sunset Sundowner', hook: 'Early evening cocktail hour with live acoustic', target: 'Casual evening crowd', instagramHook: 'Sunset skyline + cocktails', estCost: 12000 },
  ]
  const target = (req.query && req.query.target) || 'all'
  let out = EVENT_TEMPLATES
  if (target !== 'all') out = out.filter(e => e.target.toLowerCase().includes(target))
  res.status(200).json({ ok: true, suggestions: out })
}
