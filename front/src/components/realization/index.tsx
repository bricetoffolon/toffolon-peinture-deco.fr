import React, { useState } from 'react';
import {
    Box,
    SimpleGrid,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Text,
    Flex,
    Heading,
    useDisclosure,
    Stack,
    Icon,
    useColorModeValue,
    Stat,
    StatNumber,
    StatHelpText,
} from '@chakra-ui/react';
import { IoImages, IoTimerSharp, IoEye } from 'react-icons/io5';

function Feature({ text, icon, iconBg }) {
    return (
        <Stack direction="row" align="center" spacing={4}>
            <Flex w={10} h={10} align="center" justify="center" rounded="full" bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600} fontSize={{ base: 'sm', md: 'md' }} textAlign="left">
                {text}
            </Text>
        </Stack>
    );
}

const realizations = [
    {
        id: 1,
        src: 'https://toffolon-website.s3.eu-west-3.amazonaws.com/landtravaux-vertical-Pariing/s.jpeg',
        title: 'Ravalement de façade moderne',
        description: 'Un ravalement complet d’une façade de maison avec une finition moderne.',
    },
    {
        id: 2,
        src: 'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/maison-apre%CC%80s-travaux-vertical.jpeg',
        title: 'Isolation thermique par l’extérieur',
        description: 'Travaux d’isolation thermique pour une maison individuelle.',
    },
    {
        id: 3,
        src: 'https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/re%CC%81novation-inte%CC%81rieure-vertical.jpeg',
        title: 'Peinture intérieure élégante',
        description: 'Une peinture intérieure soignée avec des teintes douces et chaleureuses.',
    },
    // Add more realizations here
];

export default function Realisations() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedRealisation, setSelectedRealisation] = useState<any>(null);

    // Dynamic Stats
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 1960;
    const totalPosts = realizations.length;

    const handleOpen = (realisation: any) => {
        setSelectedRealisation(realisation);
        onOpen();
    };

    return (
        <main>
            <Box as="section" p={6} w="100%" mx="auto" textAlign="center" minHeight="100vh">
                {/* SEO Heading */}
                <Heading as="h1" size="xl" mb={8}>
                    Découvrez Nos Réalisations
                </Heading>


                {/* Stats Section */}
                <SimpleGrid columns={{ md: 3 }} spacing={6} mb={8}>
                    {/* Number of Posts */}
                    <Flex direction="column" align="center">
                        <Feature
                            icon={<Icon as={IoImages} color="purple.500" w={6} h={6} />}
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text="Nombre de Projets"
                        />
                        <Stat>
                            {' '}
                            {/* Reduce margin here */}
                            <StatNumber fontSize={{ base: 'lg', md: 'xl', lg: 'xl' }}>
                                {totalPosts}
                            </StatNumber>
                            <StatHelpText>Projets réalisés</StatHelpText>
                        </Stat>
                    </Flex>

                    {/* Years of Experience */}
                    <Flex direction="column" align="center">
                        <Feature
                            icon={<Icon as={IoTimerSharp} color="teal.500" w={6} h={6} />}
                            iconBg={useColorModeValue('teal.100', 'teal.900')}
                            text="Années d'expérience"
                        />
                        <Stat>
                            {' '}
                            {/* Reduce margin here */}
                            <StatNumber fontSize={{ base: 'lg', md: 'xl', lg: 'xl' }}>
                                +{yearsOfExperience}
                            </StatNumber>
                            <StatHelpText>Depuis 1960</StatHelpText>
                        </Stat>
                    </Flex>

                    <Flex direction="column" align="center">
                        <Feature
                            icon={<Icon as={IoEye} color="brand.500" w={6} h={6} />}
                            iconBg={useColorModeValue('brand.250', 'brand.900')}
                            text="Vues"
                        />
                        <Stat>
                            {' '}
                            {/* Reduce margin here */}
                            <StatNumber fontSize={{ base: 'lg', md: 'xl', lg: 'xl' }}>
                                +0
                            </StatNumber>
                            <StatHelpText>Vues cumulée</StatHelpText>
                        </Stat>
                    </Flex>
                </SimpleGrid>

                {/* Gallery */}
                <section>
                    <SimpleGrid columns={{ base: 3, md: 5 }} spacing={4}>
                        {realizations.map((realisation) => (
                            <Box
                                key={realisation.id}
                                cursor="pointer"
                                onClick={() => handleOpen(realisation)}
                                overflow="hidden"
                                position="relative"
                                paddingBottom="100%"
                                boxShadow="sm"
                                _hover={{ transform: 'scale(1.03)', transition: '0.3s ease' }}
                                borderRadius="md"
                            >
                                <Image
                                    src={realisation.src}
                                    alt={`Image du projet ${realisation.title}`}
                                    objectFit="cover"
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    width="100%"
                                    height="100%"
                                />
                            </Box>
                        ))}
                    </SimpleGrid>
                </section>
            </Box>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody p={6}>
                        {selectedRealisation && (
                            <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
                                {/* Large Image */}
                                <Box flex="1">
                                    <Image
                                        src={selectedRealisation.src}
                                        alt={selectedRealisation.title}
                                        borderRadius="lg"
                                        objectFit="cover"
                                        w="100%"
                                        maxHeight="500px"
                                    />
                                </Box>

                                {/* Description */}
                                <Flex
                                    direction="column"
                                    justify="center"
                                    flex="1"
                                    textAlign={{ base: 'center', md: 'left' }}
                                >
                                    <Heading as="h2" size="lg" mb={4}>
                                        {selectedRealisation.title}
                                    </Heading>
                                    <Text fontSize="md" color="gray.600">
                                        {selectedRealisation.description}
                                    </Text>
                                </Flex>
                            </Flex>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </main>
    );
}
