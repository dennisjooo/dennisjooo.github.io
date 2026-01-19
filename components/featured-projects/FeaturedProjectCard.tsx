'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

interface FeaturedProjectCardProps {
    title: string;
    description: string;
    date: string;
    imageUrl?: string;
    slug: string;
    index: number;
}

export const FeaturedProjectCard = ({
    title,
    description,
    date,
    imageUrl,
    slug,
    index,
}: FeaturedProjectCardProps) => {
    return (
        <Link href={`/blogs/${slug}`} className="block group w-full cursor-pointer h-full">
            <motion.div
                className="flex flex-col gap-4 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                {/* Image Container - Poster Style */}
                <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden rounded-md border border-border">
                    {/* Noise Overlay */}
                    <div 
                        className="absolute inset-0 z-10 pointer-events-none opacity-20 mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                        }}
                    />
                    
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-secondary to-muted" />
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 z-10" />
                </div>

                {/* Content - Editorial Layout */}
                <div className="flex flex-col gap-2 relative flex-1">
                    {/* Header Line */}
                    <div className="flex items-baseline justify-between border-b border-border pb-2 mb-2">
                        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                            0{index + 1} — {date}
                        </span>
                        <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>

                    <h3 className="font-urbanist font-bold text-2xl md:text-3xl uppercase tracking-tight leading-[0.9] text-foreground group-hover:text-accent transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="font-urbanist text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {description}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
};
