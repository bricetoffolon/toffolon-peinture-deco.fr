import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

import { entrepriseInformation } from '@/constant/entrepriseInformation';

export default function CraftsmanshipContent(): React.JSX.Element {
    return (
        <Flex alignItems="center" direction="column" gap={6}>
            <Heading size={{ base: 'lg', xl: '2xl' }}>{entrepriseInformation[2].title}</Heading>
            <Text as="b" color="gray.500" fontSize={{ base: '2xl', xl: '3xl' }} maxW="80vw">
                {entrepriseInformation[2].paragraph}
            </Text>
        </Flex>
    );
}
