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
                    opacity: 0.7
                }}
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-700 dark:text-gray-300 z-10">© Dennis Jonathan {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
