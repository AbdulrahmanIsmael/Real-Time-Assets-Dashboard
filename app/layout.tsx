import "@/styles/globals.css";

import FilterDisplayProvider from "@/components/providers/UI/FilterDisplay-provider";
import FilterProvider from "@/components/providers/logic/Filter-provider";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import type { Metadata } from "next";
import Overlay from "@/components/ui/Overlay";
import SearchInputProvider from "@/components/providers/UI/SearchInput-provider";
import SortDisplayProvider from "@/components/providers/UI/SortDisplay-provider";
import SortProvider from "@/components/providers/logic/ٍSort-provider";
import ThemeProvider from "@/components/providers/UI/Theme-provider";
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
                <SearchInputProvider>
                  <ThemeProvider>
                    <Header />
                    <main className="flex-1">
                      <div className="container mx-auto">{children}</div>
                    </main>
                    <Footer />
                  </ThemeProvider>

                  <Overlay />
                </SearchInputProvider>
              </FilterProvider>
            </SortProvider>
          </SortDisplayProvider>
        </FilterDisplayProvider>
      </body>
    </html>
  );
}
