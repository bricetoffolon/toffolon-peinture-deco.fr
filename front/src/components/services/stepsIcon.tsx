import React from 'react';

import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import {step} from "@/constant/serviceInformation";

export default function StepsIcon({ step }: {step: step}) {
    return (
        <Flex direction="column" gap={2} alignItems={{base: "center", xl: "left"}}>
            <Flex>
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
                <Heading size="lg" textAlign="left">
                    {step.title}
                </Heading>
                <Text fontSize="lg">{step.label}</Text>
            </Flex>
        </Flex>
    );
}
