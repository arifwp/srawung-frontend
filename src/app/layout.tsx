import type { Metadata } from "next";
import "../styles/globals.css";

// // Konfigurasi font Poppins
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"], // Tentukan berat font sesuai kebutuhan
//   variable: "--font-poppins", // CSS custom variable
// });

// // Konfigurasi font Roboto
// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-roboto",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-xl mx-auto overflow-x-hidden">
          {children}
        </div>
        {/* {children} */}
      </body>
    </html>
  );
}
