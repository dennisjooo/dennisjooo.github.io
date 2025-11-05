import type { Metadata } from "next";
import type { ReactNode } from "react";
import "katex/dist/katex.min.css";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { Providers } from "./providers";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
    title: "Dennis' Portfolio",
    description: "AI enthusiast and problem solver with a background in math, stats, and machine learning. I build practical tools, explore weird ideas, and make complex stuff a little more approachable.",
    keywords: ['AI', 'Machine Learning', 'Data Science', 'Portfolio', 'Developer', 'Math', 'Statistics'],
    authors: [{ name: 'Dennis Jonathan', url: 'https://dennisjooo.github.io' }],
    metadataBase: new URL('https://dennisjooo.github.io'),
    icons: {
        icon: '/favicon.ico',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`bg-black ${inter.variable} ${robotoMono.variable}`} suppressHydrationWarning>
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
