import Link from 'next/link';
import { NavItem } from '../../data/navbarContent';
import { BsList, BsX } from 'react-icons/bs';

interface NavButtonProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

interface MenuProps {
    navItems: NavItem[];
    handleNavigation: (sectionId: string) => void;
    scrolled?: boolean;
    isMenuOpen?: boolean;
    setIsMenuOpen?: (isOpen: boolean) => void;
}

export const BurgerButton: React.FC<NavButtonProps> = ({ isMenuOpen, setIsMenuOpen }) => (
    <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
    >
        {isMenuOpen ? <BsX size={24} /> : <BsList size={24} />}
    </button>
);

export const DesktopMenu: React.FC<MenuProps> = ({ navItems, scrolled, handleNavigation }) => (
    <ul className="hidden md:flex md:flex-row justify-around items-center w-full">
        {navItems.map((item) => (
            <li key={item.id} className="w-full md:w-auto">
                {item.href ? (
                    <Link
                        href={item.href}
                        className={`
                            w-full md:w-auto px-4 py-2 rounded-xl md:rounded-full 
                            transition-colors duration-300 ease-in-out text-white lowercase 
                            ${scrolled ? 'hover:bg-gray-700' : 'hover:bg-white hover:bg-opacity-20'}
                        `}
                    >
                        {item.label}
                    </Link>
                ) : (
                    <button
                        onClick={() => handleNavigation(item.id)}
                        className={`
                            w-full md:w-auto px-4 py-2 rounded-xl md:rounded-full 
                            transition-colors duration-300 ease-in-out text-white lowercase 
                            ${scrolled ? 'hover:bg-gray-700' : 'hover:bg-white hover:bg-opacity-20'}
                        `}
                    >
                        {item.label}
                    </button>
                )}
            </li>
        ))}
    </ul>
);

export const MobileMenu: React.FC<MenuProps> = ({ navItems, isMenuOpen, handleNavigation, setIsMenuOpen }) => (
    <div className={`
        md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
    `}>
        <ul className="flex flex-col items-center w-full py-2">
            {navItems.map((item) => (
                <li key={item.id} className="w-full text-center">
                    {item.href ? (
                        <Link
                            href={item.href}
                            onClick={() => {
                                if (item.id === 'projects') {
                                    sessionStorage.setItem('fromNav', 'true');
                                }
                                setIsMenuOpen?.(false);
                            }}
                            className="w-full px-4 py-2 text-white lowercase hover:bg-gray-700 transition-colors duration-300 ease-in-out block"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <button
                            onClick={() => {
                                handleNavigation(item.id);
                                setIsMenuOpen?.(false);
                            }}
                            className="w-full px-4 py-2 text-white lowercase hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                        >
                            {item.label}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    </div>
);
