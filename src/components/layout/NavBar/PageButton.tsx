import React from "react";

import { Button } from "@chakra-ui/react";

import NextLink from "next/link";

function PageButton(): any {
    return (
        <>
            <NextLink
                href={"/prestations"}
                passHref
            >
                <Button
                    variant={"ghost"}
                    _hover={{
                        bg: "#007ed8"
                    }}
                >
                    Nos prestations
                </Button>
            </NextLink>
            <NextLink
                href={"/propos"}
                passHref
            >
                <Button
                    variant={"ghost"}
                    _hover={{
                        bg: "#007ed8"
                    }}
                >
                    A propos
                </Button>
            </NextLink>
            <NextLink
                href={"/contact"}
                passHref
            >
                <Button
                    bg={"#007ed8"}
                >
                    Nous contactez
                </Button>
            </NextLink>
        </>
    );
}

export default PageButton