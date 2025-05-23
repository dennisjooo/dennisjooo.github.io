"use client";

import React, { useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform, MotionValue, HTMLMotionProps } from "framer-motion";
import { cn } from "./lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
    className?: string;
    magnification?: number;
    distance?: number;
    direction?: "top" | "middle" | "bottom";
    children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
    "mx-auto w-max h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
    ({
        className,
        children,
        magnification = DEFAULT_MAGNIFICATION,
        distance = DEFAULT_DISTANCE,
        direction = "bottom",
        ...props
    }, ref) => {
        const mouseX = useMotionValue(Infinity);

        return (
            <motion.div
                ref={ref}
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                {...props}
                className={cn(dockVariants({ className }), {
                    "items-start": direction === "top",
                    "items-center": direction === "middle",
                    "items-end": direction === "bottom",
                })}
            >
                {React.Children.map(children, (child) => 
                    React.isValidElement(child) && React.isValidElement<DockIconProps>(child)
                        ? React.cloneElement(child, { 
                            mouseX, 
                            magnification, 
                            distance,
                            ...child.props 
                          })
                        : child
                )}
            </motion.div>
        );
    }
);

Dock.displayName = "Dock";

interface DockIconProps extends Omit<HTMLMotionProps<"div">, "children"> {
    mouseX?: MotionValue<number>;
    magnification?: number;
    distance?: number;
    children: React.ReactNode;
}

const DockIcon: React.FC<DockIconProps> = ({ 
    mouseX, 
    magnification = DEFAULT_MAGNIFICATION, 
    distance = DEFAULT_DISTANCE, 
    className, 
    children, 
    ...props 
}) => {
    const iconRef = useRef<HTMLDivElement>(null);

    const fallbackMouseX = useMotionValue(0);
    const safeMouseX = mouseX || fallbackMouseX;

    const distanceCalc = useTransform(safeMouseX, (val: number) => {
        const bounds = iconRef.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    const width = useSpring(
        useTransform(distanceCalc, [-distance, 0, distance], [40, magnification, 40]),
        { mass: 0.1, stiffness: 150, damping: 12 }
    );

    return (
        <motion.div
            ref={iconRef}
            style={{ width }}
            className={cn(
                "flex aspect-square cursor-pointer items-center justify-center rounded-full",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
