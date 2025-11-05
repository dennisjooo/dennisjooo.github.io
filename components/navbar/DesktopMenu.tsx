"use client";

import Link from "next/link";
import { NavItem } from "@/data/navbarContent";

interface DesktopMenuProps {
    navItems: NavItem[];
    scrolled: boolean;
    onNavigate: (sectionId: string) => void;
}

const baseClasses =
    "w-full md:w-auto px-4 py-2 rounded-xl md:rounded-full transition-colors duration-300 ease-in-out text-white lowercase";

export const DesktopMenu = ({ navItems, scrolled, onNavigate }: DesktopMenuProps) => (
    <ul className="hidden md:flex md:flex-row justify-around items-center w-full">
        {navItems.map((item) => {
            const hoverClass = scrolled ? "hover:bg-gray-700" : "hover:bg-white hover:bg-opacity-20";
            const className = `${baseClasses} ${hoverClass}`;

            return (
                <li key={item.id} className="w-full md:w-auto">
                    {item.href ? (
                        <Link href={item.href} className={className}>
                            {item.label}
                        </Link>
                    ) : (
                        <button onClick={() => onNavigate(item.id)} className={className}>
                            {item.label}
                        </button>
                    )}
                </li>
            );
        })}
    </ul>
);
