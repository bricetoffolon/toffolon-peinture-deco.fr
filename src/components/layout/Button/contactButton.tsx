import React from "react";

import NextLink from "next/link";

import { Button, Icon } from "@chakra-ui/react";

import { FaEnvelope } from "react-icons/fa";

export default function ContactButton({fontSize}) {
    return (
        <NextLink
            href={"/contact"}
            passHref
        >
            <Button
                bg={"#108BDD"}
                shadow={"base"}
                leftIcon={fontSize ? null : <Icon as={FaEnvelope} />}
                _hover={{
                    bg: "#007ed840",
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