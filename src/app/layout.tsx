import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";

import { Inter_Tight as FontSans } from "next/font/google";
import { Red_Hat_Mono as FontMono } from "next/font/google";
import { Roboto_Serif as FontSerif } from "next/font/google";
import CursorVisibilityProvider from "@/context/useCursorVisibility";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});
const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
});
const fontSerif = FontSerif({
    subsets: ["latin"],
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "manbug",
    description: "front end developer",
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
                    "min-h-screen font-sans text-[0.875em] antialiased",
                    fontSans.variable,
                    fontMono.variable,
                    fontSerif.variable,
                )}
                suppressHydrationWarning
            >
                <NextTopLoader shadow="none" showAtBottom />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <CursorVisibilityProvider>
                    <div className="flex min-h-screen flex-col">
                        {children}
                    </div>
                    </CursorVisibilityProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
