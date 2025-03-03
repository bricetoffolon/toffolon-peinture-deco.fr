import React, { useState } from 'react';
import { Button, Flex, Heading, Box, SimpleGrid, Icon, Badge, Text } from '@chakra-ui/react';

import NextLink from 'next/link';

import { useApiCallDataResp } from '@/hook/useApiCall';
import { FaCog, FaNewspaper } from 'react-icons/fa';
import { ArrowForwardIcon, LockIcon } from '@chakra-ui/icons';

export default function Dashboard(): React.JSX.Element {
    const [response, setResponse] = useState<any>(''); // eslint-disable-line

    useApiCallDataResp('get', '/user', {}, response, setResponse);

    return (
        <Flex h={'100%'}>
            {response !== 'error' ? (
                <Flex alignItems="left" justifyContent="center" direction="column" mt="1%">
                    <Box width="80%" padding="3%" borderRadius="lg">
                        <Flex direction="column" gap={8}>
                            <Heading size="xl" textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)">
                                Dashboard Services
                            </Heading>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <Box
                                    p={6}
                                    bg="gray.100"
                                    borderRadius="md"
                                    boxShadow="md"
                                    _hover={{
                                        transform: 'translateY(-5px)',
                                        transition: 'transform 0.2s',
                                    }}
                                >
                                    <Flex direction="column" align="center" gap={4}>
                                        <Icon as={FaNewspaper} w={10} h={10} color="brand.400" />
                                        <Heading size="md" color="gray.700">
                                            Manage Posts
                                        </Heading>
                                        <Text color="gray.600" textAlign="center" mb={4}>
                                            Create, edit, and organize all your content in one place
                                        </Text>
                                        <NextLink href="redondo/service/posts" passHref>
                                            <Button
                                                size="md"
                                                boxShadow="md"
                                                color="white"
                                                bg="brand.400"
                                                _hover={{
                                                    bg: 'brand.500',
                                                }}
                                                rightIcon={<ArrowForwardIcon />}
                                            >
                                                Go to Posts
                                            </Button>
                                        </NextLink>
                                    </Flex>
                                </Box>

                                <Box
                                    p={6}
                                    bg="gray.100"
                                    borderRadius="md"
                                    boxShadow="md"
                                    opacity={0.6}
                                    position="relative"
                                    _hover={{
                                        transform: 'translateY(-5px)',
                                        transition: 'transform 0.2s',
                                    }}
                                >
                                    <Flex direction="column" align="center" gap={4}>
                                        <Icon as={FaCog} w={10} h={10} color="gray.400" />
                                        <Heading size="md" color="gray.500">
                                            More Services
                                        </Heading>
                                        <Text color="gray.500" textAlign="center" mb={4}>
                                            Additional services will be available soon
                                        </Text>
                                        <Button
                                            size="md"
                                            isDisabled
                                            boxShadow="md"
                                            color="white"
                                            bg="gray.400"
                                            rightIcon={<LockIcon />}
                                        >
                                            Coming Soon
                                        </Button>
                                    </Flex>
                                    <Badge
                                        position="absolute"
                                        top={2}
                                        right={2}
                                        colorScheme="purple"
                                    >
                                        Coming Soon
                                    </Badge>
                                </Box>
                            </SimpleGrid>
                        </Flex>
                    </Box>
                </Flex>
            ) : null}
        </Flex>
    );
}
