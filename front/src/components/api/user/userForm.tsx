import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Box,
    Flex,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';

import { FormValue } from './interface';

export default function UserForm({
    title,
    inputs,
    formValues,
    setFormValues,
    handleSubmit,
}: {
    title: string;
    inputs: string[];
    formValues: FormValue;
    setFormValues: any; // eslint-disable-line
    handleSubmit: any;
}): React.JSX.Element {
    const handleValueChange = (fieldname: string, value: string) => {
        setFormValues((prevValues: any) => ({ // eslint-disable-line
            ...prevValues,
            [fieldname]: value,
        }));
    };

    const [showPass, setShowPass] = useState<boolean>(false);

    return (
        <Box
            alignItems="center"
            padding="5%"
            borderRadius="lg"
            boxShadow="2xl"
            background="brand.400"
        >
            <Heading mb="10%" color="white">
                {title}
            </Heading>
            <form onSubmit={handleSubmit}>
            <FormControl>
                {inputs.map((input: string, index) => {
                    return (
                        <Flex key={index} margin="2%" direction="column">
                            <FormLabel htmlFor={`field-${input}-${index}`} color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)">
                                {input}
                            </FormLabel>
                            {input.includes('password') ? (
                                <InputGroup boxShadow="xl" background="white" borderRadius="2xl">
                                    <Input
                                        id={`field-${input}-${index}`}
                                        boxShadow="2xl"
                                        type={showPass ? undefined : 'password'}
                                        value={formValues[input]}
                                        onChange={(e) => handleValueChange(input, e.target.value)}
                                    />
                                    <InputRightElement mr="1%">
                                        <Button size="sm" onClick={() => setShowPass(!showPass)}>
                                            {showPass ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            ) : (
                                <Input
                                    background="white"
                                    borderRadius="md"
                                    boxShadow="xl"
                                    value={formValues[input]}
                                    onChange={(e) => handleValueChange(input, e.target.value)}
                                />
                            )}
                        </Flex>
                    );
                })}
            </FormControl>
                <Button type="submit" m="3%" boxShadow="xl">
                    Submit
                </Button>
            </form>
        </Box>
    );
}
