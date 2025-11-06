"use client";

import Link from "next/link";
import { NavItem } from "@/data/navbarContent";

interface MobileMenuProps {
    navItems: NavItem[];
    isMenuOpen: boolean;
    onNavigate: (sectionId: string) => void;
    onToggle: (isOpen: boolean) => void;
}

export const MobileMenu = ({
    navItems,
    isMenuOpen,
    onNavigate,
    onToggle,
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
                            className="block w-full px-4 py-3 text-xs font-medium uppercase tracking-[0.3em] text-zinc-100 transition-colors duration-300 ease-in-out hover:bg-white/10"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <button
                            onClick={() => {
                                onNavigate(item.id);
                                onToggle(false);
                            }}
                            className="w-full px-4 py-3 text-xs font-medium uppercase tracking-[0.3em] text-zinc-100 transition-colors duration-300 ease-in-out hover:bg-white/10"
                        >
                            {item.label}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    </div>
);
