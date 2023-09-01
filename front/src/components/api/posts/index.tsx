import React, {useState} from "react";
import {Flex} from "@chakra-ui/react";

import CreatePost from "@/components/api/posts/createPost";
import GetPosts from "@/components/api/posts/getPosts";
import {hookAPICallDataResp} from "@/hook/hookAPICall";

export default function Posts() {
    const [response, setResponse] = useState<any>('');

    hookAPICallDataResp("get", "/user", {}, response, setResponse);

    return (
        <Flex
            justify={"center"}
            m={"1%"}
            direction={"column"}
        >
            {
                response && response.data && response.data.email ? (
                    <>
                        <CreatePost
                            email={response.data.email}
                        />
                        <GetPosts
                            email={response.data.email}
                        />
                    </>
                ) : null
            }
        </Flex>
    );
}