"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { DEFAULT_DISTANCE, DEFAULT_MAGNIFICATION } from "./constants";
import type { DockIconProps } from "./DockIcon";

const dockVariants = cva(
    "mx-auto w-max h-[58px] p-2 flex gap-2 rounded-2xl border border-gray-300 dark:border-gray-700 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md"
);

export interface DockProps extends VariantProps<typeof dockVariants> {
    className?: string;
    magnification?: number;
    distance?: number;
    direction?: "top" | "middle" | "bottom";
    children: React.ReactNode;
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
    (
        {
            className,
            children,
            magnification = DEFAULT_MAGNIFICATION,
            distance = DEFAULT_DISTANCE,
            direction = "bottom",
            ...props
        },
        ref
    ) => {
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
                            ...child.props,
                        })
                        : child
                )}
            </motion.div>
        );
    }
);

Dock.displayName = "Dock";

export { Dock, dockVariants };
