import React, { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useApiCallToastResp } from '@/hook/useApiCall';

export default function VerifyUser(): React.JSX.Element {
    const router = useRouter();

    const [isSubmit, setIsSubmit] = useState(false);

    useApiCallToastResp(
        'post',
        `/user/verify?key=${router.query.key}`,
        null,
        isSubmit,
        setIsSubmit
    );

    return (
        <Flex alignItems="center" justifyContent="center" m="1%" direction="column">
            <Button onClick={() => setIsSubmit(true)}>Verify</Button>
        </Flex>
    );
}
