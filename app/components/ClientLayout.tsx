'use client';

import { ThemeProvider } from 'next-themes';
import Navbar from "./navbar/Navbar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <body className="bg-black" suppressHydrationWarning>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                <Navbar />
                <main>{children}</main>
            </ThemeProvider>
        </body>
    );
} 