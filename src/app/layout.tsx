import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontLogo = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "Sk Akram Ahmed | Senior Full Stack Engineer & UI/UX Expert",
  description:
    "Production-ready portfolio showcasing modern full stack applications, interactive UI/UX engineering, and cloud architecture.",
  keywords: ["Full Stack Engineer", "React", "Next.js", "UI/UX", "TypeScript", "GSAP", "Tailwind CSS"],
  authors: [{ name: "Sk Akram Ahmed" }],
  openGraph: {
    title: "Sk Akram Ahmed | Senior Full Stack Engineer",
    description: "Production-ready developer portfolio showcasing modern engineering and sleek UI design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} ${fontLogo.variable}`}
    >
      <body className="font-sans antialiased selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
