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

const itemBaseClasses =
    "block w-full rounded-2xl px-5 py-3 text-sm lowercase tracking-wide transition-colors duration-300 ease-in-out";
const hoverClasses = "hover:bg-gray-900/5 dark:hover:bg-white/10";

export const MobileMenu = ({
    navItems,
    isMenuOpen,
    onNavigate,
    onToggle,
    textColorClass,
}: MobileMenuProps) => {
    const containerClasses = [
        "md:hidden origin-top overflow-hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-[26rem] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2",
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
            <nav
                aria-label="Mobile navigation"
                className="mx-4 mb-4 rounded-3xl border border-gray-200/40 bg-white/80 p-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-neutral-800"
            >
                <ul className="flex flex-col gap-1 text-center">
                    {navItems.map((item) => {
                        const className = `${itemBaseClasses} ${hoverClasses} ${textColorClass}`;

                        return (
                            <li key={item.id}>
                                {item.href ? (
                                    <Link href={item.href} onClick={handleLinkClick(item)} className={className}>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button type="button" onClick={handleNavigateClick(item)} className={className}>
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
