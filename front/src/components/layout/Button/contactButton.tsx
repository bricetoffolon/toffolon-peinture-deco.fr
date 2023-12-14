import React from 'react';

import NextLink from 'next/link';

import { Button, Icon } from '@chakra-ui/react';

import { FaEnvelope } from 'react-icons/fa';

export interface buttonProps {
    fontSize?: string;
    padding?: string;
    href?: string;
    name?: string;
    icon?: React.ElementType;
    variant?: string;
    rounded?: boolean;
    info?: string;
    align?: boolean;
}

export default function ContactButton({ props }: { props: buttonProps }): React.JSX.Element {
    return (
        <NextLink href="/contact" passHref>
            <Button
                bg="brand.500"
                boxShadow="2xl"
                leftIcon={<Icon as={FaEnvelope} />}
                transition="transform 0.3s"
                _hover={{
                    transform: 'scale(1.1)',
                }}
                _active={{
                    transform: 'scale(0.8)',
                }}
                rounded={props && props.rounded ? 'full' : undefined}
                textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                fontSize={props && props.fontSize ? props.fontSize : undefined}
                color="white"
                padding={props && props.padding ? props.padding : undefined}
            >
                Nous contacter
            </Button>
        </NextLink>
    );
}
