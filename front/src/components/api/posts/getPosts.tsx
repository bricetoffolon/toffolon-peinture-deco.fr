import React from "react";

import { SimpleGrid } from "@chakra-ui/react";

import Post from "@/components/api/posts/post";

import { hookAPICallDataResp } from "@/hook/hookAPICall";

export default function GetPosts({admin, response, setResponse}: {
    admin: boolean;
    response: any;
    setResponse: any;
}): React.JSX.Element {
    hookAPICallDataResp("get", "/post", null, response, setResponse);

    console.log(response)

    return (
        <>
            {
                response && response.data ?
                    (
                        <SimpleGrid columns={4} spacing={10} mt={"4%"}>
                            {
                                response.data.map((post: any) => {
                                    return (
                                        <Post
                                            data={{
                                                "id": post.id,
                                                "title": post.title,
                                                "content": post.content,
                                                "image": post.image
                                            }}
                                            admin={admin}
                                            setResponse={setResponse}
                                        />

                                    );
                                })
                            }
                        </SimpleGrid>
                    ) : null
            }
        </>
    );
}