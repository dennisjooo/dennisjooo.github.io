"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
    Cloud,
    fetchSimpleIcons,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
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

const renderCustomIcon = (icon: SimpleIcon) => renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
});

export type DynamicCloudProps = {
    iconSlugs: string[];
    customIcons?: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;
};

type IconData = {
    simpleIcons: Record<string, SimpleIcon>;
    allIcon: Record<string, { title: string; hex: string; slug: string; }>;
};

const IconCloud: React.FC<DynamicCloudProps> = ({ iconSlugs, customIcons }) => {
    const [icons, setIcons] = useState<IconData>({
        simpleIcons: {},
        allIcon: {}
    });

    useEffect(() => {
        fetchSimpleIcons({ slugs: iconSlugs }).then(setIcons);
    }, [iconSlugs]);

    const renderedIcons = useMemo(() => {
        return Object.values(icons.simpleIcons).map((icon: SimpleIcon) => renderCustomIcon(icon));
    }, [icons]);

    const customRenderedIcons = useMemo(() => {
        return Object.entries(customIcons || {}).map(([name, Icon]) => (
            <Icon key={name} style={{ fontSize: 42 }} />
        ));
    }, [customIcons]);

    return (
        <Cloud {...cloudProps}>
            {[
                ...(renderedIcons?.length ? renderedIcons : [<div key="no-icons">No icons to display</div>]),
                ...customRenderedIcons
            ]}
        </Cloud>
    );
};

export default IconCloud;