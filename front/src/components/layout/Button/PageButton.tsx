import React from "react";

import { Button, Icon } from "@chakra-ui/react";

import NextLink from "next/link";

import { FaPaintBrush, FaClipboardCheck, FaInfoCircle } from "react-icons/fa";

import ContactButton from "@/components/layout/Button/contactButton";

function PageButton(): React.JSX.Element {
    return (
        <>
            <NextLink
                href={"/notre-entreprise"}
                passHref
            >
                <Button
                    variant={"ghost"}
                    _hover={{
                        bg: "brand.250",
                        shadow: "base"
                    }}
                    leftIcon={<Icon as={FaInfoCircle} color={"brand.500"}/>}
                >
                    Notre entreprise
                </Button>
            </NextLink>
            <NextLink
                href={"/nos-prestations"}
                passHref
            >
                <Button
                    variant={"ghost"}
                    _hover={{
                        bg: "brand.250",
                        shadow: "base"
                    }}
                    leftIcon={<Icon as={FaPaintBrush} color={"brand.500"}/>}
                >
                    Nos prestations
                </Button>
            </NextLink>
            <NextLink
                href={"/nos-realisations"}
                passHref
            >
                <Button
                    variant={"ghost"}
                    _hover={{
                        bg: "brand.250",
                        shadow: "base",
                    }}
                    leftIcon={<Icon as={FaClipboardCheck} color={"brand.500"}/>}
                >
                    Nos réalisations
                </Button>
            </NextLink>
            <ContactButton />
        </>
    );
}

export default PageButton