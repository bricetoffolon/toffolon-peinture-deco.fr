import React from 'react';

import NextLink from "next/link";

import { Button, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";


export default function Section1(): React.JSX.Element {
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
                h={"100vh"}
                w={"100vw"}
                templateRows={'repeat(3, 1fr)'}
                templateColumns={'repeat(1, 1fr)'}
                gap={4}
                padding={"1%"}
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <Flex
                        alignItems={"center"}
                        direction={"column"}
                        gap={6}
                    >
                        <Heading
                            size={{
                                base: "xl",
                                md: "2xl",
                                xl: "3xl"
                            }}
                            color={"brand.500"}
                            fontWeight={"bold"}
                            textShadow={"2px 2px 4px rgba(0,0,0,0.4)"}
                        >
                            Entreprise de peinture
                        </Heading>
                        <Text
                            fontSize={"lg"}
                            as={"b"}
                            color={"brand.500"}
                            fontWeight={"bold"}
                            textShadow={"2px 2px 4px rgba(0,0,0,0.4)"}
                        >
                            Un savoir-faire depuis 1960
                        </Text>
                    </Flex>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Flex
                        justifyContent={"center"}
                    >
                        <NextLink
                            href={"/notre-entreprise"}
                            passHref
                        >
                            <Button
                                variant={"outline"}
                                color={"brand.500"}
                                size={"lg"}
                                boxShadow={'2xl'}
                                textShadow={"2px 2px 4px rgba(0,0,0,0.4)"}
                            >
                                En savoir plus
                            </Button>
                        </NextLink>
                    </Flex>
                </GridItem>
            </Grid>
        </motion.div>
    );
}