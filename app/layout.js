import "./globals.css";
import "../public/favicon.ico";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vimukthi Bandaragoda",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <link rel="stylesheet" href="./globals.css" /> */}
        {children}
      </body>
    </html>
  );
}
