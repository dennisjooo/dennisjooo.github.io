import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "./lib/utils";
import { Button } from "./ui/button";

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
}

export const BentoGrid = ({ children, className }: BentoGridProps) => (
    <div className={cn("grid gap-4", className)}>
        {children}
    </div>
);

export const BentoCard = ({ name, className, description, href, cta, date }: BentoCardProps) => (
    <div
        className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-xl p-4 sm:p-6",
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            "transform-gpu transition-all duration-300 ease-in-out hover:scale-[1.02]",
            "dark:bg-white dark:text-black dark:[border:1px_solid_rgba(0,0,0,.1)]",
            "min-h-[200px] sm:min-h-[240px] md:min-h-[280px]",
            className
        )}
    >
        <div>
            <h3 className="font-semibold text-lg sm:text-xl text-neutral-800 mb-1 line-clamp-2">
                {name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mb-2">{date}</p>
            <p className="text-sm sm:text-base text-neutral-600 line-clamp-3">{description}</p>
        </div>

        <div className="-mx-4 sm:-mx-6 mt-4 px-4 sm:px-6">
            <Button
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-black text-sm sm:text-base px-0 py-1 h-auto hover:bg-transparent"
            >
                <a href={href} className="flex items-center">
                    {cta}
                    <ArrowRightIcon className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </a>
            </Button>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-colors duration-300 group-hover:bg-black/[.03]" />
    </div>
);