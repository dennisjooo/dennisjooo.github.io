import React from "react";
import { DockIcon as BaseDockIcon, type DockIconProps as BaseDockIconProps } from "@/components/Dock";
import * as Bs from "react-icons/bs";
import { IconType } from "react-icons";

interface DockIconProps extends Partial<BaseDockIconProps> {
    href: string;
    ariaLabel: string;
    icon: string;
}

export const DockIcon: React.FC<DockIconProps> = ({ href, ariaLabel, icon, ...dockProps }) => {
    // Convert icon name to the react-icons component name (e.g., "envelope" to "BsEnvelope")
    const iconName = "Bs" + icon.replace("bi-", "").split("-").map(part =>
        part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    ).join("");
    const IconComponent: IconType = (Bs as Record<string, IconType>)[iconName];

    return (
        <BaseDockIcon {...dockProps}>
            <a href={href} aria-label={ariaLabel}>
                <IconComponent size={24} />
            </a>
        </BaseDockIcon>
    );
};