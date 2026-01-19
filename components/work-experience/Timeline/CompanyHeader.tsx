"use client";

import React from 'react';
import Image from 'next/image';

interface CompanyHeaderProps {
    companyName: string;
    logo: string;
}

/**
 * Mobile version of the company header - inline layout
 */
export const CompanyHeaderMobile: React.FC<CompanyHeaderProps> = ({ companyName, logo }) => {
    return (
        <div className="md:hidden flex items-center gap-4 mb-6">
            <div className="relative w-10 h-10 overflow-hidden shrink-0">
                <Image
                    src={logo}
                    alt={companyName}
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="text-2xl font-playfair italic font-bold text-foreground leading-tight">
                {companyName}
            </h3>
        </div>
    );
};

/**
 * Desktop version of the company header - sticky sidebar layout
 */
export const CompanyHeaderDesktop: React.FC<CompanyHeaderProps> = ({ companyName, logo }) => {
    return (
        <div className="hidden md:flex flex-col items-end gap-6">
            {/* Logo */}
            <div className="relative w-16 h-16 opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                <Image
                    src={logo}
                    alt={companyName}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Company Name */}
            <h3 className="text-4xl lg:text-5xl font-playfair italic font-bold text-foreground leading-none text-right">
                {companyName}
            </h3>
        </div>
    );
};
