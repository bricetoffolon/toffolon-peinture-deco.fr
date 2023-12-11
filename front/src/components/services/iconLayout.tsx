import React from 'react';

import { Icon, Text, Flex } from '@chakra-ui/react';

import { FaCheckCircle } from 'react-icons/fa';

export default function IconLayout({
    FaIcon,
    description,
}: {
    FaIcon: React.FC;
    description: string;
}): React.JSX.Element {
    return (
        <Flex
            m="1%"
            alignItems="center"
            direction="column"
            gap={3}
            _hover={{
                transition: '0.4s',
                color: 'brand.900',
                transform: 'scale(1.03)',
            }}
        >
            <Icon as={FaIcon} w="5vw" h="100%" />
            <Text as="b">{description}</Text>
            <Icon as={FaCheckCircle} />
        </Flex>
    );
}
