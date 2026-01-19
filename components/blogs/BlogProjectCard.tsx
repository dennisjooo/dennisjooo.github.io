'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

interface BlogProjectCardProps {
    title: string;
    description: string;
    date: string;
    imageUrl?: string;
    slug: string;
    index: number;
    type: 'project' | 'blog';
    readTime?: string;
}

export const BlogProjectCard = ({
    title,
    description,
    date,
    imageUrl,
    slug,
    index,
    type,
    readTime,
}: BlogProjectCardProps) => {
    return (
        <Link href={`/blogs/${slug}`} className="block group w-full cursor-pointer h-full">
            <motion.article
                className="flex flex-col gap-4 h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Card Wrapper for Glow */}
                <div className="relative w-full aspect-[4/3]">
                    {/* Gradient Glow */}
                    <div className="absolute -inset-1 bg-gradient-accent rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                    
                    {/* Image Container - Poster Style */}
                    <div className="relative w-full h-full bg-muted overflow-hidden rounded-md border border-border">
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
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-secondary to-muted" />
                        )}
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 z-10" />
                        
                        {/* Type Badge */}
                        <div className="absolute top-3 left-3 z-20">
                            <span className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest bg-background/80 backdrop-blur-sm rounded border border-border text-muted-foreground">
                                {type === 'project' ? 'Project' : 'Article'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content - Editorial Layout */}
                <div className="flex flex-col gap-2 relative flex-1">
                    {/* Header Line */}
                    <div className="flex items-baseline justify-between border-b border-border pb-2 mb-2">
                        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-widest">
                            <span>0{(index % 9) + 1}</span>
                            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                            <span>{date}</span>
                            {readTime && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                                    <span>{readTime}</span>
                                </>
                            )}
                        </div>
                        <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>

                    <h3 className="font-urbanist font-bold text-xl md:text-2xl tracking-tight leading-tight text-foreground group-hover:text-accent transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="font-urbanist text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {description}
                    </p>
                </div>
            </motion.article>
        </Link>
    );
};
