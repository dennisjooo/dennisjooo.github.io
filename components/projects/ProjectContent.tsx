'use client';

import ReactMarkdown from 'react-markdown';
import 'katex/dist/katex.min.css';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { markdownComponents } from '@/components/markdown/MarkdownComponents';
import { PhotoProvider } from 'react-photo-view';

interface ProjectContentProps {
    content: string;
}

export default function ProjectContent({ content }: ProjectContentProps) {
    return (
        <article className="prose prose-sm sm:prose-base md:prose-lg max-w-none prose-gray dark:prose-invert">
            <PhotoProvider maskOpacity={0.85} speed={() => 280}>
                <ReactMarkdown
                    components={markdownComponents}
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                >
                    {content}
                </ReactMarkdown>
            </PhotoProvider>
        </article>
    );
}
