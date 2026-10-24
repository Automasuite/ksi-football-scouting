import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KSI Football | Scouting Centre",
  description: "Discover KSI Football Club and Academy players through a dedicated scouting centre.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
