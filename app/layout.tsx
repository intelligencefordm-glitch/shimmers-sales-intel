import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Shimmers Sales Intelligence",
  description: "AI-powered dashboard for Shimmers Club & Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Inter, sans-serif",
          display: "flex",
          background: "#f5f6fa",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar (fixed) */}
        <Sidebar />

        {/* Main content area */}
        <div
          style={{
            marginLeft: "220px",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
