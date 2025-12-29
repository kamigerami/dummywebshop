import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["system-ui", "arial"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  fallback: ["system-ui", "arial"],
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const fonts = [fontSans.variable, fontMono.variable, fontSerif.variable];
