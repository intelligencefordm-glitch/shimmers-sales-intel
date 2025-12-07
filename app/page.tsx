"use client";

import React, { useEffect, useState } from "react";

type EventSuggestion = {
  title: string;
  hook: string;
  instagramHook: string;
  target: string;
  estCost: number;
};

export default function HomePage() {
  const [events, setEvents] = useState<EventSuggestion[]>([]);

  useEffect(() => {
    fetch("/api/events/suggest")
      .then((r) => r.json())
      .then((d) => {
        setEvents(d.suggestions || []);
      })
      .catch(() => {
        setEvents([]);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f6fa",
        padding: "24px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: 600 }}>
          Shimmers — Sales Intelligence Dashboard
        </h1>
        <div style={{ fontSize: "14px", opacity: 0.7 }}>Owner: Darsh</div>
      </header>

      {/* KPI SECTION */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <h3 style={{ fontSize: "14px", opacity: 0.6 }}>Weekly Club Revenue</h3>
          <p style={{ fontSize: "22px", fontWeight: 600 }}>₹1,24,000</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <h3 style={{ fontSize: "14px", opacity: 0.6 }}>
            Average Spend Per Guest
          </h3>
          <p style={{ fontSize: "22px", fontWeight: 600 }}>₹2,200</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <h3 style={{ fontSize: "14px", opacity: 0.6 }}>VIP Visits This Week</h3>
          <p style={{ fontSize: "22px", fontWeight: 600 }}>18</p>
        </div>
      </section>

      {/* SECOND ROW */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "16px",
        }}
      >
        {/* Revenue Chart Placeholder */}
        <div
          style={{
            background: "#fff",
            padding: "16px",
            borderRadius: "12px",
            minHeight: "260px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>
            Revenue Overview (Mock Data)
          </h3>
          <div
            style={{
              background: "#eef2ff",
              height: "200px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#4b5ce7",
            }}
          >
            Chart Placeholder
          </div>
        </div>

        {/* Event Suggestions */}
        <div
          style={{
            background: "#fff",
            padding: "16px",
            borderRadius: "12px",
            minHeight: "260px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>
            Instagrammable Event Ideas
          </h3>

          {events.length === 0 && (
            <p style={{ fontSize: "14px", opacity: 0.6 }}>Loading…</p>
          )}

          <div style={{ display: "grid", gap: "10px", marginTop: "10px" }}>
            {events.map((e, i) => (
              <div
                key={i}
                style={{
                  background: "#fafafa",
                  borderRadius: "10px",
                  padding: "12px",
                  border: "1px solid #eee",
                }}
              >
                <div style={{ fontWeight: 600 }}>{e.title}</div>

                <div style={{ fontSize: "13px", marginTop: "4px" }}>
                  {e.hook}
                </div>

                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    marginTop: "6px",
                    color: "#4b5ce7",
                  }}
                >
                  IG Hook: {e.instagramHook}
                </div>

                <div style={{ fontSize: "13px", marginTop: "4px" }}>
                  Budget: ₹{e.estCost}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
