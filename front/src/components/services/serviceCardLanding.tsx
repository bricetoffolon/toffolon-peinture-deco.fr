import React from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Image,
    Button,
} from '@chakra-ui/react';

import { service } from '@/constant/serviceInformation';

export default function ServiceCardLanding({
    serviceElement,
    onOpen,
}: {
    serviceElement: service;
    onOpen: () => void;
}) {
    return (
        <Card
            style={{
                scrollSnapAlign: 'start',
            }}
            borderColor="whiteAlpha.500"
            variant={{
                base: 'elevated',
                xl: 'unstyled',
            }}
            h="100vh"
        >
            <CardHeader>
                <Flex alignItems="center" direction="column" gap={6} m="1%">
                    <Heading color="brand.500" size="xl">
                        {serviceElement.name}
                    </Heading>
                    <Button onClick={onOpen}>En savoirs plus</Button>
                </Flex>
            </CardHeader>
            <CardBody>
                <Image
                    src={serviceElement.imageUrl}
                    alt={serviceElement.name}
                    borderRadius="lg"
                    w={{
                        base: '100vw',
                        xl: '70vw',
                    }}
                    h={{
                        base: '30vh',
                        xl: '70vh',
                    }}
                />
            </CardBody>
            <CardFooter />
        </Card>
    );
}
