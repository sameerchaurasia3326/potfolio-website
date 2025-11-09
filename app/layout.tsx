import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aanchalchaurasia.vercel.app'),
  title: "Aanchal Chaurasia - Graphic Designer & AI Content Creator",
  description: "I blend design, storytelling, and AI tools to craft visuals that connect ideas with emotion. Specializing in branding, AI art, and visual storytelling.",
  keywords: ["Graphic Designer", "AI Content Creator", "Visual Designer", "Branding", "UI/UX", "Illustration"],
  authors: [{ name: "Aanchal Chaurasia" }],
  openGraph: {
    title: "Aanchal Chaurasia - Graphic Designer & AI Content Creator",
    description: "Professional portfolio showcasing creative design and AI-powered visual content",
    url: "https://aanchalchaurasia.vercel.app",
    siteName: "Aanchal Chaurasia Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aanchal Chaurasia Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aanchal Chaurasia - Graphic Designer & AI Content Creator",
    description: "Professional portfolio showcasing creative design and AI-powered visual content",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <SplashScreen>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SplashScreen>
      </body>
    </html>
  );
}
