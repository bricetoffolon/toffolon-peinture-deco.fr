import UserForm from "@/components/api/user/userForm";
import {Flex} from "@chakra-ui/react";
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
        <Flex alignItems="center" justifyContent="center" direction="column" w={"100%"} mt="1%">
            <UserForm
                title="Access settings"
                inputs={['email', 'password']}
                formValues={formValues}
                setFormValues={setFormValues}
                handleSubmit={handleSubmit}
            />
        </Flex>
    );
}