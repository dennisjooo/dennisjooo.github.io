import React from "react";
import { Dock } from "./Dock";
import { contactLinks } from "../data/contactContent";
import { DockIcon } from "./DockIcon";

const Contacts: React.FC = () => (
    <section id="contact" className="flex flex-col items-center bg-black text-white">
        <Dock className="mb-4">
            {contactLinks.map(({ href, ariaLabel, icon }) => (
                <DockIcon key={ariaLabel} href={href} ariaLabel={ariaLabel} icon={icon} />
            ))}
        </Dock>
        <p className="text-sm text-gray-500 mb-8">© Dennis Jonathan {new Date().getFullYear()}</p>
    </section>
);

export default Contacts;
