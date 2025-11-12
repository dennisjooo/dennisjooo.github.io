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
                'group relative flex flex-col overflow-hidden rounded-2xl',
                'bg-white shadow-sm border',
                'backdrop-blur-sm transition-all duration-300 ease-out',
                'hover:shadow-xl hover:scale-[1.02]',
                'dark:bg-neutral-900',
                isCertification ? 'min-h-[200px]' : 'min-h-[380px] sm:min-h-[400px] md:min-h-[420px]',
                'cursor-pointer',
                className,
            )}
            style={{
                borderColor: 'var(--default-border)',
            }}
            onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.borderColor = 'var(--accent-border)';
                target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 0 25px var(--accent-shadow)';
            }}
            onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.borderColor = 'var(--default-border)';
                target.style.boxShadow = '';
            }}
        >
            {!isCertification && (
                <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={name}
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={false}
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}

            <div className="flex flex-col flex-1 p-6">
                <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100 line-clamp-2 leading-tight">
                            {name}
                        </h3>
                    </div>
                    <time
                        className="block text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium"
                        dateTime={date}
                    >
                        {date}
                    </time>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                </div>

                <span
                    className={cn(
                        'mt-6 inline-flex items-center gap-2 text-base font-medium',
                        'text-neutral-900 dark:text-neutral-100',
                        'transition-all duration-200 ease-out',
                        'group-hover:gap-3',
                    )}
                >
                    {cta}
                    <ArrowRightIcon
                        className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                        aria-hidden="true"
                    />
                </span>
            </div>

            <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/5 dark:ring-white/5"
                aria-hidden="true"
            />
        </LinkComponent>
    );
};
