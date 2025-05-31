export interface CloudGradient {
    type: 'circle' | 'ellipse';
    x: number;
    y: number;
    color: string;
    opacity: number;
    size: number;
}

export interface CloudLayerProps {
    clouds: CloudGradient[];
    isOverlay?: boolean;
} 