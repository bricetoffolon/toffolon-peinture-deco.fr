import React from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import { motion } from "framer-motion";

export default function Enterprise() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
                opacity: 1,
                translateY: -100
            }}
            transition={{
                duration: 1.5,
            }}
        >
            <Grid
                templateColumns={'repeat(2, 1fr)'}
                templateRows={'repeat(6, 1fr)'}
                h={"100vh"}
                w={"100vw"}
                gap={6}
            >
                <GridItem colSpan={1} rowSpan={3} bg={"tomato"}></GridItem>
                <GridItem colStart={1} colSpan={1} rowSpan={3} bg={"tomato"}></GridItem>
                <GridItem colStart={2} colSpan={1} rowSpan={1} rowStart={1} bg={"papayawhip"}></GridItem>
                <GridItem colStart={2} colSpan={1} rowSpan={5} rowStart={2} bg={"papayawhip"}></GridItem>
            </Grid>
        </motion.div>
    );
}