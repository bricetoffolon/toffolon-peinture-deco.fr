import React, { useState } from 'react';
import {
    Flex,
    FormControl,
    Button,
    FormLabel,
    Input,
    Box,
    InputLeftElement,
    InputGroup,
    Textarea,
} from '@chakra-ui/react';

import inputsContact from '@/constant/inputsContact';
import { useApiCallToastResp } from '@/hook/useApiCall';

interface FormData {
    last_name: string | null;
    first_name: string | null;
    email: string | null;
    message: string | null;
}

export default function ContactForm(): React.JSX.Element {
    const [formData, setFormData] = useState<FormData>({
        last_name: null,
        first_name: null,
        email: null,
        message: null,
    });

    const [isBot, setIsBot] = useState<boolean>(false);

    const isFormComplete = (): boolean => {
        const complete = Object.values(formData).every((value) => value !== '');

        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (isBot) {
            return false;
        }

        return complete && regex.test(formData.email as string);
    };

    const [submit, setSubmit] = useState<boolean>(false);

    useApiCallToastResp('post', 'contact/', formData, submit, setSubmit);

    const handleInputChange = (
        name: string,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [name]: event.target.value,
        });
    };

    return (
        <Box
            padding="2%"
            borderRadius="lg"
            w={{
                base: '100%',
                xl: '60%',
            }}
            height="90%"
        >
            <Flex direction="column" gap="6">
                {inputsContact.map((input) => {
                    return (
                        <FormControl>
                            <FormLabel>{input.field}</FormLabel>
                            {input.field === 'Message' ? (
                                <Textarea
                                    name="message"
                                    placeholder={input.placeholder}
                                    rows={12}
                                    resize="none"
                                    borderColor="brand.500"
                                    borderRadius="lg"
                                    borderWidth="1%"
                                    boxShadow="2xl"
                                    onChange={(e) => handleInputChange(input.apiName, e)}
                                />
                            ) : (
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        {input.icon}
                                    </InputLeftElement>
                                    <Input
                                        verticalAlign="top"
                                        placeholder={input.placeholder}
                                        size="md"
                                        boxShadow="2xl"
                                        borderColor="brand.500"
                                        borderRadius="lg"
                                        borderWidth="1%"
                                        onChange={(e) => handleInputChange(input.apiName, e)}
                                    />
                                </InputGroup>
                            )}
                            <div style={{ display: 'none' }}>
                                <Input
                                    name="botField"
                                    onChange={() => setIsBot(true)}
                                    tabIndex={-1}
                                />
                            </div>
                        </FormControl>
                    );
                })}
            </Flex>
            <Button
                boxShadow="2xl"
                textColor="whiteAlpha.900"
                bg="brand.600"
                borderRadius="lg"
                _hover={{
                    bg: 'brand.600',
                }}
                mt="5%"
                size="lg"
                onClick={() => setSubmit(true)}
                isDisabled={!isFormComplete()}
            >
                Envoyer
            </Button>
        </Box>
    );
}
