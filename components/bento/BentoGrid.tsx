import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => (
    <div
        className={cn(
            'grid gap-6 auto-rows-fr',
            className
        )}
    >
        {children}
    </div>
);
