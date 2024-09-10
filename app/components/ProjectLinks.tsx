interface Link {
    url: string;
    text: string;
}

interface ProjectLinksProps {
    links: Link[];
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
    return (
        <nav className="mt-8 flex flex-wrap gap-4">
            {links.map((link, index) => (
                <ProjectLink key={index} {...link} />
            ))}
        </nav>
    );
}

function ProjectLink({ url, text }: Link) {
    return (
        <a
            href={url}
            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-300 hover:text-black transition-colors text-sm sm:text-base md:text-lg"
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    );
}