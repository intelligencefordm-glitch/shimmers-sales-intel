import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Shimmers Sales Intelligence",
  description: "Sales dashboard for Shimmers Club & Restaurant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Inter, sans-serif",
          display: "flex",
        }}
      >
        <Sidebar />

        <div style={{ marginLeft: "220px", width: "100%" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
