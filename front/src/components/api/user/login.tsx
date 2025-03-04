import UserForm from "@/components/api/user/userForm";
import {Divider, Flex, Heading, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {FormValue} from "@/components/api/user/interface";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/router";

export default function Login() {
    const router = useRouter();

    const { authLogin } = useAuth();

    const [formValues, setFormValues] = useState<FormValue>({});

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        try {
            await authLogin(formValues.email, formValues.password);
            router.push("/redondo");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Flex alignItems="center" mt={"1%"} direction={"column"} gap={1} w={"100%"}>
            <Flex direction={"column"} w={{base: "90%", xl: "30%"}} alignItems={"center"}>
                <Heading color={"brand.500"}>Redondo</Heading>
                <Text textAlign="center" color={"brand.400"}>Manage your website content, users, and settings</Text>
            </Flex>
            <Divider maxW={"50%"}/>
            <UserForm
                title="Welcome back"
                inputs={['email', 'password']}
                formValues={formValues}
                setFormValues={setFormValues}
                handleSubmit={handleSubmit}
            />
        </Flex>
    );
}