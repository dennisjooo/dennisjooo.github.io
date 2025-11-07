import { cn } from "@/lib/utils";

type CopyrightNoticeProps = {
    className?: string;
};

export function CopyrightNotice({ className }: CopyrightNoticeProps) {
    return (
        <p className={cn("text-sm text-gray-700 dark:text-gray-300", className)}>
            © Dennis Jonathan {new Date().getFullYear()}
        </p>
    );
}

