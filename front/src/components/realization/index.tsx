import React, {ReactElement, useEffect, useState} from 'react';
import {
    SimpleGrid,
    Text,
    Flex,
    Heading,
    Stack,
    Icon,
    useColorModeValue,
    Stat,
    StatNumber,
    StatHelpText, Container, Box,
} from '@chakra-ui/react';
import { IoImages, IoTimerSharp } from 'react-icons/io5';
import {useApiCallDataResp} from "@/hook/useApiCall";
import { motion } from 'framer-motion';
import DisplayPostsByPage from "@/components/posts/displayPostsByPage";

const MotionBox = motion(Box);

function Feature({ text, icon, iconBg, statNumber, statHelpText }: { text: string; icon: ReactElement,  iconBg: string, statNumber: number, statHelpText: string }) {
    return (
        <Flex direction={"column"} alignItems={"center"}>
            <Stack direction="row" align="center" spacing={4}>
                <Flex w={10} h={10} align="center" justify="center" rounded="full" bg={iconBg}>
                    {icon}
                </Flex>
                <Text fontWeight={600} fontSize={{ base: 'sm', md: 'md' }} textAlign="left">
                    {text}
                </Text>
            </Stack>
            <Stat>
                <StatNumber textAlign="center" fontSize={{ base: 'lg', md: 'xl', lg: 'xl' }}>
                    {statNumber}
                </StatNumber>
                <StatHelpText>{statHelpText}</StatHelpText>
            </Stat>
        </Flex>
    );
}

export default function Realisations() {
    const [response, setResponse] = useState<PostsApiResponse>(null);
    const [sortedPosts, setSortedPosts] = useState<Post[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);

    useApiCallDataResp('get', '/post', null, response, setResponse);

    useEffect(() => {
        if (response && response.data && "posts" in response.data) {
            setSortedPosts(response.data.posts);
        }
    }, [response]);

    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 1960;
    const totalPosts = sortedPosts ? sortedPosts.length : 0;


    return (
        <Container maxW="container.xl" py={8}>
            <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Heading as="h1" size="xl" mb={8}>
                    Découvrez Nos Réalisations
                </Heading>


                {/* Stats Section */}
                <SimpleGrid columns={{ md: 3 }} spacing={6} mb={8}>
                    {/* Number of Posts */}
                    <Feature
                        icon={<Icon as={IoImages} color="purple.500" w={6} h={6} />}
                        iconBg={useColorModeValue('purple.100', 'purple.900')}
                        text="Nombre de Posts"
                        statNumber={totalPosts}
                        statHelpText={"Sélection de projets que nous avons réalisés"}
                    />

                    <Feature
                        icon={<Icon as={IoTimerSharp} color="teal.500" w={6} h={6} />}
                        iconBg={useColorModeValue('teal.100', 'teal.900')}
                        text="Années d'expérience"
                        statNumber={yearsOfExperience}
                        statHelpText={"Depuis 1960"}
                    />
                </SimpleGrid>
            {sortedPosts && sortedPosts.length > 0 && (<DisplayPostsByPage posts={posts} setPosts={setPosts} sortedPosts={sortedPosts} isEditing={false}/>)}
            </MotionBox>
        </Container>
    );
}
