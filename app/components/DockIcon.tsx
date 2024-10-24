import React from "react";
import { DockIcon as BaseDockIcon } from "./Dock";

interface DockIconProps {
    href: string;
    ariaLabel: string;
    icon: string;
}

export const DockIcon: React.FC<DockIconProps> = ({ href, ariaLabel, icon }) => (
    <BaseDockIcon>
        <a href={href} aria-label={ariaLabel}>
            <i className={`bi ${icon}`} style={{ fontSize: '24px' }}></i>
        </a>
    </BaseDockIcon>
);