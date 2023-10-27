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
            <Flex alignItems={"center"} justifyContent={"center"} mb={"0.5%"}>
                <Stack
                    direction={{
                        base: 'column',
                        xl: 'row'
                    }}
                    spacing={{
                        base: 2,
                        md:6
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
                <Text as={"b"} textShadow={"2px 2px 4px rgba(0,0,0,0.4)"}>
                    Toffolon © 2023
                </Text>
            </Flex>
        </Box>
    );
}