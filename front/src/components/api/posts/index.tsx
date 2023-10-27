import React, {useState} from "react";
import {Flex} from "@chakra-ui/react";

import CreatePost from "@/components/api/posts/createPost";
import GetPosts from "@/components/api/posts/getPosts";
import {hookAPICallDataResp} from "@/hook/hookAPICall";

export default function Posts() {
    const [user, setUser] = useState<any>('');
    const [response, setResponse] = useState<any>(null);

    hookAPICallDataResp("get", "/user", {}, user, setUser);

    return (
        <Flex
            justify={"center"}
            m={"1%"}
            direction={"column"}
        >
            {
                user && user.data && user.data.email ? (
                    <>
                        <CreatePost
                            email={user.data.email}
                            setResponse={setResponse}
                        />
                        <GetPosts
                            admin={true}
                            response={response}
                            setResponse={setResponse}
                        />
                    </>
                ) : null
            }
        </Flex>
    );
}