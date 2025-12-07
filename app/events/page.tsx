"use client";
import EventSuggestions from "../components/EventSuggestions";

export default function EventsPage() {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "22px", fontWeight: 600 }}>Events & Ideas</h1>

      <p style={{ marginTop: "10px" }}>
        AI-suggested event ideas to attract premium crowds.
      </p>

      <div style={{ marginTop: "20px" }}>
        <EventSuggestions />
      </div>
    </div>
  );
}
