import { DockIcon, type DockIconProps } from "./DockIcon";
import Link from "next/link";
import type { ReactNode } from "react";

interface DockIconLinkProps extends Partial<DockIconProps> {
    href: string;
    ariaLabel: string;
    icon: ReactNode;
}

export const DockIconLink: React.FC<DockIconLinkProps> = ({ href, ariaLabel, icon, ...dockProps }) => {
    return (
        <DockIcon
            className="bg-gradient-primary text-neutral-100 dark:mix-blend-screen dark:bg-gradient-primary backdrop-blur-sm hover:scale-110 hover:opacity-90 transition-all duration-100"
            {...dockProps}
        >
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="flex items-center justify-center size-full"
            >
                {icon}
            </Link>
        </DockIcon>
    );
};
