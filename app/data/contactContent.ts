export interface ContactLink {
    href: string;
    ariaLabel: string;
    icon: string;
}

export const contactLinks: ContactLink[] = [
    { href: "mailto:dennisjonathan78@gmail.com", ariaLabel: "Email", icon: "bi-envelope" },
    { href: "https://github.com/dennisjooo", ariaLabel: "GitHub", icon: "bi-github" },
    { href: "https://www.linkedin.com/in/dennisjooo/", ariaLabel: "LinkedIn", icon: "bi-linkedin" },
];