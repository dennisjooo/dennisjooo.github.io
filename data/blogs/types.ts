export interface Blog {
    title: string;
    description: string;
    imageUrl?: string;
    blogPost: string;
    date: string;
    type: 'project' | 'blog';
    wordCount?: number;
    readTime?: number;
    links?: Array<{
        text: string;
        url: string;
    }>;
} 