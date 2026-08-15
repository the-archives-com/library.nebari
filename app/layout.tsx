import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Library Nebari", description: "Free classics and short personal reviews from one reader to another.", other: { "codex-preview": "development" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
