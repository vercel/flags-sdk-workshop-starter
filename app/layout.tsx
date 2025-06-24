import { VercelToolbar } from "@vercel/toolbar/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { DevTools } from "@/components/dev-tools";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flags SDK Example",
  description: "A Flags SDK example for Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="bg-white">
          <Navigation />
          {children}
          <Footer />
          <DevTools />
        </div>
        <Toaster />
        <Analytics />
        <VercelToolbar />
      </body>
    </html>
  );
}
