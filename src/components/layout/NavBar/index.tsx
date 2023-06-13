import React from "react";

import {
    ButtonGroup,
    Flex,
    Spacer,
    IconButton,
    Button,
    Image,
    Collapse,
    Stack,
    Box,
    useDisclosure,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import PageButton from "@/components/layout/NavBar/PageButton";

function NavBar(): any {
    const {isOpen, onToggle} = useDisclosure();


    return (
        <>
        <Flex>
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
                        w={"20%"}
                        variant={"ghost"}
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
            <IconButton
                aria-label={"Open menu"}
                size={"lg"}
                mr={"2"}
                mt={2}
                icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />}
                onClick={onToggle}
            />
        </Flex>

        <Collapse
            in={isOpen}
            unmountOnExit
        >
            <Box
                bg={"gray.200"}
                align={"center"}
                padding={"2%"}
                mt={"1%"}
            >
                <Stack
                    direction={"column"}
                >
                    <PageButton />
                </Stack>
            </Box>
        </Collapse>
        </>
    );
}

export default NavBar;