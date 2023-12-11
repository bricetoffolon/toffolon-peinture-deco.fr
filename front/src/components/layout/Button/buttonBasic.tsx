import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import NextLink from 'next/link';
import { buttonProps } from '@/components/layout/Button/contactButton';

export default function ButtonBasic({ props }: { props: buttonProps }): React.JSX.Element {
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {props.href !== undefined ? (
                <NextLink href={props.href} passHref>
                    <Button
                        variant={props.variant ? props.variant : 'ghost'}
                        _hover={{
                            bg: 'brand.250',
                            shadow: 'base',
                        }}
                        leftIcon={<Icon as={props.icon} color="brand.500" />}
                        textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                        fontSize={props.fontSize ? props.fontSize : undefined}
                        padding={props.padding ? props.padding : undefined}
                        rounded={props.rounded ? 'full' : undefined}
                    >
                        {props.name}
                    </Button>
                </NextLink>
            ) : null}
        </>
    );
}
