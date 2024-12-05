import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

export default function MentionsLegales() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Mentions Légales | Toffolon Peinture & Décoration</title>
                <meta
                    name="description"
                    content="Mentions légales du site Toffolon Peinture & Décoration. Retrouvez toutes les informations légales sur l'hébergeur, le responsable de publication et les conditions d'utilisation."
                />
                <meta
                    name="keywords"
                    content="Mentions légales, Toffolon Peinture, site internet, hébergeur, informations légales, France"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Toffolon Peinture & Décoration" />
            </Head>

            <Box
                overflowY="scroll"
                scrollSnapType={{ base: undefined, xl: 'y mandatory' }}
                scrollBehavior="smooth"
                minH="100vh"
            >
                <Box>
                    <Flex align="center" justify="center" direction="column" gap={8} p={6}>
                        {/* Content */}
                        <Flex
                            direction="column"
                            flex="1"
                            maxW="800px"
                            gap={4}
                            align="center"
                            textAlign="center"
                        >
                            <Heading as="h1" size="xl" mb={4}>
                                Mentions Légales
                            </Heading>
                            <VStack align="start" spacing={6} textAlign="left">
                                <Box>
                                    <Heading as="h2" size="md" mb={2}>
                                        Informations Générales
                                    </Heading>
                                    <Text>
                                        Ce site internet est édité par l’entreprise Toffolon
                                        Peinture & Décoration, spécialisée dans les travaux de
                                        ravalement, isolation thermique et peinture.
                                    </Text>
                                    <Text>
                                        Siège social : 25 allée Gabriel, 93320, Les
                                        Pavillons-sous-Bois
                                        <br />
                                        SIRET : 38102749900015
                                        <br />
                                        Téléphone : +33 1 48 50 24 55
                                        <br />
                                    </Text>
                                </Box>

                                <Box>
                                    <Heading as="h2" size="md" mb={2}>
                                        Responsable de la Publication
                                    </Heading>
                                    <Text>Responsable de la publication : Toffolon Patricia</Text>
                                </Box>

                                <Box>
                                    <Heading as="h2" size="md" mb={2}>
                                        Hébergement
                                    </Heading>
                                    <Text>
                                        Le site est hébergé par :
                                        <br />
                                        Scaleway
                                    </Text>
                                </Box>

                                <Box>
                                    <Heading as="h2" size="md" mb={2}>
                                        Propriété Intellectuelle
                                    </Heading>
                                    <Text>
                                        Tous les contenus présents sur ce site (textes, images,
                                        vidéos, graphiques, logos, etc.) sont la propriété de
                                        **Toffolon Peinture & Décoration** ou de leurs auteurs
                                        respectifs. Toute reproduction ou représentation, totale ou
                                        partielle, sans autorisation préalable, est interdite.
                                    </Text>
                                </Box>

                                <Box>
                                    <Heading as="h2" size="md" mb={2}>
                                        Protection des Données Personnelles
                                    </Heading>
                                    <Text>
                                        Conformément à la loi française n° 78-17 du 6 janvier 1978
                                        relative à l&apos;informatique, aux fichiers et aux
                                        libertés, et au Règlement Général sur la Protection des
                                        Données (RGPD), vous disposez d&apos;un droit d&apos;accès,
                                        de rectification et de suppression des données vous
                                        concernant.
                                    </Text>
                                    <Text>
                                        Pour exercer ces droits, veuillez nous contacter par email à
                                        : contact@toffolon-peinture-deco.fr
                                    </Text>
                                </Box>

                                <Box>
                                    <Heading as="h2" size="md" mb={2}>
                                        Cookies
                                    </Heading>
                                    <Text>
                                        Ce site utilise des cookies pour améliorer l&apos;expérience
                                        des utilisateurs. En continuant à naviguer sur ce site, vous
                                        acceptez l&apos;utilisation des cookies.
                                    </Text>
                                    <Text>
                                        Pour plus d&apos;informations, veuillez consulter notre
                                        politique de confidentialité.
                                    </Text>
                                </Box>
                            </VStack>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </>
    );
}
