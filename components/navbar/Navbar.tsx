"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { BurgerButton } from "@/components/navbar/BurgerButton";
import { DesktopMenu } from "@/components/navbar/DesktopMenu";
import { MobileMenu } from "@/components/navbar/MobileMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems } from "@/data/navbarContent";
import {
    useClientReady,
    useHeroSectionState,
    useNavbarStyles,
    useScrollToSavedSection,
    useSectionNavigation,
} from "@/components/navbar/useNavbar";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname() ?? "/";
    const isClientReady = useClientReady();
    const { scrolled, isHeroSection } = useHeroSectionState(isClientReady, pathname);

    useScrollToSavedSection(isClientReady, pathname);

    const handleNavigation = useSectionNavigation({
        isClientReady,
        pathname,
        closeMenu: () => setIsMenuOpen(false),
    });

    const { bgClass, navWidth, shadowClass, textColorClass } = useNavbarStyles({
        isHeroSection,
        scrolled,
        isMenuOpen,
        pathname,
    });

    return (
        <nav
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${navWidth}`}
        >
            <div
                className={`
                relative ${bgClass} 
                rounded-2xl md:rounded-full
                ${shadowClass}
                transition-all duration-300 ease-in-out overflow-hidden
            `}
            >
                <div className="flex justify-between items-center px-4 py-3 min-h-[3rem]">
                    <BurgerButton
                        isMenuOpen={isMenuOpen}
                        onToggle={(nextIsMenuOpen) => setIsMenuOpen(nextIsMenuOpen)}
                        textColorClass={textColorClass}
                    />
                    <DesktopMenu
                        navItems={navItems}
                        scrolled={scrolled}
                        onNavigate={handleNavigation}
                        textColorClass={textColorClass}
                    />
                    <div className="ml-2">
                        <ThemeToggle textColorClass={textColorClass} />
                    </div>
                </div>
                <MobileMenu
                    navItems={navItems}
                    isMenuOpen={isMenuOpen}
                    onNavigate={handleNavigation}
                    onToggle={(nextIsMenuOpen) => setIsMenuOpen(nextIsMenuOpen)}
                    textColorClass={textColorClass}
                />
            </div>
        </nav>
    );
};

export default Navbar;
