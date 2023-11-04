import React, {useState} from "react";
import {
    Flex,
    Heading,
    Stack,
} from "@chakra-ui/react";

import GetPosts from "@/components/api/posts/getPosts";
import CompanyStat from "@/components/realization/CompanyStats";
import CompanyAward from "@/components/realization/CompanyAward";

export default function Realization(): React.JSX.Element {
    const [response, setResponse] = useState({'data': [{}, {}, {}, {}]});

    return (
        <Flex
            direction={"column"}
            padding={"1%"}
        >
            <Heading
                textShadow={"0.1px 0.1px"}
            >
                Nos dernières <Heading as={"span"} color={"brand.400"}>réalisations</Heading>
            </Heading>
            <GetPosts
                admin={false}
                response={response}
                setResponse={setResponse}
            />
            <Stack
                mt={"3%"}
                margin={"3% 2% 2% 2%"}
                gap={6}
                direction={{
                    base: "column",
                    xl: "row"
                }}
            >
                <CompanyAward />
                <CompanyStat />
            </Stack>
        </Flex>
    );
}