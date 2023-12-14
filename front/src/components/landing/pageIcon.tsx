import React from 'react';
import { Icon, Box, Flex, Text, Heading, useBreakpointValue } from '@chakra-ui/react'; // eslint-disable-line
import NextLink from 'next/link';
import { AddAnimation, animateButton, animateText } from '@/components/layout/animations';

export default function PageIcon({
    // eslint-disable-next-line no-shadow
    Icon,
    href,
    info,
    name,
}: {
    Icon?: React.ElementType;
    href?: string;
    info?: string;
    name?: string;
}) {
    const isSmallDevice = useBreakpointValue({ base: true, xl: false });

    return (
        <Flex>
            {Icon && href && info && name ? (
                <Flex direction="column" alignItems="center">
                    <AddAnimation motionOptions={animateButton({ timing: 0.5 })}>
                        <NextLink href={href} passHref>
                            <Box
                                m="5%"
                                boxSize={{ base: '5em', xl: '8em' }}
                                bg="brand.400"
                                borderRadius="lg"
                                boxShadow="xl"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                rounded="full"
                                as="button"
                                transition="transform 0.3s"
                                _hover={{
                                    transform: 'scale(1.1)',
                                }}
                                _active={{
                                    transform: 'scale(0.8)',
                                }}
                            >
                                <Icon size="3em" as={Icon} color="white" />
                            </Box>
                        </NextLink>
                    </AddAnimation>
                    <AddAnimation motionOptions={animateText({ timing: 0.5 })}>
                        <Flex direction="column" alignItems="center">
                            <Heading fontSize={{ base: 'lg', xl: 'xl' }}>{name}</Heading>
                            {!isSmallDevice ? (
                                <Text
                                    as="b"
                                    textAlign="center"
                                    color="gray.500"
                                    fontSize="lg"
                                    maxW={{ base: '90vw', xl: '20vw' }}
                                >
                                    {info}
                                </Text>
                            ) : null}
                        </Flex>
                    </AddAnimation>
                </Flex>
            ) : null}
        </Flex>
    );
}

PageIcon.defaultProps = {
    Icon: undefined,
    href: undefined,
    info: undefined,
    name: undefined,
};
