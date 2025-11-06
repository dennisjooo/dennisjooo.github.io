import React from "react";
import { Dock } from "@/components/Dock";
import { contactLinks } from "@/data/contactContent";
import { DockIcon } from "@/components/DockIcon";

const Contacts: React.FC = () => (
    <section id="contact" className="relative flex flex-col items-center px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]" />
        <div className="container relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-300">
                Let&apos;s connect
            </h2>
            <p className="mt-4 max-w-xl text-sm text-zinc-400 md:text-base">
                Coffee-fueled brainstorm? Need a collaborator? Or just want to send a meme? My digital dock is always open.
            </p>
            <Dock className="my-8">
                {contactLinks.map(({ href, ariaLabel, icon }) => (
                    <DockIcon key={ariaLabel} href={href} ariaLabel={ariaLabel} icon={icon} />
                ))}
            </Dock>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                © Dennis Jonathan {new Date().getFullYear()}
            </p>
        </div>
    </section>
);

export default Contacts;
