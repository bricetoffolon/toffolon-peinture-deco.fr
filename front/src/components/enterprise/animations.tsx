import React from 'react';

import { motion } from 'framer-motion';

interface options {
    opacity?: number;
    transition?: { duration: number };
    scale?: number;
    rotate?: number;
    x?: number | string;
    y?: number | string;
    filter?: string;
}

interface motionProps {
    initial: options;
    inView: options;
}

export const animateIntroduceIcon = ({ timing }: { timing: number }): motionProps => {
    return {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            y: -10,
        },
        inView: {
            opacity: 1,
            transition: { duration: timing },
            y: 0,
            filter: 'blur(0px)',
        },
    };
};

export const animateText = ({ timing }: { timing: number }): motionProps => {
    return {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            y: -10,
        },
        inView: {
            opacity: 1,
            transition: { duration: timing },
            y: 0,
            filter: 'blur(0px)',
        },
    };
};

export const animateLayout = ({ timing }: { timing: number }): motionProps => {
    return {
        initial: {
            x: '1vw',
        },
        inView: {
            transition: { duration: timing },
            x: 0,
            filter: 'blur(0px)',
        },
    };
};

export const animateButton = ({ timing }: { timing: number }): motionProps => {
    return {
        initial: {
            x: '1vw',
            scale: 0.8,
        },
        inView: {
            transition: { duration: timing },
            x: 0,
            filter: 'blur(0px)',
            scale: 1,
        },
    };
};

export function AddAnimation({
    children,
    motionOptions,
}: {
    children: React.JSX.Element;
    motionOptions: motionProps;
}): React.JSX.Element {
    return (
        <motion.div initial={motionOptions.initial} whileInView={motionOptions.inView}>
            {children}
        </motion.div>
    );
}
