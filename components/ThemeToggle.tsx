'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { flushSync } from 'react-dom';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

interface ThemeToggleProps extends React.ComponentPropsWithoutRef<'button'> {
    duration?: number;
    textColorClass?: string;
}

export const ThemeToggle = ({
    className,
    duration = 400,
    textColorClass = 'text-gray-900 dark:text-white',
    ...props
}: ThemeToggleProps) => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = mounted ? currentTheme === 'dark' : false;

    const toggleTheme = useCallback(async () => {
        if (!buttonRef.current) return;

        const newTheme = isDark ? 'light' : 'dark';

        // Check if View Transition API is supported
        if (!document.startViewTransition) {
            // Fallback for browsers that don't support View Transition API
            setTheme(newTheme);
            return;
        }

        await document.startViewTransition(() => {
            flushSync(() => {
                setTheme(newTheme);
            });
        }).ready;

        const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top)
        );

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)',
            }
        );
    }, [isDark, duration, setTheme]);

    if (!mounted) {
        return (
            <button
                className="relative w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Toggle theme"
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            className={cn(
                'relative w-10 h-10 rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 flex items-center justify-center transition-all duration-300 ease-in-out',
                className
            )}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            {...props}
        >
            <div className="relative w-5 h-5">
                {isDark ? (
                    <BsMoon className={`w-5 h-5 transition-all duration-300 ${textColorClass}`} />
                ) : (
                    <BsSun className={`w-5 h-5 transition-all duration-300 ${textColorClass}`} />
                )}
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
};

