'use client';

import { useEffect, useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white shadow-[0_10px_40px_-20px_rgba(255,255,255,0.6)] backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/15"
                    aria-label="Back to top"
                >
                    <BsArrowUpCircle size={22} />
                </button>
            )}
        </>
    );
};

export default BackToTop; 