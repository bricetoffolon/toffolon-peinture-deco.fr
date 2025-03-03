import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Heading,
    Input,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useToast,
    Skeleton,
    useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon, RepeatClockIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useApiCallDataResp } from '@/hook/useApiCall';
import CreatePostModal from '@/components/api/service/posts/createPostModal';
import DisplayPostsByPage from '@/components/posts/displayPostsByPage';

const MotionBox = motion(Box);

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPost, setSelectedPost] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const toast = useToast();

    const [response, setResponse] = useState<PostsApiResponse>(null);

    useApiCallDataResp('get', '/post', null, response, setResponse);

    const bgCard = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    useEffect(() => {
        setIsLoading(true);
        try {
            if (response && response.data && "posts" in response.data) {
                // Convert object to array if necessary
                const postsArray = Array.isArray(response.data)
                    ? response.data
                    : Object.values(response.data.posts);
                setPosts(postsArray);
            }
        } catch (error) {
            console.error('Error processing posts data:', error);
            toast({
                title: 'Error loading posts',
                description: 'Unable to process posts data. Please try again later.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    }, [response, toast]);

    const filteredPosts = Array.isArray(posts)
        ? posts.filter(
              (post) =>
                  (post.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                  (post.content?.toLowerCase() || '').includes(searchQuery.toLowerCase())
          )
        : [];

    const sortOptions = [
        { label: 'Newest First', value: 'newest' },
        { label: 'Oldest First', value: 'oldest' },
        { label: 'A-Z', value: 'a-z' },
        { label: 'Z-A', value: 'z-a' },
    ];

    const handleRefresh = async () => {
        setSelectedPost([]);
        setPosts([]);
        setResponse(null);
        setIsLoading(true);
    };

    const [sortMethod, setSortMethod] = useState(sortOptions[0]);

    const sortedPosts = [...filteredPosts].sort((a, b) => {
        switch (sortMethod.value) {
            case 'newest':
                return b.id - a.id;
            case 'oldest':
                return a.id - b.id;
            case 'a-z':
                return (a.title || '').localeCompare(b.title || '');
            case 'z-a':
                return (b.title || '').localeCompare(a.title || '');
            default:
                return 0;
        }
    });

    return (
        <Container maxW="container.xl" py={8}>
            <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Flex justifyContent="space-between" alignItems="center" mb={8}>
                    <Heading fontSize={{ base: '2xl', md: '3xl' }} color="brand.600">
                        Posts Management
                    </Heading>
                    <Flex gap={5} direction={{base: 'column', md: 'row'}}>
                        <CreatePostModal posts={posts} setPosts={setPosts} />
                        <Button leftIcon={<RepeatClockIcon />} onClick={handleRefresh}>
                            Refresh
                        </Button>
                    </Flex>
                </Flex>

                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    mb={6}
                    gap={4}
                    alignItems={{ base: 'stretch', md: 'center' }}
                >
                    <Flex
                        flex="1"
                        borderWidth="1px"
                        borderRadius="lg"
                        borderColor={borderColor}
                        alignItems="center"
                        px={4}
                        py={2}
                        bg={bgCard}
                    >
                        <SearchIcon color="gray.400" mr={2} />
                        <Input
                            placeholder="Search posts by title or content..."
                            border="none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            _focus={{ boxShadow: 'none' }}
                        />
                    </Flex>

                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            minW={{ base: 'full', md: '200px' }}
                            bg={bgCard}
                            borderWidth="1px"
                            borderColor={borderColor}
                        >
                            Sort: {sortMethod.label}
                        </MenuButton>
                        <MenuList>
                            {sortOptions.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    onClick={() => setSortMethod(option)}
                                    fontWeight={
                                        sortMethod.value === option.value ? 'bold' : 'normal'
                                    }
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>

                <Text mb={4} color="gray.500">
                    {Array.isArray(posts) ? posts.length : 0} posts
                </Text>

                {isLoading && (!Array.isArray(posts) || posts.length === 0) ? (
                    <Grid
                        templateColumns={{
                            base: '1fr',
                            md: 'repeat(2, 1fr)',
                            lg: 'repeat(3, 1fr)',
                        }}
                        gap={6}
                    >
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MotionBox
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                                <Box
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    overflow="hidden"
                                    borderColor={borderColor}
                                    bg={bgCard}
                                >
                                    <Heading>Hello</Heading>
                                    <Skeleton height="200px" />
                                    <Box p={5}>
                                        <Skeleton height="20px" width="70%" mb={2} />
                                        <Skeleton height="15px" mb={1} />
                                        <Skeleton height="15px" width="90%" />
                                    </Box>
                                </Box>
                            </MotionBox>
                        ))}
                    </Grid>
                ) : sortedPosts.length > 0 ? (
                    <DisplayPostsByPage sortedPosts={sortedPosts} posts={posts} setPosts={setPosts} />
                ) : (
                    <Flex
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        py={10}
                        bg={bgCard}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor={borderColor}
                    >
                        <Text fontSize="xl" mb={4} color="gray.500">
                            {searchQuery
                                ? 'No posts match your search criteria'
                                : 'No posts available'}
                        </Text>
                    </Flex>
                )}
            </MotionBox>
        </Container>
    );
};

export default Posts;
