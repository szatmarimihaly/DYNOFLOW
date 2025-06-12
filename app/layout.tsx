import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className}>
      <body>

        <nav>
          <Navbar />
        </nav>

        {children}
      </body>
    </html>
  );
}
