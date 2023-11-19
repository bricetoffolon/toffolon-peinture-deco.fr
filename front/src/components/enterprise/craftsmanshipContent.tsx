import React from 'react';
import { Flex, Heading, Text, Icon } from '@chakra-ui/react';

import { FaSeedling } from 'react-icons/fa';
import { entrepriseInformation } from '@/constant/entrepriseInformation';

export default function CraftsmanshipContent(): React.JSX.Element {
    return (
        <Flex alignItems="center" direction="column" gap={6}>
            <Flex alignItems="center" gap={3}>
                <Icon
                    as={FaSeedling}
                    boxSize={{ base: '5em', xl: '8em' }}
                    color="brand.500"
                    justifyContent="center"
                    alignItems="center"
                />
                <Heading size={{ base: 'lg', xl: '2xl' }}>{entrepriseInformation[2].title}</Heading>
            </Flex>
            <Text as="b" color="gray.500" fontSize={{ base: '2xl', xl: '3xl' }} maxW="80vw">
                {entrepriseInformation[2].paragraph}
            </Text>
        </Flex>
    );
}
