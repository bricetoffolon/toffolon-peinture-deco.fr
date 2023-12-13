import React, { useState } from 'react';
import { Button, Flex, Heading, Box } from '@chakra-ui/react';

import NextLink from 'next/link';

import { FormValue } from '@/components/api/user/interface';

import UserForm from '@/components/api/user/userForm';
import { useApiCallDataResp, useApiCallToastResp } from '@/hook/useApiCall';

export default function Dashboard(): React.JSX.Element {
    const [response, setResponse] = useState<any>(''); // eslint-disable-line

    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValue>({});

    useApiCallDataResp('get', '/user', {}, response, setResponse);
    useApiCallToastResp(
        'post',
        'auth/login',
        { email: formValues.email, password: formValues.password },
        isSubmit,
        setIsSubmit
    );

    return (
        <Flex>
            {response !== 'error' ? (
                <Flex alignItems="center" justifyContent="center" direction="column" mt="1%">
                    {response.data && response.data.email ? (
                        <Heading textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)">
                            Welcome{' '}
                            <Heading as="span" color="brand.500">
                                {response.data.email}
                            </Heading>
                        </Heading>
                    ) : null}
                    <Box
                        margin="10%"
                        alignItems="center"
                        gap={6}
                        background="gray.200"
                        padding="5%"
                        borderRadius="lg"
                        boxShadow="xl"
                    >
                        <Flex direction="column" gap={6}>
                            <Heading textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)">
                                Manage your{' '}
                                <Heading as="span" color="brand.400">
                                    posts
                                </Heading>{' '}
                                ?
                            </Heading>
                            <NextLink href="redondo/posts" passHref>
                                <Button
                                    size="lg"
                                    boxShadow="xl"
                                    color="brand.400"
                                    _hover={{
                                        color: 'brand.500',
                                    }}
                                >
                                    Manage posts
                                </Button>
                            </NextLink>
                        </Flex>
                    </Box>
                </Flex>
            ) : (
                <Flex alignItems="center" justifyContent="center" direction="column" m="10%">
                    <UserForm
                        title="Connect to your account"
                        inputs={['email', 'password']}
                        formValues={formValues}
                        setFormValues={setFormValues}
                        setIsSubmit={setIsSubmit}
                    />
                </Flex>
            )}
        </Flex>
    );
}
