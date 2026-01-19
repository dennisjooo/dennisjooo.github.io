'use client';

import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full py-8 px-8 bg-background overflow-hidden border-t border-border z-40 bg-noise flex justify-center items-center">
             {/* Gradient Glow Interpretation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-gradient-accent opacity-20 blur-[50px] rounded-full pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-widest relative z-10"
            >
                © {currentYear} Dennis Jonathan
            </motion.div>
        </footer>
    );
};

export default Footer;
