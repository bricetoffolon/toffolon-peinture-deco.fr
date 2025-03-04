import React from 'react';

import {
    Flex,
    Spacer,
    IconButton,
    Icon,
    Button,
    Image,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack,
    Drawer,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { FiMenu, FiX } from 'react-icons/fi';

import PageButton from '@/components/layout/Button/PageButton';

function NavBar(): React.JSX.Element {
    const { isOpen, onToggle, onClose } = useDisclosure();

    return (
        <>
            <Flex
                as="nav"
                shadow="base"
                p={4}
                align="center"
                justify="space-between"
                bg="white"
                w="100%"
            >
                <Flex alignItems={'left'} maxW={{ base: '30%', md: '20%', xl: '10%' }}>
                    <NextLink href="/" passHref>
                        <Button
                            transition="transform 0.3s"
                            _hover={{ transform: 'scale(1.1)' }}
                            _active={{ transform: 'scale(0.9)' }}
                            variant="link"
                        >
                            <Image
                                src="https://toffolon-website.s3.eu-west-3.amazonaws.com/Toffolon-Icon.png"
                                alt="Logo"
                            />
                        </Button>
                    </NextLink>
                </Flex>
                <Spacer />
                <Flex
                    display={{
                        base: 'none',
                        xl: 'flex',
                    }}
                >
                    <PageButton />
                </Flex>
                <Flex
                    display={{
                        base: 'flex',
                        xl: 'none',
                    }}
                    alignItems="center"
                    ml="1%"
                    mb="1%"
                >
                    <IconButton
                        aria-label="Open menu"
                        size="lg"
                        mr="2"
                        mt={2}
                        icon={!isOpen ? <Icon as={FiMenu} /> : <Icon as={FiX} />}
                        onClick={onToggle}
                    />
                </Flex>
            </Flex>

            <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="center">
                            <PageButton />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default NavBar;
