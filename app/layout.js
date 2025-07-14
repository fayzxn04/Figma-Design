// import "./globals.css";
// export default function DashboardLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-white text-black below-xs:flex below-xs:flex-col below-xs:items-center below-xs:justify-center below-xs:text-center below-xs:px-4">
//         {/* Layout UI */}
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }

import "./globals.css"; // ✅ required to make Tailwind styles apply

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
