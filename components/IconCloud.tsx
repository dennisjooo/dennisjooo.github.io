"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
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

const renderColoredIcon = (icon: SimpleIcon, color: string, bgColor: string) =>
    renderSimpleIcon({
        icon: { ...icon, hex: color },
        size: 40,
        bgHex: bgColor,
        fallbackHex: color,
        minContrastRatio: 0,
        aProps: {
            onClick: (e: React.MouseEvent) => e.preventDefault(),
        },
    });

interface IconCloudProps {
    iconSlugs: string[];
    customIcons?: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;
    iconColor?: string;
}

const IconCloud: React.FC<IconCloudProps> = ({
    iconSlugs,
    customIcons,
    iconColor = '#000000'
}) => {
    const [simpleIcons, setSimpleIcons] = useState<Record<string, SimpleIcon>>({});
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        fetchSimpleIcons({ slugs: iconSlugs }).then((data) => {
            setSimpleIcons(data.simpleIcons);
        });
    }, [iconSlugs]);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = mounted ? currentTheme === 'dark' : true;
    const bgColor = isDark ? '#000000' : '#ffffff';
    const defaultIconColor = isDark ? '#ffffff' : '#000000';

    const allIcons = useMemo(() => {
        const renderedSimpleIcons = Object.values(simpleIcons).map((icon) =>
            renderColoredIcon(icon, iconColor === '#000000' ? defaultIconColor : iconColor, bgColor)
        );

        const renderedCustomIcons = Object.entries(customIcons || {}).map(([name, Icon]) => (
            <Icon key={name} style={{ fontSize: 42, color: iconColor === '#000000' ? defaultIconColor : iconColor }} />
        ));

        return [...renderedSimpleIcons, ...renderedCustomIcons];
    }, [simpleIcons, customIcons, iconColor, defaultIconColor, bgColor]);

    return (
        <Cloud {...cloudProps}>
            {allIcons.length > 0 ? allIcons : [<div key="no-icons">No icons to display</div>]}
        </Cloud>
    );
};

export default IconCloud;