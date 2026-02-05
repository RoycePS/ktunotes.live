import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "KTU Notes - Latest 2024 Scheme Notes, Syllabus & Study Materials",
  description: "Access official APJ Abdul Kalam Technological University B.Tech study notes, module-wise PDF downloads, solved question papers, and SGPA Calculator for all engineering branches.",
  keywords: "KTU, KTU Notes, B.Tech, CSE Notes, KTU Syllabus, SGPA Calculator, KTU PYQ, APJ Abdul Kalam Technological University",
  authors: [{ name: "KTUNOTES.LIVE Team" }],
  openGraph: {
    title: "KTU Notes - Latest 2024 Scheme Notes, Syllabus & Study Materials",
    description: "Access official APJ Abdul Kalam Technological University B.Tech study notes, module-wise PDF downloads, solved question papers, and SGPA Calculator for all engineering branches.",
    url: "https://ktunotes.live",
    siteName: "KTU Notes Live",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
