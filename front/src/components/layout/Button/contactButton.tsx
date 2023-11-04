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
                shadow={"xl"}
                leftIcon={fontSize ? undefined : <Icon as={FaEnvelope} />}
                _hover={{
                    bg: "brand.250",
                    shadow: "base",
                    color: "black",
                }}
                fontSize={fontSize}
                color={"white"}
                padding={fontSize}
                textShadow={"2px 2px 4px rgba(0,0,0,0.4)"}
            >
                Nous contacter
            </Button>
        </NextLink>
    );
}