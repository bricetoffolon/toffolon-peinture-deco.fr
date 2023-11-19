import React from 'react';

import NextLink from 'next/link';

import { Button, Icon } from '@chakra-ui/react';

import { FaEnvelope } from 'react-icons/fa';

export default function ContactButton({
    fontSize,
    padding,
    addIcon,
}: {
    fontSize?: string;
    padding: string;
    addIcon: boolean;
}): React.JSX.Element {
    return (
        <NextLink href="/contact" passHref>
            <Button
                bg="brand.500"
                boxShadow="2xl"
                leftIcon={addIcon || addIcon == undefined ? <Icon as={FaEnvelope} /> : undefined}
                transition="transform 0.3s"
                _hover={{
                    transform: 'scale(1.1)',
                }}
                _active={{
                    transform: 'scale(0.8)',
                }}
                fontSize={fontSize}
                color="white"
                padding={padding}
                textShadow="2px 2px 4px rgba(0,0,0,0.4)"
            >
                Nous contacter
            </Button>
        </NextLink>
    );
}
