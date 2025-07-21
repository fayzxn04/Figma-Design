import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Volkhov:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
