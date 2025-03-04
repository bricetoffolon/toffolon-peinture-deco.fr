import React, { useState } from 'react';
import {
    Card,
    CardBody,
    Text,
    Heading,
    Image,
    Skeleton,
    useDisclosure,
    CardFooter,
    IconButton,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { CardHeader, DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { useApiCallToastResp } from '@/hook/useApiCall';
import PostReadViewModal from '@/components/api/service/posts/postReadViewModal';

export default function Post({
    data,
    posts,
    setPosts,
    isEditing,
}: {
    data: Post;
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
    isEditing: boolean;
}): React.JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isSubmit, setIsSubmit] = useState(false);

    useApiCallToastResp('delete', `/post/${data.id}`, null, isSubmit, setIsSubmit);

    const handleDeletion = async () => {
        setIsSubmit(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        const updatedPosts = posts.filter((post) => data.id !== post.id);
        setPosts(updatedPosts);
    };

    return (
        <>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                }}
            >
                    <Card maxW={'sm'} h={'sm'} shadow="md" onClick={onOpen} as={'button'}>
                        <CardHeader position={'relative'} overflow={'hidden'} h={'200px'} p={0}>
                            <Image
                                src={
                                    data.image[0]?.url ||
                                    'https://source.unsplash.com/random/800x600/?placeholder'
                                }
                                fallback={<Skeleton height="200px" />}
                                borderRadius={'lg'}
                                alt={data.title}
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </CardHeader>
                        <CardBody>
                            <Heading size={'md'} noOfLines={1}>
                                {data.title}
                            </Heading>
                            <Text noOfLines={2}>{data.content}</Text>
                        </CardBody>
                        <CardFooter justifyContent="space-between" mt={2}>
                            {isEditing ? (
                                <>
                                    <IconButton
                                        aria-label="View post"
                                        icon={<ViewIcon />}
                                        size="sm"
                                        colorScheme="blue"
                                        variant="ghost"
                                        onClick={onOpen}
                                    />
                                    <IconButton
                                        aria-label="Edit post"
                                        icon={<EditIcon />}
                                        size="sm"
                                        colorScheme="brand"
                                        variant="ghost"
                                        isDisabled
                                    />
                                    <IconButton
                                        aria-label="Delete post"
                                        icon={<DeleteIcon />}
                                        size="sm"
                                        colorScheme="red"
                                        variant="ghost"
                                        onClick={handleDeletion}
                                    />
                                </>
                            ) : null}
                        </CardFooter>
                    </Card>
            </motion.div>

            <PostReadViewModal post={data} isOpen={isOpen} onClose={onClose} />
        </>
    );
}
