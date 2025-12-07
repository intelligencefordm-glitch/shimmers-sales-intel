import formidable from 'formidable'
import fs from 'fs'
import { parse } from 'papaparse'

export const config = { api: { bodyParser: false } }

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message })
    const file = files.file
    const dest = `./uploads/${Date.now()}_${file.originalFilename}`
    fs.copyFileSync(file.filepath || file.path, dest)
    const csv = fs.readFileSync(dest, 'utf8')
    const parsed = parse(csv, { header: true })
    return res.status(200).json({ message: 'uploaded', rows: parsed.data.length, path: dest })
  })
}
