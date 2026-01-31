import "@/styles/globals.css";

import FilterDisplayProvider from "@/components/providers/FilterDisplay-provider";
import FilterProvider from "@/components/providers/Filter-provider";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import type { Metadata } from "next";
import Overlay from "@/components/ui/Overlay";
import SortDisplayProvider from "@/components/providers/SortDisplay-provider";
import SortProvider from "@/components/providers/ٍSort-provider";
import ThemeProvider from "@/components/providers/Theme-provider";
import { montserrat } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Invesment Portfolio Dashboard",
  description: "Dashboard to vview and Control your assets",
  keywords: "dashboard, inverstment, portfolio, assets",
  creator: "Abdulrahman Ismael",
  authors: [
    {
      name: "Abdulrahman Ismael",
      url: "https://abdulrahman-ismael-portfolio.vercel.app/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-background text-text-primary overflow-x-hidden flex flex-col min-h-screen`}
      >
        <FilterDisplayProvider>
          <SortDisplayProvider>
            <SortProvider>
              <FilterProvider>
                <ThemeProvider>
                  <Header />
                  <main className="flex-1">
                    <div className="container mx-auto">{children}</div>
                  </main>
                  <Footer />
                </ThemeProvider>

                <Overlay />
              </FilterProvider>
            </SortProvider>
          </SortDisplayProvider>
        </FilterDisplayProvider>
      </body>
    </html>
  );
}
