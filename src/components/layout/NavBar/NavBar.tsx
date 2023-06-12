import React, {useState} from "react";

import {
    ButtonGroup,
    Flex,
    Box,
    Spacer,
    IconButton,
    Image,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import PageButton from "@/components/layout/NavBar/PageButton";

function NavBar(): any {
    const [display, changeDisplay] = useState('none')


    return (
        <Flex>
            <Flex
                top={"1rem"}
                right={"1rem"}
                margin={"1%"}
                align={"center"}
            >
                {/*<Heading*/}
                {/*    margin={"1%"}*/}
                {/*>*/}
                {/*    Toffolon*/}
                {/*</Heading>*/}
                <Box
                    w={"20%"}
                >
                <Image
                    align={"center"}
                    src={"https://toffolon-website.s3.eu-west-3.amazonaws.com/Toffolon-Icon.png"}
                />
                </Box>
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
                icon={<HamburgerIcon />}
                onClick={() => changeDisplay(display == 'none' ? 'flex' : 'none')}
                display={['flex', 'flex', 'none', 'none']}
            />

            <Flex
                display={display}
                bgColor="gray.50"
                zIndex={20}
                m={"1%"}
                h="100vh"
                w='100vw'
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                align={"center"}
            >
                <IconButton
                    aria-label={"Close menu"}
                    icon={<CloseIcon />}
                    onClick={() => changeDisplay('none')}
                />
                <PageButton />
            </Flex>
        </Flex>
    );
}

export default NavBar;