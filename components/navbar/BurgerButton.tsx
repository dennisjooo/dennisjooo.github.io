"use client";

import { BsList, BsX } from "react-icons/bs";

interface BurgerButtonProps {
    isMenuOpen: boolean;
    onToggle: (isOpen: boolean) => void;
}

export const BurgerButton = ({ isMenuOpen, onToggle }: BurgerButtonProps) => (
    <button
        className="md:hidden rounded-full border border-white/15 bg-white/[0.06] p-2 text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
        onClick={() => onToggle(!isMenuOpen)}
        aria-label="Toggle menu"
    >
        {isMenuOpen ? <BsX size={20} /> : <BsList size={20} />}
    </button>
);
