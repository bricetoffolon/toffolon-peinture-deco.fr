import React from 'react';

import {
    Flex,
    Spacer,
    IconButton,
    Icon,
    Button,
    Image,
    Collapse,
    useDisclosure,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { FiMenu, FiX } from 'react-icons/fi';

import { useRouter } from 'next/router';
import PageButton from '@/components/layout/Button/PageButton';

function NavBar(): React.JSX.Element {
    const { isOpen, onToggle } = useDisclosure();

    const router = useRouter();

    return (
        <>
            <Flex shadow="base">
                <Flex top="1rem" right="1rem" margin="1%" alignItems="center">
                    <NextLink href="/" passHref>
                        <Button
                            opacity={router.pathname === '/' ? '0' : '1'}
                            w="30%"
                            mt="1%"
                            transition="transform 0.3s"
                            _hover={{
                                transform: 'scale(1.1)',
                            }}
                            _active={{
                                transform: 'scale(0.8)',
                            }}
                            isActive={!router.pathname}
                            variant="link"
                        >
                            <Flex>
                                <Image
                                    alignItems="center"
                                    src="https://toffolon-website.s3.eu-west-3.amazonaws.com/Toffolon-Icon.png"
                                />
                            </Flex>
                        </Button>
                    </NextLink>
                    <Flex
                        margin="1%"
                        display={{
                            base: 'none',
                            xl: 'flex',
                        }}
                        right="0"
                    >
                        <PageButton />
                    </Flex>
                </Flex>
                <Spacer />
                <Flex
                    display={{
                        base: 'flex',
                        xl: 'none',
                    }}
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

            <Collapse in={isOpen} unmountOnExit>
                <Flex
                    bg="gray.200"
                    padding="2%"
                    mt="1%"
                    boxShadow="outline"
                    direction="column"
                    alignItems="center"
                >
                    <PageButton />
                </Flex>
            </Collapse>
        </>
    );
}

export default NavBar;
