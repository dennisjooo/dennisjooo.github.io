import React from 'react';

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', color = 'gray-900' }) => {
    const sizeClasses = {
        small: 'h-6 w-6',
        medium: 'h-12 w-12',
        large: 'h-16 w-16',
    };

    return (
        <div
            className={`animate-spin rounded-full border-t-2 border-b-2 ${sizeClasses[size]} border-${color}`}
        ></div>
    );
};

export default Spinner;