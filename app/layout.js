import "./globals.css"; // ✅ required to make Tailwind styles apply
import { Volkhov } from "next/font/google";
import { Poppins } from "next/font/google";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["700"], // Bold
  variable: "--font-volkhov",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"], // 500 = Medium, 600 = Semi-Bold
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${volkhov.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
