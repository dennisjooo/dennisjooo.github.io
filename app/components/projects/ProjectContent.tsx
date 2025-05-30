import ReactMarkdown from 'react-markdown';
import 'katex/dist/katex.min.css';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Components } from 'react-markdown';

interface ProjectContentProps {
    content: string;
}

interface CodeProps {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const MarkdownComponents: Components = {
    // Headings
    h1: ({ children }) => (
        <h1 className="text-3xl font-bold mb-6 text-white border-b border-gray-600 pb-2">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-2xl font-bold mb-4 mt-8 text-white">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-xl font-bold mb-3 mt-6 text-white">
            {children}
        </h3>
    ),
    h4: ({ children }) => (
        <h4 className="text-lg font-bold mb-2 mt-4 text-white">
            {children}
        </h4>
    ),

    // Text elements
    p: ({ children }) => (
        <p className="mb-4 text-white">
            {children}
        </p>
    ),
    strong: ({ children }) => (
        <strong className="font-bold text-white">
            {children}
        </strong>
    ),
    em: ({ children }) => (
        <em className="italic text-white">
            {children}
        </em>
    ),
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4 text-gray-300">
            {children}
        </blockquote>
    ),

    // Lists
    ul: ({ children }) => (
        <ul className="list-disc list-inside mb-4 text-white space-y-1">
            {children}
        </ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal list-inside mb-4 text-white space-y-1">
            {children}
        </ol>
    ),
    li: ({ children }) => (
        <li className="text-white">
            {children}
        </li>
    ),

    // Code
    code: ({ inline, children, className }: CodeProps) => {
        const match = /language-(\w+)/.exec(className || '');
        const language = match ? match[1] : '';

        // Check if it's truly inline code (single backticks)
        const isInlineCode = inline || !String(children).includes('\n');

        if (isInlineCode && !language) {
            return (
                <code className="bg-gray-700/50 rounded px-2 py-1 text-sm font-mono text-orange-300 border border-gray-600/30">
                    {children}
                </code>
            );
        }

        return (
            <div className="not-prose my-6">
                <div className="bg-gray-900 border border-gray-700/50 rounded-lg overflow-hidden shadow-lg">
                    {/* macOS-style window header */}
                    <div className="bg-gray-800 px-4 py-2 border-b border-gray-700/50 flex items-center justify-between">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        {language && (
                            <span className="text-xs text-gray-400 font-mono">
                                {language}
                            </span>
                        )}
                    </div>
                    <div className="overflow-x-auto">
                        <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={language || 'text'}
                            PreTag="div"
                            className="!m-0 !p-4 !bg-transparent text-sm leading-relaxed"
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        );
    },
    pre: ({ children }) => <>{children}</>,

    // Tables
    table: ({ children }) => (
        <div className="not-prose my-8">
            <div className="overflow-hidden rounded-xl border border-gray-700/50 bg-black shadow-2xl">
                <table className="min-w-full">
                    {children}
                </table>
            </div>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="bg-gray-800 border-b border-gray-700">
            {children}
        </thead>
    ),
    tbody: ({ children }) => (
        <tbody className="divide-y divide-gray-700/50">
            {children}
        </tbody>
    ),
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
        <th className="px-6 py-4 text-left font-bold text-white text-sm tracking-wide">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="px-6 py-4 text-gray-100 text-sm font-medium">
            {children}
        </td>
    ),
};

export default function ProjectContent({ content }: ProjectContentProps) {
    return (
        <article className="prose prose-sm sm:prose-base md:prose-lg max-w-none prose-invert">
            <ReactMarkdown
                components={MarkdownComponents}
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}