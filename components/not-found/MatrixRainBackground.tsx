'use client';

import { useEffect, useRef } from 'react';
import { MATRIX_CHARS } from '@/lib/constants/notFound';

type MatrixRainBackgroundProps = {
    enabled?: boolean;
};

export function MatrixRainBackground({ enabled = true }: MatrixRainBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!enabled || prefersReducedMotion) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        const fontSize = 16;
        const maxDpr = 1.5;

        let dpr = 1;
        let width = 0;
        let height = 0;
        let columns = 0;
        let drops: number[] = [];

        const getMonoFont = () => {
            const mono = getComputedStyle(document.documentElement)
                .getPropertyValue('--font-mono')
                .trim();
            return mono || 'monospace';
        };

        const getAccentColor = () => {
            const accent = getComputedStyle(document.documentElement)
                .getPropertyValue('--accent')
                .trim();
            return accent ? `hsl(${accent} / 0.85)` : 'rgba(168, 85, 247, 0.85)';
        };

        const getBackgroundFade = () => {
            const bg = getComputedStyle(document.documentElement)
                .getPropertyValue('--background')
                .trim();
            return bg ? `hsl(${bg} / 0.1)` : 'rgba(0, 0, 0, 0.08)';
        };

        let monoFont = getMonoFont();
        let accentColor = getAccentColor();
        let backgroundFade = getBackgroundFade();

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);

            canvas.style.width = '100%';
            canvas.style.height = '100%';

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            columns = Math.max(1, Math.floor(width / fontSize));
            drops = Array.from({ length: columns }, () => Math.random() * (height / fontSize));

            monoFont = getMonoFont();
            accentColor = getAccentColor();
            backgroundFade = getBackgroundFade();

            ctx.font = `${fontSize}px ${monoFont}`;
            ctx.textBaseline = 'top';
        };

        resize();

        let rafId = 0;
        let lastFrameTime = 0;
        const targetFrameMs = 1000 / 30;

        const draw = (time: number) => {
            rafId = window.requestAnimationFrame(draw);

            if (time - lastFrameTime < targetFrameMs) {
                return;
            }
            lastFrameTime = time;

            ctx.fillStyle = backgroundFade;
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = accentColor;

            for (let i = 0; i < columns; i++) {
                const char = MATRIX_CHARS[(Math.random() * MATRIX_CHARS.length) | 0];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(char, x, y);

                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                } else {
                    drops[i] += 1;
                }
            }
        };

        const onVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                window.cancelAnimationFrame(rafId);
                rafId = 0;
            } else if (!rafId) {
                lastFrameTime = 0;
                rafId = window.requestAnimationFrame(draw);
            }
        };

        const onThemeChange = () => {
            accentColor = getAccentColor();
            backgroundFade = getBackgroundFade();
            monoFont = getMonoFont();
            ctx.font = `${fontSize}px ${monoFont}`;
        };

        window.addEventListener('resize', resize, { passive: true });
        document.addEventListener('visibilitychange', onVisibilityChange);

        const themeObserver = new MutationObserver(onThemeChange);
        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        rafId = window.requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', onVisibilityChange);
            themeObserver.disconnect();
            window.cancelAnimationFrame(rafId);
        };
    }, [enabled]);

    return (
        <div
            className="fixed inset-0 overflow-hidden pointer-events-none opacity-60 dark:opacity-50"
            style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            }}
        >
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
}
