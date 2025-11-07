"use client";

import Link from "next/link";
import { NavItem } from "@/data/navbarContent";

interface DesktopMenuProps {
    navItems: NavItem[];
    scrolled: boolean;
    onNavigate: (sectionId: string) => void;
    textColorClass: string;
}

export const DesktopMenu = ({ navItems, scrolled, onNavigate, textColorClass }: DesktopMenuProps) => (
    <ul className="hidden md:flex md:flex-row justify-around items-center w-full">
        {navItems.map((item) => {
            const hoverClass = scrolled 
                ? "hover:bg-gray-200 dark:hover:bg-gray-700" 
                : "hover:bg-gray-900 hover:bg-opacity-20 dark:hover:bg-white dark:hover:bg-opacity-20";
            const className = `w-full md:w-auto px-4 py-2 rounded-xl md:rounded-full transition-colors duration-300 ease-in-out lowercase ${textColorClass} ${hoverClass}`;

            return (
                <li key={item.id} className="w-full md:w-auto">
                    {item.href ? (
                        <Link href={item.href} className={className}>
                            {item.label}
                        </Link>
                    ) : (
                        <button 
                            onClick={() => onNavigate(item.id)} 
                            className={className}
                            aria-label={`Navigate to ${item.label}`}
                        >
                            {item.label}
                        </button>
                    )}
                </li>
            );
        })}
    </ul>
);
