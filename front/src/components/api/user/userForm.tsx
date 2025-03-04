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
            padding={"1%"}
            borderRadius="lg"
        >
            <Heading mb={"1%"} color={"brand.500"}>
                {title}
            </Heading>
            <form onSubmit={handleSubmit}>
            <FormControl>
                {inputs.map((input: string, index) => {
                    return (
                        <Flex key={index} margin="2%" direction="column">
                            <FormLabel color="brand.400" htmlFor={`field-${input}-${index}`} textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)">
                                {input}
                            </FormLabel>
                            {input.toLowerCase().includes('password') ? (
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
                <Button type="submit" m="3%" boxShadow="xl" colorScheme={"brand"}>
                    Submit
                </Button>
            </form>
        </Box>
    );
}
