'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Dock } from '@/components/Dock';
import { DockIcon } from '@/components/DockIcon';
import { contactLinks } from '@/data/contactContent';

const Contacts: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    // Parallax for the "Say HELLO" text
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
    // Opacity fade in
    const opacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

    return (
        <section 
            ref={containerRef}
            id="contact" 
            className="relative min-h-[80vh] flex flex-col justify-center items-center py-24 px-4 md:px-8 bg-background overflow-hidden"
        >
            {/* Main Content Group - Centered */}
            <div className="flex-1 w-full max-w-5xl mx-auto z-10 flex flex-col justify-center items-center">
                 {/* Headline */}
                 <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center relative leading-none mb-12"
                >
                    <span className="font-playfair italic text-[12vw] md:text-[10vw] leading-[0.8] text-muted-foreground mix-blend-difference select-none text-center">
                        Let&apos;s
                    </span>
                    <span className="font-sans font-black text-[15vw] md:text-[12vw] leading-[0.8] text-gradient-primary tracking-tighter select-none text-center">
                        TALK
                    </span>
                </motion.div>

                {/* Bottom Group: Text & Dock */}
                <motion.div 
                    className="flex flex-col items-center gap-8"
                    style={{ opacity, y }}
                >
                    <p className="text-lg md:text-xl font-light text-muted-foreground font-sans text-center max-w-md px-4">
                        Have a cool idea? Want to geek out over AI, or just want to say hi? Drop a line.
                    </p>

                    <Dock className="mx-auto">
                        {contactLinks.map(({ href, ariaLabel, icon }) => (
                            <DockIcon key={ariaLabel} href={href} ariaLabel={ariaLabel} icon={icon} />
                        ))}
                    </Dock>
                </motion.div>
            </div>
        </section>
    );
};

export default Contacts;
