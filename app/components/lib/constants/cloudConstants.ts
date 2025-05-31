export const CLOUD_COLORS = [
    'rgb(255, 99, 97)',   // vibrant red
    'rgb(157, 78, 106)',  // rose purple
    'rgb(116, 45, 101)',  // deep rose
    'rgb(91, 37, 134)',   // bright purple
    'rgb(74, 24, 90)',    // deep purple
    'rgb(67, 44, 106)',   // muted purple
] as const;

export const BASE_GRADIENT = `
    linear-gradient(180deg, 
        rgba(44, 35, 89, 0.99) 0%, 
        rgba(67, 44, 106, 0.99) 30%,
        rgba(74, 24, 90, 0.99) 60%, 
        rgba(31, 24, 66, 1) 100%
    )
`;

export const CLOUD_ANIMATIONS = {
    base: `
        @keyframes cloudFloatBase {
            0% {
                background-position: 0% 0%;
                transform: scale(1.1) rotate(0deg);
            }
            25% {
                background-position: 4% 3%;
                transform: scale(1.13) rotate(1deg);
            }
            50% {
                background-position: -3% 4%;
                transform: scale(1.1) rotate(-1deg);
            }
            75% {
                background-position: 3% -3%;
                transform: scale(1.12) rotate(1.5deg);
            }
            100% {
                background-position: 0% 0%;
                transform: scale(1.1) rotate(0deg);
            }
        }
    `,
    overlay: `
        @keyframes cloudFloatOverlay {
            0% {
                background-position: 0% 0%;
                transform: scale(1.12) rotate(0deg);
            }
            33% {
                background-position: -4% -3%;
                transform: scale(1.1) rotate(-2deg);
            }
            66% {
                background-position: 3% -4%;
                transform: scale(1.14) rotate(1deg);
            }
            100% {
                background-position: 0% 0%;
                transform: scale(1.12) rotate(0deg);
            }
        }
    `,
    reducedMotion: `
        @media (prefers-reduced-motion: reduce) {
            .absolute {
                animation: none !important;
                transform: scale(1.1) !important;
            }
        }
    `
} as const; 