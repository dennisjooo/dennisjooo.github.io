"use client";

import Link from "next/link";
import { NavItem } from "@/data/navbarContent";

interface MobileMenuProps {
    navItems: NavItem[];
    isMenuOpen: boolean;
    onNavigate: (sectionId: string) => void;
    onToggle: (isOpen: boolean) => void;
    textColorClass: string;
}

export const MobileMenu = ({
    navItems,
    isMenuOpen,
    onNavigate,
    onToggle,
    textColorClass,
}: MobileMenuProps) => (
    <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
    >
        <ul className="flex flex-col items-center w-full py-2">
            {navItems.map((item) => (
                <li key={item.id} className="w-full text-center">
                    {item.href ? (
                        <Link
                            href={item.href}
                            onClick={() => {
                                if (item.id === "projects") {
                                    try {
                                        sessionStorage.setItem("fromNav", "true");
                                    } catch (error) {
                                        console.error("Error accessing sessionStorage:", error);
                                    }
                                }
                                onToggle(false);
                            }}
                            className={`w-full px-4 py-2 lowercase hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out block ${textColorClass}`}
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <button
                            onClick={() => {
                                onNavigate(item.id);
                                onToggle(false);
                            }}
                            className={`w-full px-4 py-2 lowercase hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out ${textColorClass}`}
                        >
                            {item.label}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    </div>
);
