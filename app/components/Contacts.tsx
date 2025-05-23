import React from "react";
import { Dock } from "./Dock";
import { contactLinks } from "../../data/contactContent";
import { DockIcon } from "./DockIcon";

const Contacts: React.FC = () => (
    <section id="contact" className="flex flex-col items-center bg-black text-white">
        <h2 className="text-xl font-semibold mt-12 text-center">Feel free to reach me here.</h2>
        <Dock className="my-6">
            {contactLinks.map(({ href, ariaLabel, icon }) => (
                <DockIcon key={ariaLabel} href={href} ariaLabel={ariaLabel} icon={icon} />
            ))}
        </Dock>
        <p className="text-sm text-gray-500 mb-8">© Dennis Jonathan {new Date().getFullYear()}</p>
    </section>
);

export default Contacts;
