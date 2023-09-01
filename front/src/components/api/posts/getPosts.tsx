import React, {useState} from "react";

import { SimpleGrid } from "@chakra-ui/react";

import Post from "@/components/api/posts/post";

import {hookAPICallDataResp} from "@/hook/hookAPICall";

export default function GetPosts({email}): React.JSX.Element {
    const [response, setResponse] = useState<any>(null);

    hookAPICallDataResp("get", "/post", null, response, setResponse);

    return (
        <SimpleGrid columns={4} spacing={10} mt={"4%"}>
            {
                response && response.data ? (
                    response.data.map((post: any) => {
                        return (
                            <Post
                                data={{
                                    "title": post.title,
                                    "content": post.content,
                                    "image": post.image
                                }}
                                email={email}
                            />
                        )
                    })
                ) : null
            }
        </SimpleGrid>
    );
}