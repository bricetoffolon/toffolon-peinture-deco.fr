import React from 'react';
import { Button, Icon, Flex, Box, keyframes } from '@chakra-ui/react';
import { IoChevronDown } from 'react-icons/io5';

// Keyframes for bounce animation
const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(10px);
    }
    60% {
        transform: translateY(5px);
    }
`;

export default function SwipeDownButton() {
    const animation = `${bounce} 2s infinite`;

    return (
        <Flex justify="center">
            <Button
                variant="ghost"
                size="lg"
                color="blue.400"
                _hover={{ color: 'blue.600' }}
                aria-label="Scroll Down"
            >
                {/* Wrap the Icon in a Box to enable animation */}
                <Box animation={animation}>
                    <Icon as={IoChevronDown} w={6} h={6} />
                </Box>
            </Button>
        </Flex>
    );
}
