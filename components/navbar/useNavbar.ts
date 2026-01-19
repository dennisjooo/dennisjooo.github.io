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
                document.getElementById(sectionToScroll)?.scrollIntoView({ behavior: "auto" });
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

    // Track the current section when scrolling on the homepage
    useEffect(() => {
        if (!isClientReady || pathname !== "/") return;

        const handleScroll = () => {
            const sections = ["home", "about", "skills", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section is in view (top is above middle of viewport)
                    if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
                        try {
                            sessionStorage.setItem("currentSection", section);
                        } catch (error) {
                            console.error("Error saving current section:", error);
                        }
                        break;
                    }
                }
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClientReady, pathname]);

    return useCallback(
        (sectionId: string) => {
            if (!isClientReady) return;

            if (pathname === "/") {
                // If on homepage and clicking home, scroll to top
                if (sectionId === "home") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                try {
                    // If clicking home from another page, go to the last visited section
                    if (sectionId === "home") {
                        const lastSection = sessionStorage.getItem("currentSection");
                        sessionStorage.setItem("scrollToSection", lastSection || "home");
                    } else {
                        sessionStorage.setItem("scrollToSection", sectionId);
                    }
                    // Clear any saved scroll position for home so it doesn't conflict with our explicit jump
                    sessionStorage.removeItem("scroll-pos-/");
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
        const textColorClass = "text-foreground";

        return { bgClass, navWidth, textColorClass };
    }, [isHeroSection, isMenuOpen, pathname, scrolled]);
