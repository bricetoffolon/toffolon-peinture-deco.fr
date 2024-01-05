import React, { useState } from 'react';

import { Box, Button, Flex, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';

import Post from '@/components/api/posts/post';

import { AnimatePresence, motion } from 'framer-motion';
import { useApiCallDataResp } from '@/hook/useApiCall';

const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);

export default function GetPosts({
    admin,
    response,
    setResponse,
}: {
    admin: boolean;
    response: any; // eslint-disable-line
    setResponse: any; // eslint-disable-line
}): React.JSX.Element {

    useApiCallDataResp(
        'get',
        '/post',
        null,
        response &&
            response.data &&
            response.data.length > 0 &&
            !Object.prototype.hasOwnProperty.call(response.data[0], 'id')
            ? null
            : response,
        setResponse
    );

    const [currentPage, setCurrentPage] = useState(0);
    const valueForSize = useBreakpointValue({ base: 1, xl: 4 });
    const postsPerPage = valueForSize !== undefined ? valueForSize : 4;

    const totalPages =
        response && response.data ? Math.ceil(response.data.length / postsPerPage) : 1;

    const [direction, setDirection] = useState<number>(0);

    const paginate = (newPage: number) => {
        setDirection(newPage > currentPage ? 1 : -1);
        setCurrentPage(newPage);
    };

    const variants = {
        enter: () => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
        exit: () => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: [1, 1, 0],
            transition: { duration: 0.5, ease: 'easeInOut', times: [0, 0.48, 1] },
        }),
    };

    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <Box whiteSpace="nowrap" padding="1%">
                    {response &&
                    response.data &&
                    response.data[0] &&
                    response.data.length > 0 &&
                    Object.prototype.hasOwnProperty.call(response.data[0], 'id') ? (
                        <MotionGrid
                            templateColumns={`repeat(${postsPerPage}, 1fr)`}
                            gap={6}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            key={currentPage}
                            align="center"
                        >
                            {response.data
                                .slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)
                                    .map((post: any) => ( // eslint-disable-line
                                            // eslint-disable-line
                                        <MotionGridItem
                                            key={post.id}
                                            variants={variants}
                                            custom={direction}
                                        >
                                            <Post
                                                data={{
                                                    id: post.id,
                                                    title: post.title,
                                                    content: post.content,
                                                    image: post.image,
                                                }}
                                                admin={admin}
                                                setResponse={setResponse}
                                            />
                                        </MotionGridItem>
                                    )
                                )}
                        </MotionGrid>
                    ) : null}
                </Box>
            </AnimatePresence>

            <Flex justifyContent="center" mt="1%">
                <Box borderRadius="2xl" padding="1%" bg="gray.300" mt="1%">
                    <Flex gap={6}>
                        {[...Array(totalPages).keys()].map((index) => (
                            <Button
                                key={index}
                                h={{
                                    base: '1em',
                                    xl: '0.5em',
                                }}
                                onClick={() => paginate(index)}
                                isActive={index === currentPage}
                                _active={{
                                    bg: 'brand.500',
                                }}
                            />
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </>
    );
}
