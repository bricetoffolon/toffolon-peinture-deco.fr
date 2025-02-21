import React, { useState } from 'react';
import {
    Button,
    Collapse,
    Flex,
    Icon,
    Image,
    Spacer, useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaHome } from 'react-icons/fa';
import { useApiCallToastResp } from '@/hook/useApiCall';
import {useRouter} from "next/router";
import PageButton from "@/components/layout/Button/PageButton";

export default function NavBarDashboard(): React.JSX.Element {
    const [isSubmit, setIsSubmit] = useState(false);

    const { isOpen, onToggle } = useDisclosure();


    const router = useRouter();

    useApiCallToastResp('post', '/auth/logout', {}, isSubmit, setIsSubmit);

    return (
        <>
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
                        <NextLink href="/" passHref>
                            <Button
                                colorScheme={"red"}
                                _hover={{
                                    color: 'red.200',
                                }}
                                onClick={() => {
                                    setIsSubmit(true);
                                }}
                            >
                                Sign Out
                            </Button>
                        </NextLink>
                    </Flex>
                </Flex>
                <Spacer />
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
            </Flex>
        </>
    );
}
