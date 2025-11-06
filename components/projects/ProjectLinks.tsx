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
            className="inline-block bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors text-sm sm:text-base md:text-lg"
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    );
}