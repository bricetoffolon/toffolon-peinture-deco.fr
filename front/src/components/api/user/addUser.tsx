import React, { useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';

import { useApiCallToastResp } from '@/hook/useApiCall';

import UserForm from './userForm';

import { FormValue } from '@/types/formValue';

export default function AddUser(): React.JSX.Element {
    const router: NextRouter = useRouter();

    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValue>({email: '', username: '', password: '', confirmPassword: ''});

    useEffect(() => {
        if (router.isReady && router.query.key === undefined) {
            router.push('/redondo');
        }
    }, [router]);

    useApiCallToastResp(
        'post',
        `/user?key=${router.query.key}`,
        {
            email: formValues.email,
            username: formValues.username,
            password: formValues.password,
        },
        isSubmit,
        setIsSubmit
    );

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setIsSubmit(true);
    };

    return (
        <Flex alignItems="center" mt={'1%'} direction={'column'} w={'100%'}>
            <UserForm
                title="Register"
                inputs={['email', 'username', 'password', 'confirm password']}
                formValues={formValues}
                setFormValues={setFormValues}
                handleSubmit={handleSubmit}
            />
        </Flex>
    );
}
