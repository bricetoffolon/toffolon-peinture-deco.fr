import React from "react";

import {
    ButtonGroup,
    Flex,
    Spacer,
    IconButton,
    Icon,
    Button,
    Image,
    Collapse,
    useDisclosure,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { FiMenu, FiX } from 'react-icons/fi';

import PageButton from "@/components/layout/NavBar/PageButton";

function NavBar(): any {
    const {isOpen, onToggle} = useDisclosure();


    return (
        <>
        <Flex
            shadow={"base"}
        >
            <Flex
                top={"1rem"}
                right={"1rem"}
                margin={"1%"}
                align={"center"}
            >
                <NextLink
                    href={"/"}
                    passHref
                >
                    <Button
                        w={{
                            base:"30%",
                            md:"20%"
                        }}
                        variant={""}
                        mt={"1%"}
                    >
                        <Image
                            align={"center"}
                            src={"https://toffolon-website.s3.eu-west-3.amazonaws.com/Toffolon-Icon.png"}
                        />
                    </Button>
                </NextLink>
                <Flex
                    margin={"1%"}
                    display={['none', 'none', 'flex','flex']}
                    right={"0"}
                    position={"fixed"}
                >
                    <ButtonGroup
                        margin={"1%"}
                    >
                        <PageButton />
                    </ButtonGroup>
                </Flex>
            </Flex>
            <Spacer />
            <Flex
                display={['flex', 'flex', 'none','none']}
            >
                <IconButton
                    aria-label={"Open menu"}
                    size={"lg"}
                    mr={"2"}
                    mt={2}
                    icon={!isOpen ? <Icon as={FiMenu} /> : <Icon as={FiX} />}
                    _hover={{
                        bg: "#007ed840",
                    }}
                    onClick={onToggle}
                />
            </Flex>
        </Flex>

        <Collapse
            in={isOpen}
            unmountOnExit
        >
            <Flex
                bg={"gray.200"}
                padding={"2%"}
                mt={"1%"}
                boxShadow={"outline"}
                direction={"column"}
                alignItems={"center"}
                gap={3}
            >
                <PageButton />
            </Flex>
        </Collapse>
        </>
    );
}

export default NavBar;