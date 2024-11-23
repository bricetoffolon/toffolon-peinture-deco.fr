import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  HStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { MdOutlineEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

export default function Contact() {
  const steps = [
    {
      number: 1,
      title: 'Étude de votre projet & Conseils techniques',
      description:
          'Nous analysons votre projet et vous proposons des conseils techniques adaptés à vos besoins spécifiques.',
      imageSrc:
          'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/work-steps/study_project.png',
    },
    {
      number: 2,
      title: 'Remise des documents légaux & Planning',
      description:
          "Vous recevez tous les documents légaux nécessaires pour commencer les travaux, accompagnés d'un planning prévisionnel.",
      imageSrc:
          'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/work-steps/legal_doc.png',
    },
    {
      number: 3,
      title: 'Commande des matériaux & Début des travaux',
      description:
          'Nous commandons les matériaux de qualité et démarrons les travaux conformément au planning établi.',
      imageSrc:
          'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/work-steps/paint_materials.png',
    },
    {
      number: 4,
      title: 'Signature du PV de réception & Remise des garanties',
      description:
          'À la fin des travaux, nous signons le PV de réception et vous remettons toutes les garanties nécessaires.',
      imageSrc:
          'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/work-steps/Signature.png',
    },
  ];

  return (
      <>
        {/* SEO Meta Tags */}
        <Head>
          <title>Contactez-Nous | TOFFOLON</title>
          <meta
              name="description"
              content="Contactez l'entreprise générale de peinture et décoration TOFFOLON pour tous vos besoins en rénovation, ravalement, et isolation thermique."
          />
          <meta
              name="keywords"
              content="contact, TOFFOLON, peinture, décoration, rénovation, ravalement, isolation thermique, Île-de-France"
          />
          <meta name="author" content="TOFFOLON" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        {/* Contact Form Section */}
        <Flex
            direction="column"
            align="center"
            bg="gray.50"
            py={10}
            px={{ base: 4, md: 8 }}
        >
          <Box
              bg="white"
              borderRadius="lg"
              shadow="md"
              p={8}
              w="full"
              maxW="800px"
              mb={12}
          >
            <Heading size="lg" mb={4} color="brand.600" textAlign="center">
              Contactez-Nous
            </Heading>
            <Text fontSize="md" color="gray.700" textAlign="center" mb={6}>
              Pour toute question ou demande de renseignement, remplissez le
              formulaire ci-dessous et nous vous répondrons dans les plus brefs
              délais.
            </Text>

            {/* Flex container for Contact Info and Form */}
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="start"
                gap={8}
            >
              {/* Contact Information */}
              <Box flex="1" p={6} rounded="lg">
                <VStack spacing={4} align="start">
                  <HStack spacing={4}>
                    <MdPhone color="brand.500" size="24px" />
                    <Text fontSize="md" color="gray.700">
                      01 48 50 24 55
                    </Text>
                  </HStack>
                  <HStack spacing={4}>
                    <MdOutlineEmail color="brand.500" size="24px" />
                    <Text fontSize="md" color="gray.700">
                      contact@toffolon-peinture-deco.fr
                    </Text>
                  </HStack>
                  <HStack spacing={4}>
                    <MdLocationOn color="brand.500" size="24px" />
                    <Text fontSize="md" color="gray.700">
                      25 Allée Gabriel, 93320 Les Pavillons-sous-Bois
                    </Text>
                  </HStack>
                </VStack>
              </Box>

              {/* Form Fields */}
              <Box flex="2">
                <VStack spacing={6}>
                  <FormControl>
                    <FormLabel>Votre Prénom & Nom</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson color="gray.500" />
                      </InputLeftElement>
                      <Input type="text" placeholder="Votre nom complet" />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail color="gray.500" />
                      </InputLeftElement>
                      <Input type="email" placeholder="Votre email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Votre message" />
                  </FormControl>

                  <Button
                      bg="brand.500"
                      color="white"
                      _hover={{ bg: 'brand.600' }}
                      alignSelf="flex-start"
                  >
                    Envoyer le Message
                  </Button>
                </VStack>
              </Box>
            </Flex>
          </Box>

          {/* Transition Text */}
          <Box textAlign="center" maxW="700px" mb={12}>
            <Heading size="md" color="brand.600" mb={4}>
              Vous souhaitez en savoir plus sur notre façon de travailler ?
            </Heading>
            <Text fontSize="lg" color="gray.700">
              Découvrez notre méthodologie étape par étape pour garantir la
              réussite de votre projet.
            </Text>
          </Box>

          {/* Steps Section */}
          <VStack spacing={8} w="full" maxW="1000px">
            {steps.map((step) => (
                <Flex
                    key={step.number}
                    direction={{ base: 'column', md: 'row' }}
                    align="center"
                    p={6}
                    bg="white"
                    shadow="md"
                    rounded="lg"
                    w="full"
                    gap={6}
                >
                  {/* Step Image */}
                  <Box
                      minW="100px"
                      minH="100px"
                      bg={`url(${step.imageSrc})`}
                      bgSize="cover"
                      bgPosition="center"
                      rounded="full"
                      shadow="lg"
                  />

                  {/* Step Details */}
                  <Box textAlign={{ base: 'center', md: 'left' }} flex="1">
                    <Heading as="h3" size="md" color="brand.600" mb={2}>
                      {step.number}. {step.title}
                    </Heading>
                    <Text fontSize="md" color="gray.600">
                      {step.description}
                    </Text>
                  </Box>
                </Flex>
            ))}
          </VStack>
        </Flex>
      </>
  );
}
