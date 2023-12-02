import React from 'react';

import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { step } from '@/constant/serviceInformation';

export default function StepsIcon({ step }: { step: step }) {
    return (
        <Flex direction="column" gap={2} textAlign="center" alignItems="center">
            <Flex mb="1%">
                <Box
                    m="5%"
                    boxSize="8em"
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
                    <Icon as={step.Icon} boxSize="70%" color="white" />
                </Box>
            </Flex>
            <Flex direction="column" gap={2}>
                <Heading size="lg" color="brand.400">
                    {step.title}
                </Heading>
                <Text fontSize="lg" as="b" color="gray.500">
                    {step.label}
                </Text>
            </Flex>
        </Flex>
    );
}
