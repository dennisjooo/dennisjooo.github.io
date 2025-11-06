import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

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

export const BentoGrid = ({ children, className }: BentoGridProps) => (
    <div className={cn("grid gap-4", className)}>
        {children}
    </div>
);

export const BentoCard = ({ name, className, description, href, cta, date, imageUrl, isCertification }: BentoCardProps) => (
    <div
        className={cn(
            "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10",
            "bg-zinc-950/60 transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-white/30",
            isCertification ? "min-h-[200px]" : "min-h-[320px] sm:min-h-[360px] md:min-h-[400px]",
            className
        )}
    >
        {!isCertification && (
            <div className="relative h-40 w-full overflow-hidden sm:h-48">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_70%)]" />
                )}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
        )}

        <div className="flex flex-grow flex-col justify-between p-5 sm:p-6">
            <div className="flex-grow space-y-3">
                <h3 className="line-clamp-2 text-lg font-semibold text-white sm:text-xl">
                    {name}
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">{date}</p>
                <p className="line-clamp-3 text-sm text-zinc-300 sm:text-base">{description}</p>
            </div>

            <div className="mt-4 flex-shrink-0">
                {href.startsWith('http') ? (
                    <a
                        href={href}
                        className="group/cta inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:translate-x-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {cta}
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </a>
                ) : (
                    <Link
                        href={href}
                        className="group/cta inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:translate-x-1"
                    >
                        {cta}
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </Link>
                )}
            </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
);