import { Project } from "@/data/projects/types";

export const sortProjectsByDate = (projects: Project[]): Project[] =>
    [...projects].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

export const formatProjectDate = (dateString: string): string =>
    new Date(dateString).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

export const truncateProjectDescription = (description: string, maxLength = 120): string =>
    description.length <= maxLength
        ? description
        : `${description.slice(0, maxLength).trim()}...`;
