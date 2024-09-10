"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { BurgerButton, DesktopMenu, MobileMenu } from './NavbarComponents';
import { navItems } from '../data/navbarContent';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeroSection, setIsHeroSection] = useState(true);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('home');
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                setIsHeroSection(window.scrollY < heroBottom);
            } else {
                setIsHeroSection(false);
            }
            setScrolled(window.scrollY > 20);
        };

        handleScroll(); // Check initial position
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const handleNavigation = (sectionId: string) => {
        if (pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(`/#${sectionId}`);
        }
        setIsMenuOpen(false);
    };

    const bgClass = !isHeroSection || scrolled || isMenuOpen ? 'bg-black bg-opacity-90' : 'bg-transparent';
    const navWidth = !isHeroSection || scrolled ? 'w-11/12 lg:w-3/4 xl:w-2/3' : 'w-11/12 lg:w-5/6';

    return (
        <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${navWidth}`}>
            <div className={`
                relative ${bgClass} 
                rounded-2xl md:rounded-full
                ${(!isHeroSection || scrolled) && !isMenuOpen ? 'shadow-lg' : ''}
                transition-all duration-300 ease-in-out overflow-hidden
            `}>
                <div className="flex justify-between items-center px-4 py-3">
                    <BurgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    <DesktopMenu navItems={navItems} scrolled={scrolled} handleNavigation={handleNavigation} />
                </div>
                <MobileMenu navItems={navItems} isMenuOpen={isMenuOpen} handleNavigation={handleNavigation} />
            </div>
        </nav>
    );
};

export default Navbar;