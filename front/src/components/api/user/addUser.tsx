import React, {useState} from "react";
import {NextRouter, useRouter} from "next/router";
import { Flex } from "@chakra-ui/react";

import { hookAPICallToastResp } from "@/hook/hookAPICall";

import UserForm  from "./userForm";

import { FormValue } from "./interface";

export default function AddUser(): React.JSX.Element {
    const router: NextRouter = useRouter();

    const [isSubmit, setIsSubmit] = useState<boolean>(false);


    const [formValues, setFormValues] = useState<FormValue>({});

    hookAPICallToastResp("post", `/user?key=${router.query.key}`, {"email": formValues["email"], "username": formValues["username"], "password": formValues["password"]}, isSubmit, setIsSubmit)

    return (
        <Flex
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
            m={"10%"}
        >
            <UserForm
                title={"Create your account"}
                inputs={["email", "username", "password", "confirm password"]}
                formValues={formValues}
                setFormValues={setFormValues}
                setIsSubmit={setIsSubmit}
            />
        </Flex>
    )
}