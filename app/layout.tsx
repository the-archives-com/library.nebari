import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Library Nebari", description: "Free classics and short personal reviews from one reader to another.", icons: { icon: "/library-nebari-mark.png", apple: "/library-nebari-mark.png" }, other: { "codex-preview": "development" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
