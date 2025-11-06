'use client';

import React from "react";
import { motion } from "framer-motion";
import { Dock } from "@/components/Dock";
import { contactLinks } from "@/data/contactContent";
import { DockIcon } from "@/components/DockIcon";
import GradientUnderline from "@/components/GradientUnderline";

const Contacts: React.FC = () => {
    return (
        <section id="contact" className="flex flex-col items-center bg-white dark:bg-black text-gray-900 dark:text-white px-8">
            <motion.div
                className="w-full max-w-md h-[2px] mt-12 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full"
                style={{
                    filter: "drop-shadow(0 0 8px rgba(129, 140, 248, 0.6))"
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            <h2 className="mt-8 text-xl md:text-2xl font-semibold text-center text-gray-900 dark:text-white">
                <GradientUnderline delay={0.3}>
                    Reach Me Here.
                </GradientUnderline>
            </h2>
        <p className="mt-4 text-lg md:text-md text-gray-600 dark:text-gray-400 text-center max-w-2xl leading-relaxed">
            Let&apos;s talk shop, job offers, or whatever you&apos;re building next, and swap stories interesting stories about tech and life in general.
        </p>
        <Dock className="my-6">
            {contactLinks.map(({ href, ariaLabel, icon }) => (
                <DockIcon key={ariaLabel} href={href} ariaLabel={ariaLabel} icon={icon} />
            ))}
        </Dock>
        <p className="text-sm text-gray-500 dark:text-gray-600 mb-8">© Dennis Jonathan {new Date().getFullYear()}</p>
        </section>
    );
};

export default Contacts;
