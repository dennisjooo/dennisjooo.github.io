"use client";

import { BsList, BsX } from "react-icons/bs";

interface BurgerButtonProps {
    isMenuOpen: boolean;
    onToggle: (isOpen: boolean) => void;
}

export const BurgerButton = ({ isMenuOpen, onToggle }: BurgerButtonProps) => (
    <button
        className="md:hidden text-white"
        onClick={() => onToggle(!isMenuOpen)}
        aria-label="Toggle menu"
    >
        {isMenuOpen ? <BsX size={24} /> : <BsList size={24} />}
    </button>
);
