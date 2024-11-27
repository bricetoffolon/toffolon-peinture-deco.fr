import React, { useEffect, useMemo, useState } from 'react';

// pages/index.js

import { Box, Button, Flex, Heading, Image, Text, VStack, keyframes, Wrap } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const slideWithPause = keyframes`
    0% { transform: translateX(0); } /* First image */
    14% { transform: translateX(0); } /* Pause on the first image */
    28% { transform: translateX(-100%); } /* Transition to second image */
    42% { transform: translateX(-100%); } /* Pause on the second image */
    56% { transform: translateX(-200%); } /* Transition to third image */
    70% { transform: translateX(-200%); } /* Pause on the third image */
    100% { transform: translateX(0); } /* Reset to first image */
`;

export default function LandingPage() {
    const images = useMemo(
        () => [
            'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/building_construction_site_Paris.webp',
            'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/pavillon-durant-travaux.webp',
            'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/pavillon-en-cours-ravalement.webp',
        ],
        []
    );

    // Responsive detection (basic implementation)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const router = useRouter();

    const navigateToService = (serviceIndex: number) => {
        router.push(`/nos-prestations#service-${serviceIndex}`);
    };

    // Automatic image slider
    useEffect(() => {
        const totalDuration = 20000; // Match the animation duration (20s)
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, totalDuration / images.length); // Adjust timing for 4 images

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images]);

    return (
        <>
            <Head>
                <title>
                    Entreprise de Bâtiment - Expertise en Ravalement, Isolation et Peinture
                </title>
                <meta
                    name="description"
                    content="Découvrez notre expertise en ravalement de façades, isolation thermique, revêtements de sol, et peinture. Des services professionnels et de qualité."
                />
                <meta
                    name="keywords"
                    content="Ravalement, Isolation Thermique, Revêtement de sol, Peinture, Bâtiment, Expertise"
                />
                <meta name="author" content="Toffolon" />
            </Head>

            <Box as="main" bg="brand.500" color="white" overflow="hidden" position="relative">
                {/* Slider Container */}
                <Box
                    display="flex"
                    animation={`${slideWithPause} 20s cubic-bezier(0.4, 0.0, 0.2, 1) infinite`} // Slower, smoother transition
                    transform={`translateX(-${currentImageIndex * 100}%)`}
                >
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            flex="0 0 100%"
                            height="80vh"
                            position="relative"
                            backgroundImage={`url(${image})`}
                            backgroundSize="cover" /* Ensures the image covers the entire box */
                            backgroundPosition="center" /* Keeps the image centered */
                            backgroundRepeat="no-repeat" /* Prevent tiling */
                        />
                    ))}
                </Box>

                {/* Overlay Content */}
                <Flex
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    align="center"
                    justify="center"
                    bg="rgba(0,0,0,0.5)"
                    zIndex="2"
                >
                    <VStack spacing={4}>
                        <Image
                            w={{ base: '65%', lg: '30%' }}
                            alignItems="center"
                            src="https://toffolon-website.s3.eu-west-3.amazonaws.com/icon/Toffolon-icon-white.png"
                        />
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: 'md', lg: 'lg' }}
                            textAlign="center"
                            maxWidth="600px"
                        >
                            Spécialistes en ravalement de façades, isolation thermique, revêtements
                            de sol et peinture. La qualité et le professionnalisme à votre service
                            depuis 1960
                        </Text>
                        <Flex justify="center" align="center" direction="column">
                            <Text fontSize="lg" fontWeight="bold" mb={2}>
                                Qualité et Excellence
                            </Text>
                            <Image
                                src="https://images.prismic.io/travauxlib%2F3fa3e9bb-6c86-4182-9f5f-6521078cd3bd_logo_qualibat-rge+hd.png?auto=compress,format&rect=0,0,2400,2911&w=2400&h=2911"
                                alt="Certification Qualibat RGE"
                                height="75px"
                            />
                        </Flex>
                    </VStack>
                </Flex>
            </Box>

            {/* Services Section */}
            <Box py={8} bg="white" color="brand.900">
                <Wrap justify="center" spacing={8}>
                    {[
                        {
                            title: 'Ravalement',
                            description:
                                'Donnez une nouvelle vie à vos façades avec nos services de ravalement professionnels.',
                            href: '/ravalement',
                        },
                        {
                            title: 'Isolation Thermique',
                            description:
                                "Réduisez vos factures d'énergie grâce à notre expertise en isolation thermique.",
                            href: '/isolation-thermique',
                        },
                        {
                            title: 'Revêtements de sols',
                            description:
                                'Des sols résistants et élégants adaptés à tous vos besoins.',
                            href: '/revetement-sols',
                        },
                        {
                            title: 'Peinture',
                            description:
                                'Apportez une touche de couleur et de modernité à vos espaces.',
                            href: '/peinture',
                        },
                    ].map((service, index) => (
                        <Flex
                            key={index}
                            direction="column"
                            align="center"
                            textAlign="center"
                            border="1px solid"
                            borderColor="brand.250"
                            borderRadius="md"
                            p={4}
                            minH="190px"
                            minWidth="250px"
                            maxWidth="250px"
                            bg="white"
                        >
                            <Heading fontSize="lg" mb={2}>
                                {service.title}
                            </Heading>
                            <Text fontSize="sm" mb={4}>
                                {service.description}
                            </Text>
                            <Button
                                as="a"
                                onClick={() => navigateToService(index)}
                                colorScheme="brand"
                                bg="brand.500"
                                _hover={{ bg: 'brand.400' }}
                            >
                                Découvrir
                            </Button>
                        </Flex>
                    ))}
                </Wrap>
            </Box>
        </>
    );
}
