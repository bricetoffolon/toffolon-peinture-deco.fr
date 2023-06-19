import React from "react";

import {Button, Icon} from "@chakra-ui/react";

import NextLink from "next/link";

import { FaPaintBrush, FaClipboardCheck, FaInfoCircle } from "react-icons/fa";
import ContactButton from "@/components/layout/Button/contactButton";

function PageButton(): any {
    return (
        <>
            <NextLink
                href={"/notre-entreprise"}
                passHref
            >
                <Button
                    variant={"ghost"}
                    _hover={{
                        bg: "#007ed840",
                        shadow: "base"
                    }}
                    leftIcon={<Icon as={FaInfoCircle} color={"#007ed8"}/>}
                >
                    Notre entreprise
                </Button>
            </NextLink>
            <NextLink
                href={"/prestations"}
                passHref
            >
                <Button
                    variant={"ghost"}
                    _hover={{
                        bg: "#007ed840",
                        shadow: "base"
                    }}
                    leftIcon={<Icon as={FaPaintBrush} color={"#007ed8"}/>}
                >
                    Nos prestations
                </Button>
            </NextLink>
            <NextLink
                href={"/realisations"}
                passHref
            >
                <Button
                    variant={"ghost"}
                    _hover={{
                        bg: "#007ed840",
                        shadow: "base",
                    }}
                    leftIcon={<Icon as={FaClipboardCheck} color={"#007ed8"}/>}
                >
                    Nos réalisations
                </Button>
            </NextLink>
            <ContactButton />
        </>
    );
}

export default PageButton