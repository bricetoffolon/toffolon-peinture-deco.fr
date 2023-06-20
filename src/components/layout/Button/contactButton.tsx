import React from "react";

import NextLink from "next/link";

import { Button, Icon } from "@chakra-ui/react";

import { FaEnvelope } from "react-icons/fa";

export default function ContactButton({fontSize}: {fontSize?: string}): React.JSX.Element {
    return (
        <NextLink
            href={"/contact"}
            passHref
        >
            <Button
                bg={"brand.500"}
                shadow={"base"}
                leftIcon={fontSize ? undefined : <Icon as={FaEnvelope} />}
                _hover={{
                    bg: "brand.250",
                    shadow: "base"
                }}
                fontSize={fontSize}
                padding={fontSize}
            >
                Nous contacter
            </Button>
        </NextLink>
    );
}