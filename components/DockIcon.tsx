import React from "react";
import { DockIcon as BaseDockIcon, type DockIconProps as BaseDockIconProps } from "@/components/Dock";
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { IconType } from "react-icons";

// Static map of icon names to components - only import what we need
const iconMap: Record<string, IconType> = {
    envelope: BsEnvelope,
    github: BsGithub,
    linkedin: BsLinkedin,
};

interface DockIconProps extends Partial<BaseDockIconProps> {
    href: string;
    ariaLabel: string;
    icon: string;
}

export const DockIcon: React.FC<DockIconProps> = ({ href, ariaLabel, icon, ...dockProps }) => {
    const IconComponent = iconMap[icon];

    if (!IconComponent) {
        console.warn(`Icon "${icon}" not found in iconMap`);
        return null;
    }

    return (
        <BaseDockIcon {...dockProps}>
            <a href={href} aria-label={ariaLabel}>
                <IconComponent size={24} />
            </a>
        </BaseDockIcon>
    );
};
