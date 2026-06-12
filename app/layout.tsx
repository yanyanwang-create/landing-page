import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Smith - AI Orchestration Architect",
  description: "Engineer specializing in AI orchestration systems and distributed architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
