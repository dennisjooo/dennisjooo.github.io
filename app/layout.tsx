import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from "./components/Navbar";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
    title: "Dennis's Portfolio",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${robotoMono.variable} bg-black`}>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
