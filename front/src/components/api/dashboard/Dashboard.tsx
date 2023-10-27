import React, {useState} from "react";
import {
    Button,
    Flex,
    Heading,
} from "@chakra-ui/react";

import NextLink from "next/link";

import {hookAPICallDataResp, hookAPICallToastResp} from "@/hook/hookAPICall";
import {FormValue} from "@/components/api/user/interface";

import UserForm from "@/components/api/user/userForm";

export default function Dashboard(): React.JSX.Element {
    const [response, setResponse] = useState<any>('');

    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValue>({});

    hookAPICallDataResp("get", "/user", {}, response, setResponse);
    hookAPICallToastResp("post", "auth/login", {"email": formValues["email"], "password": formValues["password"]}, isSubmit, setIsSubmit);

    return (
        <>
            {
                response !== "error" ? (
                    <Flex
                        align={"center"}
                        justify={"center"}
                        direction={"column"}
                        mt={"1%"}
                    >
                        {
                            response.data && response.data.email ?
                                (
                                    <Heading>Welcome {response.data.email}</Heading>
                                ) : null
                        }
                        <Flex
                            margin={"10%"}
                            align={"center"}
                            gap={6}
                        >
                            <Heading
                                color={"brand.500"}
                            >
                                Do you want to manage your posts ?
                            </Heading>
                            <NextLink
                                href={"redondo/posts"}
                                passHref
                            >
                                <Button
                                    size={"lg"}
                                >
                                    Manage posts
                                </Button>
                            </NextLink>
                        </Flex>
                    </Flex>
                ) :
                    <Flex
                        align={"center"}
                        justify={"center"}
                        direction={"column"}
                        m={"10%"}
                    >
                        <UserForm title={"Connect to your account"} inputs={["email", "password"]} formValues={formValues} setFormValues={setFormValues} setIsSubmit={setIsSubmit}/>
                    </Flex>
            }
        </>
    );
}