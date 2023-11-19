import React from 'react';

import { motion } from 'framer-motion';

export default function Section({ children }: { children: React.JSX.Element }): React.JSX.Element {
    return (
        <motion.div
            initial={{
                x: '1vw', // set 100vw to 95vw
            }}
            whileInView={{
                x: 0,
            }}
        >
            {children}
        </motion.div>
    );
}
