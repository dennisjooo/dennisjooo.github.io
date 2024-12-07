interface ProjectContentProps {
    content: string;
}

export default function ProjectContent({ content }: ProjectContentProps) {
    return (
        <article className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
            {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
            ))}
        </article>
    );
}