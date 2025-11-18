import type { Metadata } from "next";
import type { ReactNode } from "react";
import "katex/dist/katex.min.css";
import "react-photo-view/dist/react-photo-view.css";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { CopyrightNotice } from "@/components/shared";
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
    title: {
        default: "Dennis' Portfolio",
        template: "%s | Dennis Jonathan"
    },
    description: "AI enthusiast and problem solver with a background in math, stats, and machine learning. I build practical tools, explore weird ideas, and make complex stuff a little more approachable.",
    keywords: ['AI', 'Machine Learning', 'Data Science', 'Portfolio', 'Developer', 'Math', 'Statistics'],
    authors: [{ name: 'Dennis Jonathan', url: 'https://dennisjooo.github.io' }],
    creator: 'Dennis Jonathan',
    metadataBase: new URL('https://dennisjooo.github.io'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://dennisjooo.github.io',
        title: "Dennis' Portfolio",
        description: "AI enthusiast and problem solver with a background in math, stats, and machine learning.",
        siteName: "Dennis Jonathan's Portfolio",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Dennis' Portfolio",
        description: "AI enthusiast and problem solver with a background in math, stats, and machine learning.",
    },
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
            <body className={`bg-white dark:bg-black ${inter.variable} ${robotoMono.variable}`} suppressHydrationWarning>
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                    <footer className="relative flex justify-center items-center px-8 py-20 overflow-hidden min-h-[200px]">
                        <div className="absolute inset-0 bg-footer-gradient" />
                        <div className="absolute inset-0 footer-glow" />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/10 via-transparent to-indigo-200/10 dark:from-indigo-400/5 dark:via-purple-500/5 dark:to-pink-400/5" />
                        <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-purple-300/20 via-purple-200/10 to-transparent dark:from-purple-600/15 dark:via-purple-700/8 dark:to-transparent blur-3xl" />
                        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                            <span className="h-[2px] w-24 rounded-full bg-gradient-accent opacity-75" aria-hidden />
                            <CopyrightNotice className="text-base text-gray-800 dark:text-gray-100" />
                        </div>
                    </footer>
                </Providers>
            </body>
        </html>
    );
}
