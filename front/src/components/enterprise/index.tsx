import React from 'react';
import { Box, Heading, Image, Text, Stack, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import CertificationElement from '@/components/enterprise/certificationElement';
import { entrepriseCertifications } from '@/constant/certifications';

export default function Entreprise() {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Notre entreprise - SAS Toffolon</title>
                <meta
                    name="description"
                    content="Découvrez l'histoire de la SAS TOFFOLON, une entreprise familiale experte en peinture et décoration depuis 1960. Une équipe dédiée et des prestations de qualité en Île-de-France."
                />
                <meta
                    name="keywords"
                    content="Entreprise générale de peinture, décoration, ravalement, isolation, SAS TOFFOLON, Île-de-France, Qualibat RGE, travaux de qualité"
                />
                <meta name="author" content="Toffolon" />
            </Head>

            <Box as="main" bg="brand.500" color="white" py={8}>
                {/* Hero Section */}
                <Box textAlign="center" py={12}>
                    <Heading as="h1" fontSize="3xl" mb={4}>
                        Notre Entreprise
                    </Heading>
                    <Text fontSize="lg" maxWidth="800px" mx="auto">
                        Découvrez l&pos;histoire et les valeurs de la SAS TOFFOLON, une entreprise
                        familiale fondée en 1960, dédiée à fournir des services de qualité dans le
                        domaine de la peinture, de la décoration, et du ravalement.
                    </Text>
                </Box>

                {/* History Section */}
                <Box bg="white" color="brand.900" py={12} px={6}>
                    <Stack direction={{ base: 'column', lg: 'row' }} spacing={8} align="center">
                        <Box flex="1">
                            <Image
                                src="https://toffolon-website.s3.eu-west-3.amazonaws.com/about/maison-renove.webp"
                                alt="Travaux de peinture Pavillon Le Raincy"
                                borderRadius="md"
                                boxShadow="md"
                                maxH="500px"
                            />
                        </Box>
                        <Box flex="2">
                            <Heading as="h2" fontSize="2xl" mb={4}>
                                Une histoire de famille et de professionnalisme
                            </Heading>
                            <Text fontSize="md" mb={4}>
                                Issue d&pos;une entreprise familiale créée en 1960, la SAS TOFFOLON
                                est aujourd&pos;hui dirigée par Jean-Marc Toffolon depuis 1991.
                                Forts de décennies d&pos;expérience, nous mettons notre expertise au
                                service des professionnels et des particuliers, en Île-de-France et
                                même en province pour les professionnels.
                            </Text>
                            <Text fontSize="md">
                                Notre savoir-faire se reflète dans nos conseils techniques et dans
                                notre capacité à gérer l&pos;intégralité de vos chantiers, de la
                                planification à l&pos;exécution, avec une équipe dédiée et
                                qualifiée.
                            </Text>
                        </Box>
                    </Stack>
                </Box>

                {/* Values Section */}
                <Box bg="brand.400" color="white" py={12} px={6}>
                    <Stack
                        direction={{ base: 'column', lg: 'row-reverse' }}
                        spacing={8}
                        align="center"
                    >
                        <Box flex="1">
                            <Image
                                src="https://toffolon-website.s3.eu-west-3.amazonaws.com/about/jean-marc-toffolon.webp"
                                alt="Jean-Marc Toffolon"
                                borderRadius="full"
                                boxSize="250px"
                                objectFit="cover"
                                mx="auto"
                                boxShadow="lg"
                            />
                        </Box>
                        <Box flex="2">
                            <Heading as="h2" fontSize="2xl" mb={4}>
                                Nos valeurs
                            </Heading>
                            <Heading fontStyle="italic" fontSize="md" mb={4}>
                                “Respecter les attentes de nos clients en tenant compte des
                                contraintes techniques, c’est la base de notre métier…” – Jean-Marc
                                Toffolon
                            </Heading>
                            <Text fontSize="md" mb={4}>
                                Chez SAS TOFFOLON, nous privilégions :
                            </Text>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
                                <li>Une équipe dédiée par chantier pour un suivi optimal.</li>
                                <li>Des conseils techniques personnalisés.</li>
                                <li>
                                    Des matériaux de qualité provenant de grandes marques telles que
                                    STO, Seigneurie, Tollens, et bien d&pos;autres.
                                </li>
                            </ul>
                        </Box>
                    </Stack>
                </Box>

                {/* Certifications Section */}
                <Box bg="white" color="brand.900" py={12} px={6}>
                    <Heading as="h2" fontSize="2xl" mb={8} textAlign="center">
                        Nos certifications
                    </Heading>
                    <Flex
                        justify="center"
                        alignItems="center"
                        flexWrap="wrap"
                        gap="7%"
                        direction={{ base: 'column', lg: 'row' }}
                    >
                        <Flex direction="column" alignItems="center" gap={3} maxW="5%">
                            <Image
                                src="https://images.prismic.io/travauxlib%2F3fa3e9bb-6c86-4182-9f5f-6521078cd3bd_logo_qualibat-rge+hd.png?auto=compress,format&rect=0,0,2400,2911&w=2400&h=2911"
                                alt="Certification Qualibat RGE & Peinture/Ravalement Technicité Confirmée"
                                minW="90px"
                            />
                            <Heading
                                textAlign="center"
                                size="md"
                                maxW={{ base: '90vw', xl: '25vw' }}
                            >
                                Qualibat RGE & Peinture/Ravalement
                            </Heading>
                        </Flex>
                        <CertificationElement props={entrepriseCertifications[1]} />
                        <CertificationElement props={entrepriseCertifications[2]} />
                    </Flex>
                </Box>
            </Box>
        </>
    );
}
