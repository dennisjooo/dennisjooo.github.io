import { useEffect } from 'react';

export const useScrollEffect = (ref: React.RefObject<HTMLElement>) => {
    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const heroBottom = ref.current.offsetTop + ref.current.offsetHeight;
                const isHeroSection = window.scrollY < heroBottom;
                document.body.classList.toggle('is-hero-section', isHeroSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ref]);
};
