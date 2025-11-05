/**
 * Creates a URL-friendly slug from a title string
 * @param title The string to convert into a URL slug
 * @returns A lowercase string with special characters replaced by hyphens and trimmed of leading/trailing hyphens
 * @example
 * createUrlSlug("Hello World!") // returns "hello-world"
 * createUrlSlug("This & That") // returns "this-and-that"
 */
export const createUrlSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};
