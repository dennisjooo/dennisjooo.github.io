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
                    className="fixed bottom-8 right-8 p-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300 z-50"
                    aria-label="Back to top"
                >
                    <BsArrowUpCircle size={24} />
                </button>
            )}
        </>
    );
};

export default BackToTop; 