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
import React, {SetStateAction} from 'react';

export default function ServiceCardLanding({service, isOpen, setIsOpen}: { service: service, isOpen: boolean, setIsOpen: React.Dispatch<SetStateAction<boolean>> }) {
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
                        {service.name}
                    </Heading>
                    <Button onClick={() => setIsOpen(!isOpen)}>En savoirs plus</Button>
                </Flex>
            </CardHeader>
            <CardBody>
                <Image
                    src={service.imageUrl}
                    alt={service.name}
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
