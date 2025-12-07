"use client";

import { useState } from "react";

export default function UploadPage() {
  const [message, setMessage] = useState("");

  async function handleUpload(e: any) {
    e.preventDefault();
    const file = e.target.file.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    setMessage(`Uploaded → ${json.rows} rows processed`);
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "22px", fontWeight: 600 }}>Upload CSV Data</h1>

      <form onSubmit={handleUpload} style={{ marginTop: "20px" }}>
        <input type="file" name="file" accept=".csv" />
        <button
          type="submit"
          style={{
            marginLeft: "12px",
            padding: "8px 20px",
            background: "#4b5ce7",
            color: "white",
            borderRadius: "6px",
            border: "none",
          }}
        >
          Upload
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "20px", fontSize: "16px" }}>{message}</p>
      )}
    </div>
  );
}
