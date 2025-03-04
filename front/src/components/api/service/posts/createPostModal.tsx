import {
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormHelperText,
    IconButton,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    SimpleGrid,
    Skeleton,
    Text,
    Textarea,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import { AddIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import useAddPost from '@/hook/useAddPost';

export default function CreatePostModal({
    posts,
    setPosts,
}: {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [editMode, setEditMode] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post>();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [tempImages, setTempImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const toast = useToast();

    const handleImageUpload = (e: any) => {
        const files: File[] = Array.from(e.target.files);

        if (tempImages.length + files.length > 5) {
            toast({
                title: 'Maximum 5 images allowed',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        const newImages = files
            .map((file) => {
                // Validate file size (3MB = 3 * 1024 * 1024 bytes)
                if (file.size > 3 * 1024 * 1024) {
                    toast({
                        title: `${file.name} exceeds 3MB limit`,
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                    });
                    return null;
                }

                return {
                    file,
                    name: file.name,
                    size: file.size,
                    type: file.type,
                };
            })
            .filter(Boolean); // Remove null entries

        setTempImages((prev) => [...prev, ...newImages]);
    };

    useAddPost(
        '/post',
        {
            title: selectedPost && selectedPost.title ? selectedPost.title : null,
            content: selectedPost && selectedPost.content ? selectedPost.content : null,
        },
        isSubmit,
        setIsSubmit,
        tempImages
    );

    // Function to remove a temporary image
    const removeTempImage = (index: number) => {
        setTempImages((prev) => prev.filter((_, idx) => idx !== index));
    };

    const handlePostSelect = (post: Post, mode: string) => {
        setSelectedPost({ ...post });
        setEditMode(mode === 'edit');
        onOpen();
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setSelectedPost({
            ...selectedPost,
            [name]: value,
        });
    };

    const handleUpdatePost = async () => {
        // Simulate API call for updating post
        setIsLoading(true);
        try {
            // Update local state
            const updatedPosts = [...posts, selectedPost];
            // @ts-ignore
            setPosts(updatedPosts);
            setIsSubmit(true);

            toast({
                title: 'Post updated',
                description: 'Your post has been successfully updated.',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });

            onClose();
        } catch (error) {
            toast({
                title: 'Error updating post',
                description: 'Unable to update post. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Button
                leftIcon={<AddIcon />}
                bg="brand.500"
                color="white"
                _hover={{ bg: 'brand.600' }}
                onClick={() =>
                    handlePostSelect(
                        {
                            id: posts ? Math.max(...posts.map((p) => p.id || 0), 0) + 1 : 0,
                            title: '',
                            content: '',
                            image: [{ id: 0, url: '' }],
                        },
                        'edit'
                    )
                }
            >
                New Post
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay backdropFilter="blur(2px)" />
                <ModalContent>
                    <ModalHeader color="brand.600">
                        {editMode && posts !== null
                            ? selectedPost?.id && posts.find((p) => p.id === selectedPost.id)
                                ? 'Edit Post'
                                : 'Create New Post'
                            : 'View Post'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider />

                    <ModalBody py={6}>
                        {posts !== null &&
                        selectedPost?.id &&
                        posts.find((p) => p.id === selectedPost.id) ? (
                            <Box>
                                {/* Image Gallery for Edit Mode */}
                                {selectedPost.image && selectedPost.image.length > 0 ? (
                                    <Box
                                        borderWidth="1px"
                                        borderRadius="md"
                                        overflow="hidden"
                                        mt={2}
                                    >
                                        <Image
                                            src={
                                                selectedPost.image[currentImageIndex]?.url ||
                                                'https://source.unsplash.com/random/800x600/?placeholder'
                                            }
                                            alt={`${selectedPost.title} - image ${currentImageIndex + 1}`}
                                            objectFit="cover"
                                            width="100%"
                                            height="200px"
                                            fallback={<Skeleton height="200px" />}
                                        />

                                        {/* Image Navigation Controls */}
                                        {selectedPost.image.length > 1 && (
                                            <Flex justify="center" py={2} bg="gray.50">
                                                <Button
                                                    size="sm"
                                                    onClick={() =>
                                                        setCurrentImageIndex((prev) =>
                                                            prev > 0
                                                                ? prev - 1
                                                                : selectedPost.image.length - 1
                                                        )
                                                    }
                                                    mr={2}
                                                    leftIcon={<ChevronLeftIcon />}
                                                >
                                                    Prev
                                                </Button>
                                                <Text
                                                    alignSelf="center"
                                                    fontSize="sm"
                                                    color="gray.600"
                                                >
                                                    {currentImageIndex + 1} /{' '}
                                                    {selectedPost.image.length}
                                                </Text>
                                                <Button
                                                    size="sm"
                                                    onClick={() =>
                                                        setCurrentImageIndex((prev) =>
                                                            prev < selectedPost.image.length - 1
                                                                ? prev + 1
                                                                : 0
                                                        )
                                                    }
                                                    ml={2}
                                                    rightIcon={<ChevronRightIcon />}
                                                >
                                                    Next
                                                </Button>
                                            </Flex>
                                        )}
                                    </Box>
                                ) : (
                                    <Box
                                        borderWidth="1px"
                                        borderRadius="md"
                                        overflow="hidden"
                                        mt={2}
                                    >
                                        <Image
                                            src="https://source.unsplash.com/random/800x600/?placeholder"
                                            alt="No image available"
                                            objectFit="cover"
                                            width="100%"
                                            height="200px"
                                            fallback={<Skeleton height="200px" />}
                                        />
                                    </Box>
                                )}
                            </Box>
                        ) : (
                            <Box borderWidth="1px" borderRadius="md" p={4} mb={4} bg="gray.50">
                                <Text fontWeight="medium" mb={3} color="gray.700">
                                    Upload Images (Max 5)
                                </Text>
                                <Box>
                                    {/* Preview Uploaded Images */}
                                    {tempImages.length > 0 && (
                                        <SimpleGrid columns={[1, 2, 3]} spacing={4} mb={4}>
                                            {tempImages.map((img, idx) => (
                                                <Box key={idx} position="relative">
                                                    <Image
                                                        src={URL.createObjectURL(img.file)}
                                                        alt={`Upload preview ${idx}`}
                                                        borderRadius="md"
                                                        width="100%"
                                                        height="100px"
                                                        objectFit="cover"
                                                    />
                                                    <IconButton
                                                        icon={<CloseIcon />}
                                                        size="xs"
                                                        colorScheme="red"
                                                        position="absolute"
                                                        top={1}
                                                        right={1}
                                                        onClick={() => removeTempImage(idx)}
                                                        aria-label="Remove image"
                                                    />
                                                </Box>
                                            ))}
                                        </SimpleGrid>
                                    )}

                                    {/* Upload Control */}
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            display="none"
                                            id="image-upload"
                                            isDisabled={tempImages.length >= 5}
                                        />
                                        <FormHelperText mb={2}>
                                            Images must be under 3MB each. {5 - tempImages.length}{' '}
                                            slots remaining.
                                        </FormHelperText>
                                        <Button
                                            as="label"
                                            htmlFor="image-upload"
                                            colorScheme="brand"
                                            leftIcon={<AddIcon />}
                                            isDisabled={tempImages.length >= 5}
                                            cursor="pointer"
                                            width={['100%', 'auto']}
                                        >
                                            Add Image
                                        </Button>
                                    </FormControl>
                                </Box>
                            </Box>
                        )}

                        {selectedPost && (
                            <Flex direction="column" gap={5}>
                                <Box>
                                    <Text fontWeight="medium" mb={1} color="gray.600">
                                        Post ID
                                    </Text>
                                    <Input
                                        value={selectedPost.id || 'New Post'}
                                        isReadOnly
                                        bg="gray.100"
                                    />
                                </Box>

                                <Box>
                                    <Text fontWeight="medium" mb={1} color="gray.600">
                                        Title
                                    </Text>
                                    <Input
                                        name="title"
                                        value={selectedPost.title || ''}
                                        onChange={handleInputChange}
                                        isReadOnly={!editMode}
                                        borderColor={editMode ? 'brand.300' : 'gray.200'}
                                        focusBorderColor="brand.400"
                                    />
                                </Box>

                                <Box>
                                    <Text fontWeight="medium" mb={1} color="gray.600">
                                        Content
                                    </Text>
                                    <Textarea
                                        name="content"
                                        value={selectedPost.content || ''}
                                        onChange={handleInputChange}
                                        isReadOnly={!editMode}
                                        rows={6}
                                        borderColor={editMode ? 'brand.300' : 'gray.200'}
                                        focusBorderColor="brand.400"
                                    />
                                </Box>
                            </Flex>
                        )}
                    </ModalBody>

                    <ModalFooter gap={3}>
                        <Button
                            colorScheme="brand"
                            onClick={handleUpdatePost}
                            isLoading={isLoading}
                            loadingText="Saving..."
                        >
                            Create
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
