import { Box, Heading, Text, Image, Button, Stack, Flex } from "@chakra-ui/react";

export default function ServiceTemplate({index, title, description, image, callToAction }) {
    const direction = index % 2 === 0 ? "row-reverse" : "row";

    return (
        <Box as="section" minH="93vh" bg="gray.50">
            <Flex
                direction={{ base: "column", md: direction }}
                align="center"
                justify="center"
                maxW="1200px"
                h={"93vh"}
                mx="auto"
                gap={8}
            >
                <Box flex="1" maxW="600px">
                    <Image
                        src={image.imageUrl}
                        alt={image.imageAlt}
                        borderRadius="md"
                        shadow="lg"
                        w="100%"
                        objectFit="cover"
                    />
                </Box>
                {/* Left Content Section */}
                <Box flex="1" textAlign={{ base: "center", md: "left" }}>
                    <Heading as="h1" fontSize="4xl" mb={4} color="brand.600">
                        {title}
                    </Heading>
                    <Text fontSize="lg" mb={6} color="gray.700" lineHeight="1.8">
                        {description}
                    </Text>
                    <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify={{ base: "center", md: "start" }}>
                        <Button
                            as="a"
                            href="#contact"
                            bg="brand.500"
                            color="white"
                            _hover={{ bg: "brand.600" }}
                            size="lg"
                        >
                            {callToAction}
                        </Button>
                    </Stack>
                </Box>

                {/* Right Image Section */}
            </Flex>
        </Box>
    );
}