export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    blogPost: string;
    date: string;
    links: Array<{
        text: string;
        url: string;
    }>;
} 