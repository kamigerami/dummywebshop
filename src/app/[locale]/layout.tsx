import "@/styles/globals.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { fonts } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "El & Hem | Premium Kaffeupplevelser",
    template: `%s | El & Hem`,
  },
  description: "Din destination för Sage espressomaskiner och premium kaffebönor.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans bg-stone-50 text-stone-900", fonts)}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
