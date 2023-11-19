import React from 'react';
import { Flex, Heading, Img, Text } from '@chakra-ui/react';

export default function PersonPresentation({
    name,
    title,
    picture,
}: {
    name: string;
    title: string;
    picture: string;
}): React.JSX.Element {
    return (
        <Flex alignItems="center" direction="column">
            <Img src={picture} w={{ base: '60vw', xl: '25vw' }} borderRadius="lg" alt="owner" />
            <Heading mt="1%" color="brand.500" size={{ base: 'lg', xl: '2xl' }}>
                {name}
            </Heading>
            <Text as="b" color="brand.400" fontSize={{ base: 'lg', xl: '2xl' }}>
                {title}
            </Text>
        </Flex>
    );
}
