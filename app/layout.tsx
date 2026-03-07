import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ship Your First App",
  description: "Starter for the Ship Your First App guided project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
