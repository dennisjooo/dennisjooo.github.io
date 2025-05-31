import React, { useState, useEffect } from 'react';
import { CloudGradient } from './lib/types/cloud';
import { generateRandomClouds } from './lib/utils/cloudUtils';
import { BASE_GRADIENT, CLOUD_ANIMATIONS } from './lib/constants/cloudConstants';
import CloudLayer from './lib/CloudLayer';

const CloudBackground: React.FC = () => {
    const [clouds, setClouds] = useState<CloudGradient[]>([]);
    const [overlayerClouds, setOverlayerClouds] = useState<CloudGradient[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setClouds(generateRandomClouds(10));
        setOverlayerClouds(generateRandomClouds(5));
    }, []);

    if (!isClient) {
        return (
            <div
                className="absolute inset-0"
                style={{
                    background: BASE_GRADIENT,
                    zIndex: -1
                }}
            />
        );
    }

    return (
        <>
            <CloudLayer clouds={clouds} />
            <CloudLayer clouds={overlayerClouds} isOverlay />
            <style jsx>{`
                ${CLOUD_ANIMATIONS.base}
                ${CLOUD_ANIMATIONS.overlay}
                ${CLOUD_ANIMATIONS.reducedMotion}
            `}</style>
        </>
    );
};

export default CloudBackground; 