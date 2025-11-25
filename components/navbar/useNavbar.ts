"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// Constants
const SCROLL_THRESHOLD = 20;

export const useClientReady = (): boolean => {
    const [isClientReady, setIsClientReady] = useState(false);

    useEffect(() => {
        setIsClientReady(true);
    }, []);

    return isClientReady;
};

interface HeroSectionState {
    isHeroSection: boolean;
    scrolled: boolean;
}

export const useHeroSectionState = (isClientReady: boolean, pathname: string): HeroSectionState => {
    const [state, setState] = useState<HeroSectionState>({
        isHeroSection: true,
        scrolled: false,
    });

    useEffect(() => {
        if (!isClientReady) return;

        const handleScroll = () => {
            const heroSection = document.getElementById("home");
            const isHeroSection = heroSection
                ? window.scrollY < heroSection.offsetTop + heroSection.offsetHeight
                : false;

            setState({
                isHeroSection,
                scrolled: window.scrollY > SCROLL_THRESHOLD,
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClientReady, pathname]);

    return state;
};

export const useScrollToSavedSection = (isClientReady: boolean, pathname: string) => {
    useEffect(() => {
        if (!isClientReady || pathname !== "/") return;

        try {
            const sectionToScroll = sessionStorage.getItem("scrollToSection");
            if (sectionToScroll) {
                document.getElementById(sectionToScroll)?.scrollIntoView({ behavior: "smooth" });
                sessionStorage.removeItem("scrollToSection");
            }
        } catch (error) {
            console.error("Error accessing sessionStorage:", error);
        }
    }, [isClientReady, pathname]);
};

interface UseSectionNavigationParams {
    isClientReady: boolean;
    pathname: string;
    closeMenu: () => void;
}

export const useSectionNavigation = (
    { isClientReady, pathname, closeMenu }: UseSectionNavigationParams
): ((sectionId: string) => void) => {
    const router = useRouter();

    return useCallback(
        (sectionId: string) => {
            if (!isClientReady) return;

            if (pathname === "/") {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            } else {
                try {
                    sessionStorage.setItem("scrollToSection", sectionId);
                    router.push("/");
                } catch (error) {
                    console.error("Error accessing sessionStorage:", error);
                    router.push("/");
                }
            }

            closeMenu();
        },
        [closeMenu, isClientReady, pathname, router],
    );
};

interface NavbarStylesParams {
    isHeroSection: boolean;
    scrolled: boolean;
    isMenuOpen: boolean;
    pathname: string;
}

interface NavbarStyles {
    bgClass: string;
    navWidth: string;
    textColorClass: string;
}

export const useNavbarStyles = (
    { isHeroSection, scrolled, isMenuOpen, pathname }: NavbarStylesParams
): NavbarStyles =>
    useMemo(() => {
        // Use glass-panel when scrolled, menu open, or not in hero section
        const bgClass = !isHeroSection || scrolled || isMenuOpen ? "glass-panel" : "bg-transparent";

        // Wider navbar in hero section when not scrolled
        const navWidth =
            isHeroSection && !scrolled && pathname === "/"
                ? "w-11/12 lg:w-5/6"
                : "w-11/12 lg:w-3/4 xl:w-2/3";

        // Consistent text color across all states
        const textColorClass = "text-gray-900 dark:text-white";

        return { bgClass, navWidth, textColorClass };
    }, [isHeroSection, isMenuOpen, pathname, scrolled]);
