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
                    <footer className="relative isolate flex justify-center px-8 py-12 bg-white dark:bg-black">
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 -top-32 bg-gradient-to-t from-purple-200/40 via-purple-100/0 to-transparent dark:from-purple-700/30 dark:via-indigo-600/10 dark:to-transparent" />
                        <div className="pointer-events-none absolute bottom-[-35%] left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full bg-purple-400/30 dark:bg-fuchsia-600/20 blur-[160px]" />
                        <div className="relative z-10">
                            <CopyrightNotice />
                        </div>
                    </footer>
                </Providers>
            </body>
        </html>
    );
}
