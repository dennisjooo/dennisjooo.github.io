'use client';

import React from 'react';
import { Dock } from '@/components/Dock';
import { DockIcon } from '@/components/DockIcon';
import GradientUnderline from '@/components/shared/GradientUnderline';
import { contactLinks } from '@/data/contactContent';

const Contacts: React.FC = () => (
    <section id="contact" className="flex flex-col items-center py-24 bg-white dark:bg-black text-gray-900 dark:text-white px-8">
        <div className="w-full max-w-md h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-border)] to-transparent" />
        <h2 className="mt-12 text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
            <GradientUnderline delay={0.3}>
                Reach Me Here.
            </GradientUnderline>
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl leading-relaxed">
            Let&apos;s talk shop, job offers, or whatever you&apos;re building next, and swap stories interesting stories about tech and life in general.
        </p>
        <Dock className="my-8">
            {contactLinks.map(({ href, ariaLabel, icon }) => (
                <DockIcon key={ariaLabel} href={href} ariaLabel={ariaLabel} icon={icon} />
            ))}
        </Dock>
    </section>
);

export default Contacts;
