import type { Metadata } from "next";
import "./globals.css";
import { LoadingProvider } from "@/contexts/LoadingContext";
import LoadingScreen from "@/components/LoadingScreen";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Omar Hassan · Portfolio",
  description: "Welcome to the portfolio of Omar Hassan, a frontend developer. This website showcases his projects and technical skills, including React, Next.js, Tailwind CSS, TypeScript, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider>
          <LoadingProvider>
            <LoadingScreen />
            {children}
            <ToastContainer position="top-right" />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
