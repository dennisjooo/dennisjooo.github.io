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

// Style constants
const ITEM_BASE_CLASSES = "block w-full rounded-2xl px-5 py-3 text-sm lowercase tracking-wide transition-colors duration-300 ease-in-out";
const HOVER_CLASSES = "hover:bg-gray-900/5 dark:hover:bg-white/10";

// Animation constants
const MENU_TRANSITION = "transition-[opacity,transform] duration-300 ease-out";
const ITEM_ANIMATION_BASE = "transition-[opacity,transform] duration-300 ease-out will-change-transform";

export const MobileMenu = ({
    navItems,
    isMenuOpen,
    onToggle,
    onNavigate,
    textColorClass,
}: MobileMenuProps) => {
    const containerClasses = [
        "absolute top-full left-0 w-full mt-4 px-4 md:hidden",
        "glass-panel rounded-3xl z-40 transform-gpu",
        MENU_TRANSITION,
        "will-change-[opacity,transform]",
        isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none",
    ].join(" ");

    const handleToggleOff = () => onToggle(false);

    const handleLinkClick = (item: NavItem) => () => {
        if (item.id === "projects") {
            try {
                sessionStorage.setItem("fromNav", "true");
            } catch (error) {
                console.error("Error accessing sessionStorage:", error);
            }
        }
        handleToggleOff();
    };

    const handleNavigateClick = (item: NavItem) => () => {
        onNavigate(item.id);
        handleToggleOff();
    };

    return (
        <div className={containerClasses} aria-hidden={!isMenuOpen}>
            <nav aria-label="Mobile navigation" className="p-2">
                <ul className="flex flex-col gap-1">
                    {navItems.map((item) => {
                        const linkClassName = `${ITEM_BASE_CLASSES} ${HOVER_CLASSES} ${textColorClass}`;
                        const itemClassName = `${ITEM_ANIMATION_BASE} ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                            }`;

                        return (
                            <li key={item.id} className={itemClassName}>
                                {item.href ? (
                                    <Link href={item.href} onClick={handleLinkClick(item)} className={linkClassName}>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleNavigateClick(item)}
                                        className={linkClassName}
                                        aria-label={`Navigate to ${item.label}`}
                                    >
                                        {item.label}
                                    </button>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
