"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { BurgerButton, DesktopMenu, MobileMenu } from '@/components/navbar/NavbarComponents';
import { navItems } from '@/data/navbarContent';

interface NavbarState {
    scrolled: boolean;
    isMenuOpen: boolean;
    isHeroSection: boolean;
    isMounted: boolean;
}

const Navbar = () => {
    const [state, setState] = useState<NavbarState>({
        scrolled: false,
        isMenuOpen: false,
        isHeroSection: true,
        isMounted: false
    });
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setState(prev => ({ ...prev, isMounted: true }));
    }, []);

    useEffect(() => {
        if (!state.isMounted) return;

        const handleScroll = () => {
            const heroSection = document.getElementById('home');
            const isHeroSection = heroSection
                ? window.scrollY < (heroSection.offsetTop + heroSection.offsetHeight)
                : false;

            setState(prev => ({
                ...prev,
                isHeroSection,
                scrolled: window.scrollY > 20
            }));
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname, state.isMounted]);

    useEffect(() => {
        if (!state.isMounted) return;

        if (pathname === '/') {
            try {
                const sectionToScroll = sessionStorage.getItem('scrollToSection');
                if (sectionToScroll) {
                    document.getElementById(sectionToScroll)?.scrollIntoView({ behavior: 'smooth' });
                    sessionStorage.removeItem('scrollToSection');
                }
            } catch (error) {
                console.error('Error accessing sessionStorage:', error);
            }
        }
    }, [pathname, state.isMounted]);

    const handleNavigation = (sectionId: string) => {
        if (!state.isMounted) return;

        if (pathname === '/') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            try {
                sessionStorage.setItem('scrollToSection', sectionId);
                router.push('/');
            } catch (error) {
                console.error('Error accessing sessionStorage:', error);
                router.push('/');
            }
        }
        setState(prev => ({ ...prev, isMenuOpen: false }));
    };

    const getNavStyles = () => {
        const { isHeroSection, scrolled, isMenuOpen } = state;

        const bgClass = !isHeroSection || scrolled || isMenuOpen
            ? 'bg-black bg-opacity-90'
            : 'bg-transparent';

        const navWidth = (isHeroSection && !scrolled && pathname === '/')
            ? 'w-11/12 lg:w-5/6'
            : 'w-11/12 lg:w-3/4 xl:w-2/3';

        const shadowClass = (!isHeroSection || scrolled) && !isMenuOpen
            ? 'shadow-lg'
            : '';

        return { bgClass, navWidth, shadowClass };
    };

    const { bgClass, navWidth, shadowClass } = getNavStyles();

    return (
        <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${navWidth}`}>
            <div className={`
                relative ${bgClass} 
                rounded-2xl md:rounded-full
                ${shadowClass}
                transition-all duration-300 ease-in-out overflow-hidden
            `}>
                <div className="flex justify-between items-center px-4 py-3 min-h-[3rem]">
                    <BurgerButton
                        isMenuOpen={state.isMenuOpen}
                        setIsMenuOpen={(isMenuOpen) => setState(prev => ({ ...prev, isMenuOpen }))}
                    />
                    <DesktopMenu
                        navItems={navItems}
                        scrolled={state.scrolled}
                        handleNavigation={handleNavigation}
                    />
                </div>
                <MobileMenu
                    navItems={navItems}
                    isMenuOpen={state.isMenuOpen}
                    handleNavigation={handleNavigation}
                    setIsMenuOpen={(isMenuOpen) => setState(prev => ({ ...prev, isMenuOpen }))}
                />
            </div>
        </nav>
    );
};

export default Navbar;
