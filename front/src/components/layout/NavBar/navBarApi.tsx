import React from 'react';
import {
    Button,
    Flex,
    Icon,
    Image,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaHome } from 'react-icons/fa';
import {useRouter} from "next/router";
import {useAuth} from "@/context/AuthContext";

export default function NavBarApi(): React.JSX.Element {
    const { user, authLogout } = useAuth();
    const router = useRouter();

    const handleSubmit = async () => {
        try {
            await authLogout();
            router.push('/redondo/login');
        } catch (error) {
            console.error(error);
        }
    }

    return (
            <Flex shadow="base">
                <Flex>
                    <Flex
                        margin="1%"
                        display={{
                            base: 'none',
                            xl: 'flex',
                        }}
                        right="0"
                        alignItems="center"
                    >
                        <NextLink href="/" passHref>
                            <Button
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
                                        maxW="37%"
                                    />
                                </Flex>
                            </Button>
                        </NextLink>
                        {
                            user !== null ? (
                                <Flex>
                                    <NextLink href="/redondo" passHref>
                                        <Button
                                            variant="ghost"
                                            _hover={{
                                                bg: 'brand.250',
                                                shadow: 'base',
                                            }}
                                            leftIcon={<Icon as={FaHome} color="brand.500" />}
                                        >
                                            Home
                                        </Button>
                                    </NextLink>
                                    <Button
                                        colorScheme={"red"}
                                        _hover={{
                                            color: 'red.200',
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Sign Out
                                    </Button>
                                </Flex>
                            ) : null
                        }
                    </Flex>
                </Flex>
            </Flex>
    );
}
