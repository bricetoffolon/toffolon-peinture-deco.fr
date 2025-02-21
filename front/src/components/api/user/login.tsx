import UserForm from "@/components/api/user/userForm";
import {Flex} from "@chakra-ui/react";
import React, {useState} from "react";
import {FormValue} from "@/components/api/user/interface";
import {useApiCallToastResp} from "@/hook/useApiCall";

export default function Login() {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValue>({});

    useApiCallToastResp(
        'post',
        'auth/login',
        { email: formValues.email, password: formValues.password },
        isSubmit,
        setIsSubmit
    );

    return (
        <Flex alignItems="center" justifyContent="center" direction="column" w={"100%"} mt="1%">
            <UserForm
                title="Access settings"
                inputs={['email', 'password']}
                formValues={formValues}
                setFormValues={setFormValues}
                setIsSubmit={setIsSubmit}
            />
        </Flex>
    );
}