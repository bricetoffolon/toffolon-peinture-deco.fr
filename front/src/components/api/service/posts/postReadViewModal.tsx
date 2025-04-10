import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Flex,
    Box,
    Image,
    Heading,
    Text,
    Button,
    AspectRatio,
    Badge,
    useColorModeValue,
    Skeleton
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


const PostReadViewModal = ({ isOpen, onClose, post }: {isOpen: boolean, onClose: () => void, post: Post}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const textColor = useColorModeValue('gray.700', 'gray.100');
    const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

    const images = post?.image || [];

    const nextImage = () => {
        if (images.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (images.length > 1) {
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    const mainImageUrl = images[currentImageIndex]?.url || 'https://via.placeholder.com/800x600?text=No+Image+Available';

    if (!post) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="5xl" scrollBehavior="inside">
            <ModalOverlay backdropFilter="blur(3px)" />
            <ModalContent bg={bgColor} overflow="hidden">
                <ModalBody p={0}>
                    <Flex direction={{ base: 'column', lg: 'row' }} h={{ lg: '70vh' }}>
                        <Box
                            w={{ base: '100%', lg: '55%' }}
                            borderRight={{ lg: '1px' }}
                            borderColor={{ lg: borderColor }}
                            position="relative"
                        >
                            <AspectRatio ratio={4/3} w="full" h="100%">
                                <Box position="relative" overflow="hidden">
                                    <Image
                                        src={mainImageUrl}
                                        alt={`Post image ${currentImageIndex + 1}`}
                                        objectFit="cover"
                                        w="100%"
                                        h="100%"
                                        fallback={<Skeleton w="100%" h="100%" />}
                                    />

                                    {images.length > 1 && (
                                        <Badge
                                            position="absolute"
                                            bottom="10px"
                                            right="10px"
                                            px={2}
                                            py={1}
                                            borderRadius="md"
                                            bg="blackAlpha.700"
                                            color="white"
                                        >
                                            {currentImageIndex + 1} / {images.length}
                                        </Badge>
                                    )}

                                    {images.length > 1 && (
                                        <>
                                            <Button
                                                position="absolute"
                                                left="10px"
                                                top="50%"
                                                transform="translateY(-50%)"
                                                borderRadius="full"
                                                size="sm"
                                                colorScheme="blackAlpha"
                                                onClick={prevImage}
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeftIcon boxSize={5} />
                                            </Button>
                                            <Button
                                                position="absolute"
                                                right="10px"
                                                top="50%"
                                                transform="translateY(-50%)"
                                                borderRadius="full"
                                                size="sm"
                                                colorScheme="blackAlpha"
                                                onClick={nextImage}
                                                aria-label="Next image"
                                            >
                                                <ChevronRightIcon boxSize={5} />
                                            </Button>
                                        </>
                                    )}
                                </Box>
                            </AspectRatio>
                        </Box>

                        <Box w={{ base: '100%', lg: '45%' }} p={6} overflow="auto" h={{ lg: '100%' }}>
                            <Flex direction="column" h="full">
                                <Box mb={3}>
                                    <Heading as="h1" size="lg" color={textColor} mb={4}>
                                        {post.title}
                                    </Heading>
                                </Box>

                                <Box flex="1" overflowY="auto" pr={2} css={{
                                    '&::-webkit-scrollbar': {
                                        width: '8px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        width: '10px',
                                        background: useColorModeValue('gray.100', 'gray.700'),
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        background: useColorModeValue('gray.300', 'gray.600'),
                                        borderRadius: '24px',
                                    },
                                }}>
                                    <Text color={secondaryTextColor} whiteSpace="pre-wrap" fontSize="md" lineHeight="tall">
                                        {post.content || 'No content available for this post.'}
                                    </Text>
                                </Box>
                                <Button onClick={onClose} size="md" variant="outline">
                                    Close
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default PostReadViewModal;