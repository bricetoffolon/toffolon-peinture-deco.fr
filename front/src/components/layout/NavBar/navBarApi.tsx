import React from 'react';
import {
    Button,
    Flex,
    Icon,
    Image,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack,
    IconButton,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaHome } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { FiMenu, FiX } from 'react-icons/fi';

export default function NavBarApi(): React.JSX.Element {
    const { user, authLogout } = useAuth();
    const router = useRouter();
    const { isOpen, onToggle, onClose } = useDisclosure();

    const handleSubmit = async () => {
        try {
            await authLogout();
            router.push('/redondo/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Flex
            as="nav"
            shadow="base"
            p={4}
            align="center"
            justify="space-between"
            bg="white"
            w="100%"
        >
            {/* Logo and Home Button */}
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

            {/* Desktop Navigation */}
            <Flex display={{ base: 'none', md: 'flex' }} gap={4} align="center">
                {user && (
                    <>
                        <NextLink href="/redondo" passHref>
                            <Button
                                variant="ghost"
                                leftIcon={<Icon as={FaHome} color="brand.500" />}
                            >
                                Home
                            </Button>
                        </NextLink>
                        <Button
                            colorScheme="red"
                            _hover={{ color: 'red.200' }}
                            onClick={handleSubmit}
                        >
                            Sign Out
                        </Button>
                    </>
                )}
            </Flex>

            {/* Mobile Navigation Button */}
            {user && (
                <Flex display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        aria-label="Open menu"
                        size="lg"
                        mr="2"
                        mt={2}
                        icon={!isOpen ? <Icon as={FiMenu} /> : <Icon as={FiX} />}
                        onClick={onToggle}
                    />
                </Flex>
            )}

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="stretch">
                            <NextLink href="/redondo" passHref>
                                <Button
                                    w="100%"
                                    variant="ghost"
                                    leftIcon={<Icon as={FaHome} color="brand.500" />}
                                    onClick={onClose}
                                >
                                    Home
                                </Button>
                            </NextLink>
                            <Button
                                colorScheme="red"
                                _hover={{ color: 'red.200' }}
                                onClick={handleSubmit}
                            >
                                Sign Out
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}
