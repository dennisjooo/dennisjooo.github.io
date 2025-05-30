import ReactMarkdown from 'react-markdown';
import 'katex/dist/katex.min.css';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Components } from 'react-markdown';
import { useState } from 'react';

interface ProjectContentProps {
    content: string;
}

interface CodeProps {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const CodeBlock = ({ children, className }: CodeProps) => {
    const [copied, setCopied] = useState(false);
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : '';
    const codeString = String(children).replace(/\n$/, '');

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(codeString);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className="not-prose my-6">
            <div className="bg-gray-900 border border-gray-700/50 rounded-lg overflow-hidden shadow-lg">
                {/* macOS-style window header */}
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700/50 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
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
                    <button
                        onClick={copyToClipboard}
                        className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-600/50 rounded transition-all duration-200 border border-gray-600/30 hover:border-gray-500/50"
                        title="Copy code"
                    >
                        {copied ? (
                            <>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                </svg>
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={language || 'text'}
                        PreTag="div"
                        className="!m-0 !p-4 !bg-transparent text-sm leading-relaxed"
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

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
        const codeString = String(children);

        // Better inline code detection
        const isInlineCode = inline === true || (!className && !codeString.includes('\n') && codeString.length < 100);

        if (isInlineCode) {
            return (
                <code className="bg-gray-700/50 rounded px-2 py-1 text-sm font-mono text-orange-300 border border-gray-600/30">
                    {children}
                </code>
            );
        }

        return <CodeBlock className={className}>{children}</CodeBlock>;
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