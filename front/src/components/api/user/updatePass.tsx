import React, { useEffect, useState } from 'react';
import { Heading, Flex, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useApiCallToastResp } from '@/hook/useApiCall';
import UserForm from '@/components/api/user/userForm';
import { FormValue } from '@/types/formValue';

export default function UpdatePass(): React.JSX.Element {
    const router = useRouter();

    const [key, setKey] = useState<string>(''); // eslint-disable-line

    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if (router.query && router.query.key) {
            const key = router.query.key as string;
            setKey(key);
        } else if (router.isReady) {
            router.push('/redondo');
        }
    }, [router]);

    const [formValues, setFormValues] = useState<FormValue>({});

    useApiCallToastResp(
        'post',
        `/user/update-password?key=${key}`,
        { password: formValues.password, 'confirm-password': formValues.confirmPassword },
        isSubmit,
        setIsSubmit
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmit(true);
    };

    return (
        <Flex alignItems="center" justifyContent="center" m="1%" direction="column">
            <Box
                p={8}
                borderWidth={[0, 1]}
                boxShadow={['none', 'lg']}
                borderRadius="lg"
                alignSelf="center"
            >
                <Flex direction={'column'} gap={6}>
                    <Heading>Update your password</Heading>
                    <UserForm
                        title=""
                        inputs={['password', 'confirmPassword']}
                        formValues={formValues}
                        setFormValues={setFormValues}
                        handleSubmit={handleSubmit}
                    />
                </Flex>
            </Box>
        </Flex>
    );
}
