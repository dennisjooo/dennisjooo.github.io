import React, { useState, useEffect } from 'react';
import { CloudLayerProps } from './types/cloud';
import { generateGradients } from './utils/cloudUtils';
import { BASE_GRADIENT } from './constants/cloudConstants';

const CloudLayer: React.FC<CloudLayerProps> = ({ clouds, isOverlay = false }) => {
    const [staticGradients, setStaticGradients] = useState('');

    useEffect(() => {
        setStaticGradients(generateGradients(clouds));
    }, [clouds]);

    const baseStyles: React.CSSProperties = {
        position: 'absolute',
        inset: '-5%',
        width: '110%',
        height: '110%',
        transformOrigin: 'center',
        transform: 'scale(1.1)',
    };

    if (isOverlay) {
        return (
            <div
                className="absolute inset-0 overflow-hidden"
                style={{
                    ...baseStyles,
                    background: staticGradients,
                    animation: 'cloudFloatOverlay 20s ease-in-out infinite',
                    mixBlendMode: 'soft-light',
                    zIndex: -1,
                }}
            />
        );
    }

    return (
        <div
            className="absolute inset-0 overflow-hidden"
            style={{
                ...baseStyles,
                background: `${staticGradients},
${BASE_GRADIENT}`,
                animation: 'cloudFloatBase 30s ease-in-out infinite',
                zIndex: -2,
            }}
        />
    );
};

export default CloudLayer; 