import React, {useState} from "react";
import {Button, Flex, Grid, IconButton} from "@chakra-ui/react";
import {ButtonGroup, ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Post from "@/components/posts/post";

export default function DisplayPostsByPage({ sortedPosts, posts, setPosts, isEditing=true }: { sortedPosts: Post[], posts: Post[], setPosts:React.Dispatch<React.SetStateAction<Post[]>>, isEditing?: boolean}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const totalPosts = sortedPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const paginate = (pageNumber: number) => {setCurrentPage(pageNumber);};
    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    const currentPagePosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

    const getPageNumbers = () => {
        const pageNumbers = [];
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    return (
        <>
            <Grid
                templateColumns={{
                    base: '1fr',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                }}
                gap={6}
            >
                {currentPagePosts.map((post) => (
                    <Post
                        key={post.id}
                        data={post}
                        posts={posts}
                        setPosts={setPosts}
                        isEditing={isEditing}
                    />
                ))}
            </Grid>
            <Flex
                justify="center"
                align="center"
                mt={8}
                p={4}
                borderRadius="lg"
                borderWidth="1px"
                gap={'6'}
            >
                <IconButton
                    icon={<ChevronLeftIcon />}
                    isDisabled={currentPage === 1}
                    onClick={prevPage}
                    aria-label="Next page"
                    variant="outline"
                    colorScheme="brand"
                />
                <ButtonGroup spacing={2} variant="outline">
                    {getPageNumbers().map((number) => (
                        <Button
                            key={number}
                            onClick={() => paginate(number)}
                            colorScheme="brand"
                            variant={currentPage === number ? 'solid' : 'outline'}
                        >
                            {number}
                        </Button>
                    ))}
                </ButtonGroup>
                <IconButton
                    icon={<ChevronRightIcon />}
                    isDisabled={currentPage === totalPages}
                    onClick={nextPage}
                    aria-label="Next page"
                    variant="outline"
                    colorScheme="brand"
                />
            </Flex>
        </>
    );
}