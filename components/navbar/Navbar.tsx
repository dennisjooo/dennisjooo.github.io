"use client";

import { BurgerButton } from "@/components/navbar/BurgerButton";
import { DesktopMenu } from "@/components/navbar/DesktopMenu";
import { MobileMenu } from "@/components/navbar/MobileMenu";
import { navItems } from "@/data/navbarContent";
import { useNavbarState } from "@/lib/hooks/useNavbarState";

const Navbar = () => {
    const {
        scrolled,
        isMenuOpen,
        handleNavigation,
        setIsMenuOpen,
        bgClass,
        navWidth,
        shadowClass,
    } = useNavbarState();

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
                    <BurgerButton isMenuOpen={isMenuOpen} onToggle={setIsMenuOpen} />
                    <DesktopMenu navItems={navItems} scrolled={scrolled} onNavigate={handleNavigation} />
                </div>
                <MobileMenu
                    navItems={navItems}
                    isMenuOpen={isMenuOpen}
                    onNavigate={handleNavigation}
                    onToggle={setIsMenuOpen}
                />
            </div>
        </nav>
    );
};

export default Navbar;
