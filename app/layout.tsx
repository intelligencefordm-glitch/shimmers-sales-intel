export const metadata = {
  title: "Shimmers Sales Intelligence",
  description: "Sales dashboard for Shimmers Club & Restaurant",
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
          background: "#f5f6fa",
        }}
      >
        {children}
      </body>
    </html>
  );
}
