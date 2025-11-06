"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavbarState {
    scrolled: boolean;
    isMenuOpen: boolean;
    isHeroSection: boolean;
    isMounted: boolean;
}

interface NavbarStyles {
    bgClass: string;
    navWidth: string;
    shadowClass: string;
}

interface UseNavbarStateReturn extends NavbarStyles {
    scrolled: boolean;
    isMenuOpen: boolean;
    handleNavigation: (sectionId: string) => void;
    setIsMenuOpen: (isOpen: boolean) => void;
}

export const useNavbarState = (): UseNavbarStateReturn => {
    const [state, setState] = useState<NavbarState>({
        scrolled: false,
        isMenuOpen: false,
        isHeroSection: true,
        isMounted: false,
    });

    const pathname = usePathname();
    const router = useRouter();

    const { isMounted, isHeroSection, scrolled, isMenuOpen } = state;

    useEffect(() => {
        setState((prev) => ({ ...prev, isMounted: true }));
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const handleScroll = () => {
            const heroSection = document.getElementById("home");
            const heroBottom = heroSection
                ? heroSection.offsetTop + heroSection.offsetHeight
                : 0;

            setState((prev) => ({
                ...prev,
                isHeroSection: heroSection ? window.scrollY < heroBottom : false,
                scrolled: window.scrollY > 20,
            }));
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMounted, pathname]);

    useEffect(() => {
        if (!isMounted || pathname !== "/") return;

        try {
            const sectionToScroll = sessionStorage.getItem("scrollToSection");
            if (!sectionToScroll) return;

            document.getElementById(sectionToScroll)?.scrollIntoView({ behavior: "smooth" });
            sessionStorage.removeItem("scrollToSection");
        } catch (error) {
            console.error("Error accessing sessionStorage:", error);
        }
    }, [isMounted, pathname]);

    const handleNavigation = useCallback(
        (sectionId: string) => {
            if (!isMounted) return;

            if (pathname === "/") {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            } else {
                try {
                    sessionStorage.setItem("scrollToSection", sectionId);
                } catch (error) {
                    console.error("Error accessing sessionStorage:", error);
                } finally {
                    router.push("/");
                }
            }

            setState((prev) => ({ ...prev, isMenuOpen: false }));
        },
        [isMounted, pathname, router]
    );

    const styles = useMemo<NavbarStyles>(() => {
        const isSolid = !isHeroSection || scrolled || isMenuOpen;
        const bgClass = isSolid
            ? "border border-white/15 bg-white/[0.08] backdrop-blur"
            : "border border-white/10 bg-white/[0.04] backdrop-blur";

        const navWidth =
            isHeroSection && !scrolled && pathname === "/"
                ? "w-11/12 lg:w-5/6"
                : "w-11/12 lg:w-3/4 xl:w-2/3";

        const shadowClass = (!isHeroSection || scrolled) && !isMenuOpen
            ? "shadow-[0_18px_45px_-28px_rgba(255,255,255,0.45)]"
            : "";

        return { bgClass, navWidth, shadowClass };
    }, [isHeroSection, isMenuOpen, pathname, scrolled]);

    const setIsMenuOpen = useCallback((isOpen: boolean) => {
        setState((prev) => ({ ...prev, isMenuOpen: isOpen }));
    }, []);

    return {
        scrolled,
        isMenuOpen,
        handleNavigation,
        setIsMenuOpen,
        ...styles,
    };
};
