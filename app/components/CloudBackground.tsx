import React, { useState, useEffect } from 'react';

interface CloudGradient {
    type: 'circle' | 'ellipse';
    x: number;
    y: number;
    color: string;
    opacity: number;
    size: number;
}

const generateRandomClouds = (count: number): CloudGradient[] => {
    return Array.from({ length: count }, () => ({
        type: Math.random() > 0.5 ? 'circle' : 'ellipse',
        x: Math.floor(Math.random() * 85) + 10, // 10-95%
        y: Math.floor(Math.random() * 85) + 10, // 10-95%
        color: [
            'rgb(255, 99, 97)',   // vibrant red
            'rgb(157, 78, 106)',  // rose purple
            'rgb(116, 45, 101)',  // deep rose
            'rgb(91, 37, 134)',   // bright purple
            'rgb(74, 24, 90)',    // deep purple
            'rgb(67, 44, 106)',   // muted purple
        ][Math.floor(Math.random() * 6)],
        opacity: (Math.random() * 0.3) + 0.15, // 0.15-0.45
        size: (Math.random() * 20) + 45, // 45-65%
    }));
};

const CloudBackground: React.FC = () => {
    const [clouds, setClouds] = useState<CloudGradient[]>([]);
    const [overlayerClouds, setOverlayerClouds] = useState<CloudGradient[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setClouds(generateRandomClouds(10));
        setOverlayerClouds(generateRandomClouds(5));
    }, []);

    const generateGradients = (cloudArray: CloudGradient[]) => {
        return cloudArray.map(cloud =>
            `radial-gradient(${cloud.type} at ${cloud.x}% ${cloud.y}%, ${cloud.color.replace('rgb', 'rgba').replace(')', `, ${cloud.opacity})`)} 0%, transparent ${cloud.size}%)`
        ).join(',\n');
    };

    const baseGradient = `
        linear-gradient(180deg, 
            rgba(44, 35, 89, 0.99) 0%, 
            rgba(67, 44, 106, 0.99) 30%,
            rgba(74, 24, 90, 0.99) 60%, 
            rgba(31, 24, 66, 1) 100%
        )
    `;

    if (!isClient) {
        return (
            <div
                className="absolute inset-0"
                style={{
                    background: baseGradient,
                    zIndex: -1
                }}
            />
        );
    }

    return (
        <>
            <div
                className="absolute inset-0"
                style={{
                    background: `${generateGradients(clouds)},\n${baseGradient}`,
                    animation: 'cloudFloatBase 30s ease-in-out infinite',
                    zIndex: -2,
                    transformOrigin: 'center'
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background: generateGradients(overlayerClouds),
                    animation: 'cloudFloatOverlay 20s ease-in-out infinite',
                    mixBlendMode: 'soft-light',
                    zIndex: -1,
                    transformOrigin: 'center'
                }}
            />
            <style jsx>{`
                @keyframes cloudFloatBase {
                    0% {
                        background-position: 0% 0%;
                        transform: scale(1) rotate(0deg);
                    }
                    25% {
                        background-position: 4% 3%;
                        transform: scale(1.03) rotate(1deg);
                    }
                    50% {
                        background-position: -3% 4%;
                        transform: scale(1) rotate(-1deg);
                    }
                    75% {
                        background-position: 3% -3%;
                        transform: scale(1.02) rotate(1.5deg);
                    }
                    100% {
                        background-position: 0% 0%;
                        transform: scale(1) rotate(0deg);
                    }
                }

                @keyframes cloudFloatOverlay {
                    0% {
                        background-position: 0% 0%;
                        transform: scale(1.02) rotate(0deg);
                    }
                    33% {
                        background-position: -4% -3%;
                        transform: scale(1) rotate(-2deg);
                    }
                    66% {
                        background-position: 3% -4%;
                        transform: scale(1.04) rotate(1deg);
                    }
                    100% {
                        background-position: 0% 0%;
                        transform: scale(1.02) rotate(0deg);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .absolute {
                        animation: none !important;
                        transform: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default CloudBackground; 