"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export const useClientReady = () => {
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

export const useHeroSectionState = (isClientReady: boolean, pathname: string) => {
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
                scrolled: window.scrollY > 20,
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

export const useSectionNavigation = ({ isClientReady, pathname, closeMenu }: UseSectionNavigationParams) => {
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

export const useNavbarStyles = ({ isHeroSection, scrolled, isMenuOpen, pathname }: NavbarStylesParams) =>
    useMemo(() => {
        const bgClass =
            !isHeroSection || scrolled || isMenuOpen ? "bg-black bg-opacity-90" : "bg-transparent";

        const navWidth =
            isHeroSection && !scrolled && pathname === "/"
                ? "w-11/12 lg:w-5/6"
                : "w-11/12 lg:w-3/4 xl:w-2/3";

        const shadowClass = (!isHeroSection || scrolled) && !isMenuOpen ? "shadow-lg" : "";

        return { bgClass, navWidth, shadowClass };
    }, [isHeroSection, isMenuOpen, pathname, scrolled]);
