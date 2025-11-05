'use client';

import { ThemeProvider } from 'next-themes';
import Navbar from "@/app/components/navbar/Navbar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
        </ThemeProvider>
    );
} 