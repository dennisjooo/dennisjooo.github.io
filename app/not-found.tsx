import Link from 'next/link';
import { GlitchText } from '@/components/not-found/GlitchText';
import { ERROR_MESSAGES } from '@/lib/constants/notFound';

export default function NotFound() {
    const terminalLines = ERROR_MESSAGES.slice(0, 3);

    return (
        <main className="relative min-h-screen overflow-hidden">
            <div aria-hidden className="absolute inset-0 bg-gradient-primary" />
            <div
                aria-hidden
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, hsl(var(--accent) / 0.12) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--accent) / 0.12) 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                }}
            />

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
                <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold leading-none tracking-tighter">
                    <GlitchText>404</GlitchText>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mt-2 mb-8">
                    Page not found in this dimension
                </p>

                <div className="w-full max-w-md mb-8 font-mono text-sm md:text-base bg-black/80 dark:bg-black/90 rounded-lg px-4 py-3 border border-[hsl(var(--accent))]/30 shadow-lg text-left">
                    {terminalLines.map((line) => (
                        <div key={line} className="leading-relaxed">
                            <span className="text-green-400">$</span>
                            <span className="text-gray-300 ml-2">{line}</span>
                        </div>
                    ))}
                </div>

                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-accent text-accent-foreground font-medium transition-all duration-300 hover:shadow-accent hover:scale-105"
                >
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                    Return to Safety
                </Link>

                <p className="mt-12 text-sm text-muted-foreground/60 font-mono">
                    // TODO: fix this page... eventually
                </p>
            </div>
        </main>
    );
}
