'use client';

import React from 'react';
import Image from 'next/image';
import { aboutContent } from '../data/aboutContent';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { fadeInUpVariants } from '../animations/variants';
import { AnimationControls } from 'framer-motion';

const About: React.FC = () => {
    const { ref, mainControls } = useAnimateOnScroll();

    return (
        <section
            ref={ref}
            id="about"
            className="min-h-screen flex flex-col items-center justify-center px-8 py-16 pt-20 md:pt-8 bg-white text-black"
        >
            <motion.h2
                className="text-3xl md:text-4xl mb-8 text-center font-bold"
                variants={fadeInUpVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8 }}
            >
                About.
            </motion.h2>
            <motion.div
                className="max-w-4xl mx-auto flex flex-col md:flex-row items-center"
                variants={fadeInUpVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <ProfileImage mainControls={mainControls} />
                <AboutContent mainControls={mainControls} />
            </motion.div>
        </section>
    );
};

const ProfileImage: React.FC<{ mainControls: AnimationControls }> = ({ mainControls }) => (
    <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.4 }}
    >
        <Image
            src="/images/profile.webp"
            alt="Profile picture"
            width={300}
            height={300}
            className="rounded-full shadow-lg w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
        />
    </motion.div>
);

const AboutContent: React.FC<{ mainControls: AnimationControls }> = ({ mainControls }) => (
    <motion.div
        className="md:w-3/4 md:pl-5 font-light"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.6 }}
    >
        {Object.entries(aboutContent).map(([key, content], index) => (
            <motion.h5
                key={key}
                className="mb-4 last:mb-0"
                variants={fadeInUpVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
                {content}
            </motion.h5>
        ))}
    </motion.div>
);

export default About;