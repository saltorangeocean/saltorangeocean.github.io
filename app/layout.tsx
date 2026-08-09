import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://saltorangeocean.github.io/";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicAsset = (path: string) => new URL(`${basePath}${path}`, siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MORS² Game Engine",
    template: "%s — MORS²",
  },
  description:
    "MORS² is a small, elegant, high-performance Rust game engine architecture.",
  icons: {
    icon: publicAsset("/mors-logo.svg"),
    shortcut: publicAsset("/mors-logo.svg"),
  },
  openGraph: {
    title: "MORS² Game Engine",
    description: "Meta is observed by Rule to Step in Space.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "MORS² Game Engine",
    description: "Meta is observed by Rule to Step in Space.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
