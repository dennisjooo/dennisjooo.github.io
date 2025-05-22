import React from "react";
import { DockIcon as BaseDockIcon } from "./Dock";
import * as Bs from "react-icons/bs";

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
    const IconComponent = (Bs as any)[iconName];

    return (
        <BaseDockIcon>
            <a href={href} aria-label={ariaLabel}>
                <IconComponent size={24} />
            </a>
        </BaseDockIcon>
    );
};