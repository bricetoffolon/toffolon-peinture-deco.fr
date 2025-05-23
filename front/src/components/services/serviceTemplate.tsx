import { Box, Heading, Text, Image, Button, Flex, AspectRatio } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import {service} from "@/constant/services";

export default function ServiceTemplate({ id, title, description, image, callToAction }: service) {
    const [direction, setDirection] = useState('column');

    // Effect to calculate the aspect ratio of the viewport and adjust direction
    useEffect(() => {
        const updateDirection = () => {
            const { innerWidth, innerHeight } = window;
            setDirection(innerWidth > innerHeight ? 'row' : 'column');
        };

        // Run on mount and add event listener for resize
        updateDirection();
        window.addEventListener('resize', updateDirection);

        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', updateDirection);
    }, []);

    return (
        <Flex
            //@ts-ignore
            direction={direction}
            align="center"
            justify="center"
            maxW="100vw"
            m="1%"
            gap={{ base: 1, sm: 4, md: 8 }} // Adjust gap for smaller screens
            minH="100vh"
        >
            {/* Image Section */}
            <AspectRatio // Adjust for screen size
                ratio={4 / 3}
                w="100%"
                h="100%"
            >
                <Image
                    src={image.imageUrl || 'https://via.placeholder.com/400'}
                    alt={image.imageAlt || 'Default Image'}
                    borderRadius="md"
                    shadow="lg"
                    objectFit="cover"
                    maxH="90%" // Dynamic max height
                />
            </AspectRatio>

            {/* Content Section */}
            <Box
                textAlign={{ base: 'center', md: 'left' }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems={{ base: 'center', md: 'flex-start' }}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: 'lg', sm: 'xl', md: '2xl', lg: '4xl' }}
                    mb={4}
                    color="brand.600"
                >
                    {title}
                </Heading>
                <Text
                    fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                    mb={6}
                    color="gray.700"
                    lineHeight="1.8"
                    textAlign={{ base: 'center', sm: 'left' }}
                >
                    {description}
                </Text>
                <NextLink href="/contact" passHref>
                    <Button
                        bg="brand.500"
                        color="white"
                        _hover={{ bg: 'brand.600' }}
                        size="lg"
                    >
                        {callToAction}
                    </Button>
                </NextLink>
            </Box>
        </Flex>
    );
}
