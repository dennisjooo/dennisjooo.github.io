'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimationControls } from 'framer-motion';
import { fadeInUpVariants } from '@/lib/animations/variants';

interface ProfileImageProps {
    mainControls: AnimationControls;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ mainControls }) => (
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
            className="rounded-full shadow-lg w-[225px] h-[225px] md:w-[300px] md:h-[300px]"
            priority
            sizes="(max-width: 768px) 225px, 300px"
        />
    </motion.div>
);
