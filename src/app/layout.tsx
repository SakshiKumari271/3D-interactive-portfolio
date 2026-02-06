export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivoBlack.className} suppressHydrationWarning>
      <head>
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        />
      </head>
      <body className="antialiased bg-black text-white"> {/* Force black bg for night sky */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <Preloader>
              {/* Stars are now z-0 and pointer-events-none so they don't block clicks */}
              <Particles
                className="fixed inset-0 z-0 pointer-events-none animate-fade-in"
                quantity={300}
                staticity={30}
                color="#ffffff"
                size={0.6}
              />
              <Header />
              <main className="relative z-10">{children}</main>
              <Footer />
              <Toaster />
              <EasterEggs />
              <ElasticCursor />
            </Preloader>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}