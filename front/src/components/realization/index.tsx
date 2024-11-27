'use client';

import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    VStack,
    useBreakpointValue,
    Stack,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { IoConstruct, IoTime } from 'react-icons/io5';

interface FeatureProps {
    text: string;
    icon: React.ReactElement;
    iconBg: string;
}

function Feature({ text, icon, iconBg }: FeatureProps) {
    return (
        <Stack direction="row" align="center">
            <Flex w={10} h={10} align="center" justify="center" rounded="full" bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
}

export default function Realisations() {
    const isImageBelowHeading = useBreakpointValue({ base: true, md: false });

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Nos Réalisations | Toffolon Peinture & Décoration</title>
                <meta
                    name="description"
                    content="Découvrez bientôt nos réalisations de ravalement extérieur, isolation thermique, et rénovation. Une galerie de nos meilleurs projets sera bientôt disponible !"
                />
                <meta
                    name="keywords"
                    content="Nos réalisations, travaux de peinture, Toffolon Peinture, ravalement extérieur, rénovation"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Toffolon Peinture & Décoration" />
            </Head>

            <Box
                overflowY="scroll"
                height={{ base: '93vh', xl: '93vh' }}
                scrollSnapType={{ base: undefined, xl: 'y mandatory' }}
                scrollBehavior="smooth"
            >
                <Box height={{ base: undefined, xl: '93vh' }} scrollSnapAlign="start">
                    <Flex
                        align="center"
                        justify="center"
                        height="100%"
                        direction="column"
                        gap={8}
                        p={6}
                    >
                        {/* Content */}
                        <Flex
                            direction="column"
                            flex="1"
                            maxW="600px"
                            gap={4}
                            align="center"
                            textAlign="center"
                            order={isImageBelowHeading ? 1 : 0} // Content comes first on small screens
                        >
                            <Flex direction="column" gap={1} mb={1}>
                                <Heading as="h1" size="xl">
                                    Nos Réalisations
                                </Heading>
                                <Text fontSize="md">
                                    Cette page est en cours de création ! Découvrez bientôt une
                                    galerie complète de nos meilleurs projets. Nous travaillons dur
                                    pour vous présenter nos réalisations.
                                </Text>
                            </Flex>
                        </Flex>

                        {/* Image */}
                        <Flex
                            flex="1"
                            justify="center"
                            align="center"
                            maxW="600px"
                            order={isImageBelowHeading ? 0 : 1} // Image comes after heading on small screens
                        >
                            <Image
                                src="https://toffolon-website.s3.eu-west-3.amazonaws.com/services/coming-soon-construction.jpeg"
                                maxH="85vh"
                                borderRadius="lg"
                                objectFit="cover"
                            />
                        </Flex>

                        {/* Features */}
                        <Flex
                            direction="column"
                            flex="1"
                            maxW="600px"
                            pr={{ base: 0, md: 8 }}
                            gap={4}
                            align={{ base: 'center', md: 'start' }}
                            textAlign={{ base: 'center', md: 'left' }}
                        >
                            <VStack spacing={6} align="stretch" w="full">
                                {[
                                    {
                                        text: 'Une galerie dynamique',
                                        icon: (
                                            <Icon as={IoConstruct} color="orange.500" w={5} h={5} />
                                        ),
                                        iconBg: useColorModeValue('orange.100', 'orange.900'),
                                    },
                                    {
                                        text: 'Mise à jour régulière',
                                        icon: <Icon as={IoTime} color="blue.500" w={5} h={5} />,
                                        iconBg: useColorModeValue('blue.100', 'blue.900'),
                                    },
                                ].map((feature, index) => (
                                    <Feature
                                        key={index}
                                        text={feature.text}
                                        icon={feature.icon}
                                        iconBg={feature.iconBg}
                                    />
                                ))}
                            </VStack>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </>
    );
}
