import { Box, Flex, Heading, Text, Image, Stack, Icon, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { IoAlarm, IoAccessibility, IoShapes } from 'react-icons/io5';
import ServiceTemplate from '@/components/services/serviceTemplate';

import { servicesContent } from '@/constant/services';
import SwipeDownButton from '@/components/services/swipeDownButton';

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

export default function Services() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>
                    Isolation Thermique, Ravalement & Peinture | Toffolon Peinture & Décoration
                </title>
                <meta
                    name="description"
                    content="Depuis 2015, Toffolon Peinture & Décoration est certifiée QUALIBAT RGE pour des travaux d'isolation thermique extérieure, ravalement et peinture. Découvrez nos services."
                />
                <meta
                    name="keywords"
                    content="Isolation thermique extérieure, QUALIBAT RGE, Ravalement, Peinture, rénovation, Toffolon Peinture & Décoration"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Toffolon Peinture & Décoration" />
            </Head>

            <Box
                overflowY="scroll"
                height="100vh"
                scrollSnapType="y mandatory"
                scrollBehavior="smooth"
            >
                <Box height="90vh" scrollSnapAlign="start">
                    {/* Section 1: Key Introduction */}
                    <Flex
                        align="center"
                        justify="center"
                        height="100%"
                        direction={{ base: 'column', xl: 'row' }}
                        gap={8}
                        p={6}
                    >
                        {/* Content */}
                        <Flex
                            direction="column"
                            flex="1"
                            maxW="600px"
                            pr={{ base: 0, md: 8 }}
                            align={{ base: 'center', md: 'start' }}
                            textAlign={{ base: 'center', md: 'left' }}
                        >
                            <Text
                                textTransform="uppercase"
                                color="blue.400"
                                fontWeight={600}
                                fontSize="sm"
                                bg={useColorModeValue('blue.50', 'blue.900')}
                                p={2}
                                alignSelf="flex-start"
                                rounded="md"
                            >
                                Our Story
                            </Text>
                            <Heading size="xl">
                                Notre entreprise est certifiée{' '}
                                <Text as="span" color="brand.500">
                                    QUALIBAT RGE
                                </Text>
                            </Heading>
                            <Text fontSize="md" fontWeight="bold" color="brand.600">
                                Depuis 2015, nous sommes spécialisés dans la réalisation des travaux
                                d&apos;isolation thermique extérieure sur les pavillons, immeubles,
                                magasins, et plus encore.
                            </Text>
                            {/* Additional Key Information */}
                            <Text fontSize="md" color="gray.700" mt={4}>
                                Nos ouvriers sont dédiés à un seul chantier : les délais de début et
                                fin de chantier sont donc respectés dès lors que le devis est signé.
                                À noter également que notre responsable technique suivra votre
                                chantier depuis la première visite jusqu&apos;à la signature du PV
                                de réception.
                            </Text>

                            {/* Features Section */}
                            <Flex
                                gap={4}
                                align="stretch"
                                mt={6}
                                flexWrap={{ base: 'wrap', xl: 'nowrap' }}
                            >
                                <Feature
                                    icon={<Icon as={IoAlarm} color="purple.500" w={5} h={5} />}
                                    iconBg={useColorModeValue('purple.100', 'purple.900')}
                                    text="Planning respecté"
                                />
                                <Feature
                                    icon={
                                        <Icon as={IoAccessibility} color="green.500" w={5} h={5} />
                                    }
                                    iconBg={useColorModeValue('green.100', 'green.900')}
                                    text="Interlocuteur Unique"
                                />
                                <Feature
                                    icon={<Icon as={IoShapes} color="yellow.500" w={5} h={5} />}
                                    iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                                    text="Matériaux Agrées"
                                />
                            </Flex>
                        </Flex>

                        {/* Optional Image */}
                        <Flex flex="1" justify="center" align="center" maxW="600px">
                            <Image
                                src="https://toffolon-website.s3.eu-west-3.amazonaws.com/services/house-w-truck.webp"
                                maxH="85vh"
                                borderRadius="lg"
                                objectFit="cover"
                                display={{ base: 'none', xl: 'block' }}
                            />
                        </Flex>
                        <SwipeDownButton />
                    </Flex>
                </Box>
                {servicesContent.map((service, index) => (
                    <Box
                        height="100vh"
                        scrollSnapAlign="start"
                        id={`service-${index}`}
                        key={index}
                        overflow="hidden"
                    >
                        <ServiceTemplate
                            index={index}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            callToAction={service.callToAction}
                        />
                    </Box>
                ))}
            </Box>
        </>
    );
}
