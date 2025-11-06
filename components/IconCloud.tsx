"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
    Cloud,
    fetchSimpleIcons,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
} from "react-icon-cloud";

const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
    },
};

const renderColoredIcon = (icon: SimpleIcon, color: string) =>
    renderSimpleIcon({
        icon: { ...icon, hex: color },
        size: 40,
        bgHex: "transparent",
        fallbackHex: color,
        minContrastRatio: 0,
        aProps: {
            onClick: (e: React.MouseEvent) => e.preventDefault(),
        },
    });

interface IconCloudProps {
    iconSlugs: string[];
    customIcons?: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;
    colorMode?: "light" | "dark" | "auto";
    lightColor?: string;
    darkColor?: string;
}

const IconCloud: React.FC<IconCloudProps> = ({
    iconSlugs,
    customIcons,
    colorMode = "dark",
    lightColor = "#111111",
    darkColor = "#ffffff",
}) => {
    const [simpleIcons, setSimpleIcons] = useState<Record<string, SimpleIcon>>({});
    const [resolvedColor, setResolvedColor] = useState<string>(() =>
        colorMode === "light" ? lightColor : darkColor
    );

    useEffect(() => {
        fetchSimpleIcons({ slugs: iconSlugs }).then((data) => {
            setSimpleIcons(data.simpleIcons);
        });
    }, [iconSlugs]);

    useEffect(() => {
        if (colorMode === "auto") {
            if (typeof window === "undefined") {
                setResolvedColor(darkColor);
                return;
            }

            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const applyColor = () => {
                setResolvedColor(mediaQuery.matches ? darkColor : lightColor);
            };

            applyColor();
            mediaQuery.addEventListener("change", applyColor);

            return () => {
                mediaQuery.removeEventListener("change", applyColor);
            };
        }

        setResolvedColor(colorMode === "dark" ? darkColor : lightColor);
    }, [colorMode, darkColor, lightColor]);

    const allIcons = useMemo(() => {
        const renderedSimpleIcons = Object.values(simpleIcons).map((icon) =>
            renderColoredIcon(icon, resolvedColor)
        );

        const renderedCustomIcons = Object.entries(customIcons || {}).map(([name, Icon]) => (
            <Icon key={name} style={{ fontSize: 42, color: resolvedColor }} />
        ));

        return [...renderedSimpleIcons, ...renderedCustomIcons];
    }, [simpleIcons, customIcons, resolvedColor]);

    return (
        <Cloud {...cloudProps}>
            {allIcons.length > 0 ? allIcons : [<div key="no-icons">No icons to display</div>]}
        </Cloud>
    );
};

export default IconCloud;