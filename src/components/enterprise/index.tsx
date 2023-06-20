import React from "react";

import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

import { motion } from "framer-motion";

import {
    EnterpriseInformations,
    EnterpriseTitle
} from "@/components/enterprise/EnterpriseInformations";

import CertificationLayout from "@/components/enterprise/certificationsLayout";


export default function Enterprise(): React.JSX.Element{
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
            <Flex
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Heading
                    size={"3xl"}
                    margin={"2%"}
                >
                    <EnterpriseTitle />
                </Heading>
            </Flex>
            <Flex
                direction={{
                    base: 'column',
                    xl: 'row'
                }}
            >
                <Grid
                    h={"100vh"}
                    w={"100vw"}
                >
                    <GridItem
                        bg={"papayawhip"}
                    />
                </Grid>
                <Grid
                    h={{
                        base: "none",
                        xl: "100vh"
                    }}
                    w={"100vw"}
                >
                    <GridItem
                        padding={"2%"}
                    >
                        <Flex
                            mt={"2%"}
                            fontSize={{
                                base: 'sm',
                                xl: 'xl',
                                '2xl': "3xl"
                            }}
                            color={"brand.500"}
                            direction={"column"}
                            gap={6}
                        >
                            <EnterpriseInformations />
                        </Flex>
                        <CertificationLayout />
                    </GridItem>
                </Grid>
            </Flex>
        </motion.div>
    );
}