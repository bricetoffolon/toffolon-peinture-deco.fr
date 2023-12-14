import React from 'react';

import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { step } from '@/constant/serviceInformation';

export default function StepsIcon({ stepElement }: { stepElement: step }) {
    return (
        <Flex direction="column" gap={2} textAlign="center" alignItems="center">
            <Flex mb="1%">
                <Box
                    m="5%"
                    boxSize="5em"
                    bg="brand.500"
                    padding="10%"
                    color="blue.200"
                    borderRadius="lg" // Set the border-radius for the box
                    boxShadow="xl"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    rounded="full"
                >
                    <Icon as={stepElement.Icon} boxSize="70%" color="white" />
                </Box>
            </Flex>
            <Flex direction="column" gap={2}>
                <Heading size="md" color="brand.400">
                    {stepElement.title}
                </Heading>
                <Text fontSize="md" as="b" color="gray.500">
                    {stepElement.label}
                </Text>
            </Flex>
        </Flex>
    );
}
