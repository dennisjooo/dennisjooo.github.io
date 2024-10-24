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
    description: "A crapy portfolio made with crapy skills",
    icons: {
        icon: '/favicon.ico',
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
