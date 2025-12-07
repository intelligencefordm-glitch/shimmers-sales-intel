"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Upload Data", href: "/upload" },
  { name: "Customers", href: "/customers" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "Events", href: "/events" }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div
      style={{
        width: "220px",
        background: "#111827",
        color: "white",
        height: "100vh",
        padding: "20px 12px",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "24px" }}>
        Shimmers AI
      </h2>

      {links.map((link, i) => {
        const active = pathname === link.href;
        return (
          <Link key={i} href={link.href}>
            <div
              style={{
                padding: "10px 12px",
                borderRadius: "8px",
                marginBottom: "6px",
                cursor: "pointer",
                background: active ? "#1f2937" : "transparent",
              }}
            >
              {link.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
