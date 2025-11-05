import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
            "group relative flex flex-col justify-between overflow-hidden rounded-xl",
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            "transform-gpu transition-all duration-300 ease-in-out hover:scale-[1.02]",
            "dark:bg-white dark:text-black dark:[border:1px_solid_rgba(0,0,0,.1)]",
            isCertification ? "min-h-[200px]" : "min-h-[320px] sm:min-h-[360px] md:min-h-[400px]",
            className
        )}
    >
        {!isCertification && (
            <div className="relative w-full h-40 sm:h-48">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />
                )}
            </div>
        )}

        <div className="flex flex-col flex-grow p-4 sm:p-6 justify-between">
            <div className="flex-grow">
                <h3 className="font-semibold text-lg sm:text-xl text-neutral-800 mb-1 line-clamp-2">
                    {name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mb-2">{date}</p>
                <p className="text-sm sm:text-base text-neutral-600 line-clamp-3">{description}</p>
            </div>

            <div className="mt-4 flex-shrink-0">
                <Button
                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-black text-sm sm:text-base px-0 py-1 h-auto hover:bg-transparent"
                >
                    <a href={href} className="flex items-center">
                        {cta}
                        <ArrowRightIcon className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-colors duration-300 group-hover:bg-black/[.03]" />
    </div>
);