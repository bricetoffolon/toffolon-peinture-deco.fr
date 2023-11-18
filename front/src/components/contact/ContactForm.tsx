import React, {useState} from "react";
import {
    Flex,
    FormControl,
    Button,
    FormLabel,
    Input,
    Box,
    InputLeftElement,
    InputGroup,
    Textarea
} from "@chakra-ui/react";

import { inputsContact } from "@/constant/inputsContact";
import {hookAPICallToastResp} from "@/hook/hookAPICall";

interface FormData {
    last_name: string,
    first_name: string,
    email: string,
    message: string,
}

export default function ContactForm(): React.JSX.Element {
    const [formData, setFormData] = useState<FormData>({
        'last_name': null, 'first_name': null, 'email': null, 'message': null
        });

    const isFormComplete = (): boolean => {
        const complete =  Object.values(formData).every(value => value !== '');

        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        console.log(complete && regex.test(formData.email));

        return complete && regex.test(formData.email);
    };

    const [submit, setSubmit] = useState<boolean>(false);

    hookAPICallToastResp("post", "contact/", formData, submit, setSubmit);

    const handleInputChange = (name: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    return (
        <Box
            padding={"2%"}
            borderRadius={"lg"}
            w={{
                base: "100%",
                xl: "60%"
            }}
            height={"90%"}
        >
            <Flex
                direction={"column"}
                gap={"6"}
            >
                {
                    inputsContact.map((input, key) => {
                        return (
                            <FormControl key={key}>
                                <FormLabel>
                                    {input.field}
                                </FormLabel>
                                {
                                    input.field == "Message" ?
                                        (
                                            <Textarea
                                                name={"message"}
                                                placeholder={input.placeholder}
                                                rows={12}
                                                resize={"none"}
                                                borderColor="brand.500"
                                                borderRadius={"lg"}
                                                borderWidth={"1%"}
                                                boxShadow={"2xl"}
                                                onChange={(e) => handleInputChange(input.apiName, e)}
                                            />
                                        ) : (
                                            <InputGroup>
                                                <InputLeftElement pointerEvents='none'>
                                                    {input.icon}
                                                </InputLeftElement>
                                                <Input
                                                    verticalAlign="top"
                                                    placeholder={input.placeholder}
                                                    size={'md'}
                                                    boxShadow={"2xl"}
                                                    borderColor="brand.500"
                                                    borderRadius={"lg"}
                                                    borderWidth={"1%"}
                                                    onChange={(e) => handleInputChange(input.apiName, e)}
                                                />
                                            </InputGroup>
                                        )
                                }
                            </FormControl>
                        );
                    })
                }
            </Flex>
            <Button
                boxShadow={"2xl"}
                textColor={"whiteAlpha.900"}
                bg={"brand.600"}
                borderRadius={"lg"}
                _hover={{
                    bg: "brand.600"
                }}
                mt={"5%"}
                size={"lg"}
                onClick={() => setSubmit(true)}
                isDisabled={!isFormComplete()}
            >
                Envoyer
            </Button>
        </Box>
    );
}