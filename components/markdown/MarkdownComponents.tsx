"use client";

import type { ComponentPropsWithoutRef } from "react";
import { Components } from "react-markdown";
import { CodeBlock, type CodeProps } from "./CodeBlock";

export const markdownComponents: Components = {
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
    p: ({ children }) => <p className="mb-4 text-white">{children}</p>,
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-white">{children}</em>,
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4 text-gray-300">
            {children}
        </blockquote>
    ),

    // Lists
    ul: ({ children }) => (
        <ul className="list-disc list-inside mb-4 text-white space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal list-inside mb-4 text-white space-y-1">{children}</ol>
    ),
    li: ({ children }) => <li className="text-white">{children}</li>,

    // Code
    code: ({ inline, children, className }: CodeProps) => {
        const codeString = String(children);

        const isInlineCode =
            inline === true ||
            (!className && !codeString.includes("\n") && codeString.length < 100);

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
                <table className="min-w-full">{children}</table>
            </div>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="bg-gray-800 border-b border-gray-700">{children}</thead>
    ),
    tbody: ({ children }) => (
        <tbody className="divide-y divide-gray-700/50">{children}</tbody>
    ),
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
        <th className="px-6 py-4 text-left font-bold text-white text-sm tracking-wide">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="px-6 py-4 text-gray-100 text-sm font-medium">{children}</td>
    ),

    // Media
    img: ({ src, alt, title, ...rest }: ComponentPropsWithoutRef<"img">) => {
        if (!src) {
            return null;
        }

        return (
            <figure className="my-8">
                <img
                    src={src}
                    alt={alt ?? ''}
                    loading="lazy"
                    className="w-full h-auto rounded-lg border border-gray-700/50 shadow-lg"
                    {...rest}
                />
                {title ? (
                    <figcaption className="mt-2 text-center text-sm text-neutral-400">
                        {title}
                    </figcaption>
                ) : null}
            </figure>
        );
    },
    video: ({
        src,
        controls,
        autoPlay,
        loop,
        muted,
        children,
        poster,
        title,
        ...rest
    }: ComponentPropsWithoutRef<"video">) => {
        if (!src && !children) {
            return null;
        }

        const showControls = controls ?? true;

        return (
            <figure className="my-8">
                <video
                    className="w-full rounded-lg border border-gray-700/50 shadow-lg"
                    controls={showControls}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    poster={poster}
                    {...rest}
                >
                    {src ? <source src={src} /> : null}
                    {children}
                </video>
                {title ? (
                    <figcaption className="mt-2 text-center text-sm text-neutral-400">
                        {title}
                    </figcaption>
                ) : null}
            </figure>
        );
    },
    iframe: ({
        src,
        title,
        width,
        height,
        allow,
        allowFullScreen,
        ...rest
    }: ComponentPropsWithoutRef<"iframe">) => {
        if (!src) {
            return null;
        }

        return (
            <div className="my-8">
                <div className="relative w-full overflow-hidden rounded-lg border border-gray-700/50 shadow-lg">
                    <div className="aspect-video">
                        <iframe
                            src={src}
                            title={title}
                            width={width}
                            height={height}
                            allow={allow}
                            allowFullScreen={allowFullScreen}
                            className="w-full h-full"
                            loading="lazy"
                            {...rest}
                        />
                    </div>
                </div>
            </div>
        );
    },
    audio: ({
        src,
        controls,
        autoPlay,
        loop,
        muted,
        children,
        title,
        ...rest
    }: ComponentPropsWithoutRef<"audio">) => {
        if (!src && !children) {
            return null;
        }

        const showControls = controls ?? true;

        return (
            <figure className="my-8">
                <audio
                    className="w-full"
                    controls={showControls}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    {...rest}
                >
                    {src ? <source src={src} /> : null}
                    {children}
                </audio>
                {title ? (
                    <figcaption className="mt-2 text-center text-sm text-neutral-400">
                        {title}
                    </figcaption>
                ) : null}
            </figure>
        );
    },
};
