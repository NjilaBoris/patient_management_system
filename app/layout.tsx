import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CarePulse",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
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
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
