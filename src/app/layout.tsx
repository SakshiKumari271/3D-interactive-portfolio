import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import ElasticCursor from "@/components/ui/ElasticCursor";
import Particles from "@/components/Particles";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Preloader from "@/components/preloader";
import EasterEggs from "@/components/easter-eggs";
import { config } from "@/data/config";

// REMOVED: SocketContextProvider and RemoteCursors imports to stop 404 errors

export const metadata: Metadata = {
  title: config.title || "Sakshi Kumari | Portfolio",
  description: config.description?.long || "AI & Python Developer Portfolio",
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description?.short,
    url: config.site,
    images: [
      {
        url: config.ogImg || "/assets/seo/og-image.png",
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description?.short,
    images: [config.ogImg || "/assets/seo/og-image.png"],
  },
};

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivoBlack.className}>
      <head>
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            {/* REMOVED: <SocketContextProvider> wrapper */}
              <Preloader>
                <Particles
                  className="fixed inset-0 -z-10 animate-fade-in"
                  quantity={100}
                />
                {/* REMOVED: <RemoteCursors /> */}
                <Header />
                {children}
                <Footer />
                <Toaster />
                <EasterEggs />
                <ElasticCursor />
              </Preloader>
            {/* REMOVED: </SocketContextProvider> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}