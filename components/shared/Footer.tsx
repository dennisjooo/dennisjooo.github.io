const Footer = () => {
    return (
        <footer className="relative px-8 py-16 bg-white dark:bg-black overflow-hidden">
            {/* Sun gradient - positioned to show just the top curve (horizon effect) */}
            <div
                className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-[50%] w-[120%] rounded-full pointer-events-none"
                style={{
                    height: '130%',
                    background: `radial-gradient(ellipse at center,
                        var(--gradient-accent-from) 0%,
                        var(--gradient-accent-from) 15%,
                        var(--gradient-accent-via) 40%,
                        var(--gradient-accent-to) 60%,
                        transparent 80%)`,
                    filter: 'blur(30px)',
                    opacity: 0.7,
                    backgroundImage: `radial-gradient(ellipse at center,
                        var(--gradient-accent-from) 0%,
                        var(--gradient-accent-from) 15%,
                        var(--gradient-accent-via) 40%,
                        var(--gradient-accent-to) 60%,
                        transparent 80%),
                        url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`
                }}
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-700 dark:text-gray-300 z-10">© Dennis Jonathan {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
