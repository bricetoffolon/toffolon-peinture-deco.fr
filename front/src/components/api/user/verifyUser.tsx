import React, { useState } from 'react';
import { Box, Button, Text, Flex, FormControl, Input, VStack, Divider } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useApiCallToastResp } from '@/hook/useApiCall';

export default function VerifyUser(): React.JSX.Element {
    const router = useRouter();

    const [isSubmit, setIsSubmit] = useState(false);
    const [reVerify, setReVerify] = useState(false);
    const [emailToVerify, setEmailToVerify] = useState<string | undefined>(undefined);

    useApiCallToastResp(
        'post',
        `/user/verify?key=${router.query.key}`,
        null,
        isSubmit,
        setIsSubmit
    );

    useApiCallToastResp('post', '/user/re-verify', { email: emailToVerify }, reVerify, setReVerify);

    const handleEmailToVerifyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailToVerify(e.target.value);
    };

    return (
        <Flex m={'1%'}>
            <Box
                p={8}
                borderWidth={[0, 1]}
                boxShadow={['none', 'lg']}
                borderRadius="lg"
                alignSelf={{ base: 'none', md: 'center' }}
            >
                <VStack spacing={6} width="100%">
                    <Text fontSize="2xl" fontWeight="bold">
                        Verify Your Account
                    </Text>

                    <Flex direction={'column'} gap={2}>
                        <Button colorScheme="blue" width="full" onClick={() => setIsSubmit(true)}>
                            Verify
                        </Button>
                        <Text fontSize="sm" color="gray.500" textAlign="center">
                            Click on verification button to enable your account
                        </Text>
                    </Flex>
                    <Divider />
                    <Flex direction={'column'} gap={2}>
                        <Text fontSize={'xl'} fontWeight={'bold'}>
                            Have you not received any email?
                        </Text>
                        <FormControl id="verification-code" isRequired>
                            <Input
                                type="text"
                                placeholder="Enter email linked to your account"
                                value={emailToVerify}
                                onChange={handleEmailToVerifyChange}
                            />
                        </FormControl>
                        <Button
                            onClick={() => setReVerify(true)}
                            size={'xs'}
                            variant={'link'}
                            color={'brand.400'}
                        >
                            Send a new verification email
                        </Button>
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    );
}
