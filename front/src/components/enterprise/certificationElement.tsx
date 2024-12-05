import React from 'react';

import { Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { certification } from '@/constant/certifications';

export default function CertificationElement({ props }: { props: certification }) {
    return (
        <Flex direction="column" alignItems="center" gap={3} maxW={"5%"}>
            <Icon
                as={props.icon}
                boxSize="5.5em"
                bg="brand.400"
                padding="10px"
                color="white"
                borderRadius="lg"
                display="flex"
                justifyContent="center"
                alignItems="center"
            />
            <Heading textAlign="center" size="md" maxW={{ base: '90vw', xl: '50vw' }}>
                {props.name}
            </Heading>
        </Flex>
    );
}
