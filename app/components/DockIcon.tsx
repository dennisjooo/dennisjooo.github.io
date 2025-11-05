import React from "react";
import { DockIcon as BaseDockIcon } from "@/app/components/Dock";
import * as Bs from "react-icons/bs";
import { IconType } from "react-icons";

interface DockIconProps {
    href: string;
    ariaLabel: string;
    icon: string;
}

export const DockIcon: React.FC<DockIconProps> = ({ href, ariaLabel, icon }) => {
    // Convert icon name to the react-icons component name (e.g., "bi-github" to "BsGithub")
    const iconName = "Bs" + icon.replace("bi-", "").split("-").map(part =>
        part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    ).join("");
    const IconComponent: IconType = (Bs as Record<string, IconType>)[iconName];

    return (
        <BaseDockIcon>
            <a href={href} aria-label={ariaLabel}>
                <IconComponent size={24} />
            </a>
        </BaseDockIcon>
    );
};