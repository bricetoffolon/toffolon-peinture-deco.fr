import React from 'react';

import { Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { certification } from '@/constant/certifications';

export default function CertificationElement({ props }: { props: certification }) {
    return (
        <Flex direction="column" alignItems="center" gap={3}>
            <Icon
                as={props.icon}
                boxSize="8em"
                bg="brand.500"
                padding="5%"
                color="blue.200"
                borderRadius="lg"
                boxShadow="xl"
                display="flex"
                justifyContent="center"
                alignItems="center"
            />
            <Heading textAlign="center" size="md" maxW={{ base: '90vw', xl: '50vw' }}>
                {props.name}
            </Heading>
            <Text
                textAlign="center"
                as="b"
                color="gray.500"
                fontSize={{ base: 'md', xl: 'sm' }}
                maxW={{ base: '90vw', xl: '30vw' }}
            >
                {props.description}
            </Text>
            {props.url ? (
                <NextLink href={props.url} passHref>
                    <Button>En savoirs plus</Button>
                </NextLink>
            ) : null}
        </Flex>
    );
}
