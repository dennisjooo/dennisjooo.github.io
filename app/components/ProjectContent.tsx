import ReactMarkdown from 'react-markdown';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface ProjectContentProps {
    content: string;
}

const MarkdownComponents = {
    p: ({ children, ...props }: React.HTMLProps<HTMLParagraphElement>) => (
        <p className="mb-4 text-white" {...props}>{children}</p>
    ),
    code: ({ inline, children, ...props }: { inline?: boolean } & React.HTMLProps<HTMLElement>) =>
        inline ? (
            <code className="bg-gray-800 rounded px-1" {...props}>{children}</code>
        ) : (
            <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code {...props}>{children}</code>
            </div>
        )
};

const renderLatexBlock = (content: string, index: number) => {
    const math = content.slice(2, -2).trim();
    return <BlockMath key={index} math={math} />;
};

const renderLatexInline = (content: string, index: number) => {
    const math = content.slice(1, -1).trim();
    return <InlineMath key={index} math={math} />;
};

const renderMarkdown = (content: string, index: number) => (
    <ReactMarkdown key={index} components={MarkdownComponents}>
        {content}
    </ReactMarkdown>
);

export default function ProjectContent({ content }: ProjectContentProps) {
    const contentParts = content.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/);

    const renderedContent = contentParts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
            return renderLatexBlock(part, index);
        }
        if (part.startsWith('$') && part.endsWith('$')) {
            return renderLatexInline(part, index);
        }
        return renderMarkdown(part, index);
    });

    return (
        <article className="prose prose-sm sm:prose-base md:prose-lg max-w-none prose-invert">
            {renderedContent}
        </article>
    );
}