import { Box, Heading, Text, Image, Button, Flex, AspectRatio } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function ServiceTemplate({ index, title, description, image, callToAction }) {
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
            direction={direction}
            align="center"
            justify="center"
            maxW="1200px"
            padding="1%"
            gap={{ base: 1, sm: 4, md: 8 }} // Remove gap for smaller screens, add for tablets/desktops
            minH="100vh"
        >
            {/* Image Section */}
            <AspectRatio
                maxW={{ base: '100%', md: '50%' }} // Full width on portrait, half width on tablets/desktops
                ratio={4 / 3}
                w="100%"
                flexShrink={0}
            >
                <Image
                    src={image.imageUrl || 'https://via.placeholder.com/400'}
                    alt={image.imageAlt || 'Default Image'}
                    borderRadius="md"
                    shadow="lg"
                    objectFit="cover"
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
                <Button
                    as="a"
                    href="#contact"
                    bg="brand.500"
                    color="white"
                    _hover={{ bg: 'brand.600' }}
                    size="lg"
                >
                    {callToAction}
                </Button>
            </Box>
        </Flex>
    );
}
