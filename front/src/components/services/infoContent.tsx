import React from 'react';
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import StepsIcon from '@/components/services/stepsIcon';
import { step, service } from '@/constant/serviceInformation';

export default function InfoContent({
    serviceElement,
    onClose,
}: {
    serviceElement: service;
    onClose: () => void;
}): React.JSX.Element {
    const isSmallDevice = useBreakpointValue({ base: true, xl: false });

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {serviceElement.content ? (
                <Box
                    boxShadow={{
                        base: undefined,
                        xl: 'xl',
                    }}
                    padding="5%"
                    borderRadius="lg"
                    w={{
                        base: '85vw',
                        xl: '95vw',
                    }}
                    alignSelf="center"
                >
                    <Button mb="1%" onClick={onClose}>
                        Retour
                    </Button>
                    <Stack>
                        <Flex alignItems="center" direction="row" gap={6}>
                            {isSmallDevice ? null : (
                                <Image
                                    src={serviceElement.imageUrl}
                                    alt={serviceElement.name}
                                    borderRadius="lg"
                                    w={{
                                        base: '15vw',
                                        xl: '15vw',
                                    }}
                                    h={{
                                        base: '15vh',
                                        xl: '15vh',
                                    }}
                                />
                            )}
                            <Flex direction="column">
                                <Heading size={{ base: 'lg', xl: '2xl' }} color="brand.500">
                                    {serviceElement.name}
                                </Heading>
                                <Text fontSize={{ base: 'sm', xl: '2xl' }} as="b" color="brand.400">
                                    {serviceElement.content.label}
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            mt="2%"
                            direction="column"
                            alignContent={{
                                base: 'center',
                                xl: 'left',
                            }}
                            gap="6"
                        >
                            <Heading color="brand.500" size={{ base: 'md', xl: '2xl' }}>
                                Que faisons-nous ?
                            </Heading>
                            <Text fontSize={{ base: 'md', xl: '2xl' }} as="b" color="gray.500">
                                {serviceElement.content.description}
                            </Text>
                            <Flex
                                gap={6}
                                mt="2%"
                                direction={{
                                    base: 'column',
                                    xl: 'row',
                                }}
                            >
                                {serviceElement.content.steps.map((stepElement: step) => {
                                    return <StepsIcon stepElement={stepElement} />;
                                })}
                            </Flex>
                        </Flex>
                    </Stack>
                </Box>
            ) : null}
        </>
    );
}
