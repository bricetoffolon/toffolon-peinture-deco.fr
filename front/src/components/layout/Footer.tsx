import React from "react";

import NextLink from "next/link";

import { Box, Text, Stack, Flex } from "@chakra-ui/react";

export default function Footer(): React.JSX.Element {
    return (
        <Box
            bg={"brand.500"}
            padding={{
                base:"3%",
                sm: "2%",
            }}
            as={"footer"}
        >
            <Flex justifyContent={"center"} alignItems={"center"} mb={"0.5%"}>
                <Stack
                    direction={"row"}
                    spacing={{
                        base: 3,
                        md:6
                    }}
                    wrap={{
                        base: "wrap",
                        xl: "nowrap"
                    }}
                    justifyContent={{
                        base: "center",
                        xl: "flex-start"
                    }}
                >
                    <NextLink
                        href={"mention-legales"}
                    >
                        Mention Légales
                    </NextLink>
                    <NextLink
                        href={"notre-entreprise"}
                    >
                        Notre entreprise
                    </NextLink>
                    <NextLink
                        href={"/nos-prestations"}
                    >
                        Nos Prestations
                    </NextLink>
                    <NextLink
                        href={"/nos-realisations"}
                    >
                        Nos Réalisations
                    </NextLink>
                    <NextLink
                        href={"/contact"}
                    >
                        Nous Contacter
                    </NextLink>
                </Stack>
            </Flex>
            <Flex
                justifyContent={"center"}
            >
                <Text mt={{
                    base: "5%",
                    xl: "1%"
                }} as={"b"} textShadow={"2px 2px 4px rgba(0,0,0,0.4)"}>
                    Toffolon © 2023
                </Text>
            </Flex>
        </Box>
    );
}