import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects & Certifications | Dennis' Portfolio",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 