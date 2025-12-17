import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Birhat Taş - Computer Engineer & Full-Stack Developer",
  description: "Portfolio of Birhat Taş - Computer Engineer & Full-Stack Developer specializing in B2B SaaS development, Next.js, TypeScript, AI integration, and production management.",
  keywords: ["Birhat Taş", "Computer Engineer", "Full-Stack Developer", "Next.js", "TypeScript", "Prisma", "B2B SaaS", "AI Integration", "Production Management", "DealerHub", "Pink Home", "Manisa Celal Bayar University"],
  authors: [{ name: "Birhat Taş" }],
  openGraph: {
    title: "Birhat Taş - Computer Engineer & Full-Stack Developer",
    description: "Portfolio showcasing B2B SaaS development, AI integration, production management, and full-stack development expertise with Next.js and TypeScript.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birhat Taş - Computer Engineer & Full-Stack Developer",
    description: "Portfolio showcasing B2B SaaS development, AI integration, production management, and full-stack development expertise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
