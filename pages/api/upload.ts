import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import { parse } from "papaparse";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  const form = new formidable.IncomingForm({
    uploadDir: "./uploads",
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message });

    const file = files.file;
    const filepath = file.path || file.filepath;

    const raw = fs.readFileSync(filepath, "utf8");
    const parsed = parse(raw, { header: true });

    return res.status(200).json({
      message: "uploaded",
      rows: parsed.data.length,
    });
  });
}
