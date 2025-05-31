import { CloudGradient } from '../types/cloud';
import { CLOUD_COLORS } from '../constants/cloudConstants';

export const generateRandomClouds = (count: number): CloudGradient[] => {
    return Array.from({ length: count }, () => ({
        type: Math.random() > 0.5 ? 'circle' : 'ellipse',
        x: Math.floor(Math.random() * 85) + 10, // 10-95%
        y: Math.floor(Math.random() * 85) + 10, // 10-95%
        color: CLOUD_COLORS[Math.floor(Math.random() * CLOUD_COLORS.length)],
        opacity: (Math.random() * 0.3) + 0.15, // 0.15-0.45
        size: (Math.random() * 20) + 45, // 45-65%
    }));
};

export const generateGradients = (cloudArray: CloudGradient[]): string => {
    return cloudArray
        .map(cloud => `radial-gradient(${cloud.type} at ${cloud.x}% ${cloud.y}%, ${cloud.color.replace('rgb', 'rgba').replace(')', `, ${cloud.opacity})`)
            } 0%, transparent ${cloud.size}%)`)
        .join(',\n');
}; 