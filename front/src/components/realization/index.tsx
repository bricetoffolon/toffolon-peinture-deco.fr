import React, { useState } from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';

import GetPosts from '@/components/api/posts/getPosts';
import CompanyStat from '@/components/realization/CompanyStats';
import CompanyAward from '@/components/realization/CompanyAward';

export default function Realization(): React.JSX.Element {
    const [response, setResponse] = useState({ data: [{}, {}, {}, {}] });

    return (
        <Flex direction="column" padding="1%">
            <Heading
                textShadow="0.1px 0.1px"
                size={{ base: 'xl', xl: '2xl' }}
                alignSelf="center"
                mb="2%"
            >
                Nos dernières{' '}
                <Heading as="span" color="brand.400" size={{ base: 'xl', xl: '2xl' }}>
                    réalisations
                </Heading>
            </Heading>
            <GetPosts admin={false} response={response} setResponse={setResponse} />
            <Flex direction="column" alignItems="center" mt="1%">
                <Stack
                    gap={6}
                    direction={{
                        base: 'column',
                        xl: 'column',
                    }}
                    alignItems="center"
                >
                    <CompanyAward />
                    <CompanyStat />
                </Stack>
            </Flex>
        </Flex>
    );
}
