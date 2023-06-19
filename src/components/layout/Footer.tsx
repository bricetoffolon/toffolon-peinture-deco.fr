import React from "react";

import NextLink from "next/link";

import {Box, Text, Stack, Flex} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            bg={"#108BDD"}
            padding={{
                base:"3%",
                sm: "2%",
            }}
            as={"footer"}
        >
            <Flex alignItems={"center"} justifyContent={"center"}>
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
                    <Text as={"b"}>
                        Toffolon © 2023
                    </Text>
                    <NextLink
                        href={"mention-legal"}
                    >
                        Mention Légales
                    </NextLink>
                    <NextLink
                        href={"notre-entreprise.tsx"}
                    >
                        Notre entreprise
                    </NextLink>
                    <NextLink
                        href={"/prestations"}
                    >
                        Nos Prestations
                    </NextLink>
                    <NextLink
                        href={"/realisations"}
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
        </Box>
    );
}