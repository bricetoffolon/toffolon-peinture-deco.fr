import React, { useEffect, useState } from 'react';

// pages/index.js

import { Box, Button, Flex, Heading, Image, Text, VStack, keyframes, Wrap } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const slideWithPause = keyframes`
  0% { transform: translateX(0); }
  40% { transform: translateX(0); } /* Pause for 40% of the animation duration */
  50% { transform: translateX(-100%); } /* Start sliding */
  90% { transform: translateX(-100%); } /* Finish sliding */
  100% { transform: translateX(-200%); } /* Prepare for the next slide */
`;

export default function LandingPage() {
    // Image lists for different devices
    const mobileImages = [
        'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/maison-apre%CC%80s-travaux-vertical.jpeg',
        'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/travaux-vertical-Paris.jpeg',
        'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/re%CC%81novation-inte%CC%81rieure-vertical.jpeg',
    ];
    const tabletImages = [
        'https://example.com/tablet-image1.jpg',
        'https://example.com/tablet-image2.jpg',
    ];
    const desktopImages = [
        'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/building_construction_site_Paris.JPG',
        'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/maison-apre%CC%80s-travaux-horizontal.jpeg',
        'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/maison-travaux-horizontal.jpeg',
    ];

    // Responsive detection (basic implementation)
    const [currentImages, setCurrentImages] = useState(desktopImages);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const router = useRouter();

    const navigateToService = (serviceIndex: number) => {
        router.push(`/nos-prestations#service-${serviceIndex}`);
    };

    useEffect(() => {
        // Update the current images based on screen width
        const updateImages = () => {
            if (window.innerWidth < 768) {
                setCurrentImages(mobileImages);
            } else if (window.innerWidth < 1024) {
                setCurrentImages(tabletImages);
            } else {
                setCurrentImages(desktopImages);
            }
        };

        updateImages();
        window.addEventListener('resize', updateImages);
        return () => window.removeEventListener('resize', updateImages);
    });

    // Automatic image slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
        }, 120000); // Match the animation duration (12 seconds)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentImages]);

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
                    width={{
                        base: `${desktopImages.length * 100}%`,
                        xl: `${desktopImages.length * 50}%`,
                    }}
                    animation={`${slideWithPause} 16s cubic-bezier(0.4, 0.0, 0.2, 1) infinite`} // Slower, smoother transition
                    transform={`translateX(-${currentImageIndex * 100}%)`}
                >
                    {currentImages.map((image, index) => (
                        <Box
                            key={index}
                            flex="0 0 100%"
                            height="80vh"
                            position="relative"
                            backgroundImage={`url(${image})`}
                            backgroundSize="cover"
                            backgroundPosition="center"
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
                            title: 'Renovation extérieure & intérieure',
                            description:
                                'Des sols résistants et élégants adaptés à tous vos besoins.',
                            href: '/renovation',
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
