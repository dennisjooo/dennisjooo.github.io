import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "./lib/utils";
import { Button } from "./ui/button";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => (
    <div
        className={cn(
            "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            className
        )}
    >
        {children}
    </div>
);

interface BentoCardProps {
    name: string;
    className?: string;
    description: string;
    href: string;
    cta: string;
    date: string;
}

export const BentoCard = ({ name, className, description, href, cta, date }: BentoCardProps) => (
    <div
        className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-xl p-6",
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            "transform-gpu transition-all duration-300 ease-in-out hover:scale-[1.02]",
            "dark:bg-white dark:text-black dark:[border:1px_solid_rgba(0,0,0,.1)]",
            className
        )}
    >
        <div>
            <h3 className="text-xl font-semibold text-neutral-700 mb-1">
                {name}
            </h3>
            <p className="text-sm text-neutral-500 mb-2">{date}</p>
            <p className="text-neutral-500">{description}</p>
        </div>

        <div className="mt-4">
            <Button className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                <a href={href} className="flex items-center">
                    {cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </a>
            </Button>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-colors duration-300 group-hover:bg-black/[.03]" />
    </div>
);