interface Link {
    url: string;
    text: string;
}

interface ProjectLinksProps {
    links: Link[];
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
    return (
        <nav className="mt-10 flex flex-wrap gap-4">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] text-zinc-100 transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    );
}