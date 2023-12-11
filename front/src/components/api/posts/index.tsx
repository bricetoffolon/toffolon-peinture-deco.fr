import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import CreatePost from '@/components/api/posts/createPost';
import GetPosts from '@/components/api/posts/getPosts';
import { useApiCallDataResp } from '@/hook/useApiCall';

export default function Posts() {
    const [user, setUser] = useState<any>(''); // eslint-disable-line
    const [response, setResponse] = useState({ data: [{}, {}, {}, {}] });

    useApiCallDataResp('get', '/user', {}, user, setUser);

    return (
        <Flex justifyContent="center" m="1%" direction="column">
            {user && user.data && user.data.email ? (
                <>
                    <CreatePost email={user.data.email} setResponse={setResponse} />
                    <GetPosts admin response={response} setResponse={setResponse} />
                </>
            ) : null}
        </Flex>
    );
}
