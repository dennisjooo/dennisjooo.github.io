import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BentoCardProps {
    className?: string;
    name: string;
    description: string;
    href: string;
    cta: string;
    date: string;
    imageUrl?: string;
    isCertification?: boolean;
    meta?: string;
}

export const BentoCard = ({
    name,
    className,
    description,
    href,
    cta,
    date,
    imageUrl,
    isCertification = false,
    meta,
}: BentoCardProps) => {
    const isExternal = href.startsWith('http');
    const linkProps = isExternal
        ? { href, target: '_blank', rel: 'noopener noreferrer' as const }
        : { href };

    const LinkComponent = isExternal ? 'a' : Link;

    return (
        <LinkComponent
            {...linkProps}
            className={cn(
                'group relative flex flex-col justify-end overflow-hidden rounded-3xl',
                'bg-white dark:bg-neutral-900', // Solid background base
                'border border-neutral-200 dark:border-neutral-800', // Subtle outer boundary
                'text-neutral-900',
                // Hover Effects:
                'shadow-sm hover:shadow-accent/20',
                'transition-all duration-500 ease-out',
                'hover:scale-[1.01]', // Reduced scale effect for cleaner feel
                isCertification ? 'min-h-[200px]' : 'min-h-[380px] sm:min-h-[400px]',
                'cursor-pointer',
                className,
            )}
        >
            {/* Inner Border/Ring for Glass Effect - Sits ON TOP of content */}
            <div className="absolute inset-0 z-20 pointer-events-none rounded-3xl ring-1 ring-inset ring-black/5 dark:ring-white/10 group-hover:ring-accent/40 transition-all duration-500" />

            {/* Background Image Layer */}
            {!isCertification && (
                <div className="absolute inset-0 h-full w-full">
                    {imageUrl ? (
                        <>
                            <Image
                                src={imageUrl}
                                alt={name}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                            />
                            {/* Gradient Fade - Stronger and taller to ensure text readability */}
                            <div className="absolute inset-x-0 bottom-0 h-3/4 group-hover:h-[85%] transition-all duration-500 bg-gradient-to-t from-white via-white/80 via-30% to-transparent dark:from-neutral-900 dark:via-neutral-900/80 dark:to-transparent" />
                            {/* Top unified dimming for dark mode */}
                            <div className="absolute inset-0 bg-transparent dark:bg-neutral-900/10" />
                        </>
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-orange-500/5 dark:from-violet-500/10 dark:via-fuchsia-500/10 dark:to-orange-500/10" />
                    )}
                </div>
            )}

            {/* Content Layer */}
            <div className="relative z-10 p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-xl text-neutral-900 dark:text-white tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                        {name}
                    </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    <time dateTime={date}>{date}</time>
                    {meta && (
                        <>
                            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-500" />
                            <span>{meta}</span>
                        </>
                    )}
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed font-medium">
                    {description}
                </p>

                <div className={cn(
                    "inline-flex items-center gap-2 text-sm font-bold mt-2",
                    "text-neutral-900 dark:text-white",
                    "transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                )}>
                    {cta}
                    <ArrowRightIcon className="h-4 w-4" />
                </div>
            </div>

            {/* Decorative Top Highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </LinkComponent>
    );
};

