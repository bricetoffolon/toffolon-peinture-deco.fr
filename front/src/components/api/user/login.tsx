import UserForm from "@/components/api/user/userForm";
import {Divider, Flex, Image, Text} from "@chakra-ui/react";
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
        <Flex alignItems="center" mt={"1%"} direction={"column"} gap={1}>
            <Flex direction={"column"} w={"30%"} alignItems={"center"}>
                <Image src={"https://toffolon-website.s3.eu-west-3.amazonaws.com/Toffolon-Icon.png"}/>
                <Text color={"brand.400"}>Manage your website content, users, and settings</Text>
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