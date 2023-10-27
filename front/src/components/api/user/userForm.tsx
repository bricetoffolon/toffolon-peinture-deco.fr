import React, {useState} from "react";
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
} from "@chakra-ui/react";

import { FormValue } from "./interface";

export default function UserForm({title, inputs, formValues, setFormValues, setIsSubmit}: {title: string, inputs: string[], formValues: FormValue, setFormValues: any, setIsSubmit: any}): React.JSX.Element {
    const handleValueChange = (fieldname: string, value: string) => {
        setFormValues((prevValues: any) => ({
            ...prevValues,
                [fieldname]: value
        }));
    }


    const [showPass, setShowPass] = useState<boolean>(false);

    return (
        <Box
            align={"center"}
            bg={"brand.500"}
            padding={"2%"}
            borderRadius={"lg"}
        >
            <Heading>
                {title}
            </Heading>
            <FormControl>
                {
                    inputs.map((input: string) => {
                        return (
                            <>
                                <FormLabel>
                                    {input}
                                </FormLabel>
                                {
                                    input.includes("password") ? (
                                        <Flex
                                            direction={"row"}
                                            gap={6}
                                        >
                                            <InputGroup>
                                                <Input type={showPass ? undefined : "password"} value={formValues[input]} onChange={(e) => handleValueChange(input, e.target.value)}/>
                                                <InputRightElement mr={"1%"}>
                                                    <Button
                                                        size={"sm"}
                                                        onClick={() => setShowPass(!showPass)}
                                                    >
                                                        {showPass ? "Hide" : "Show"}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>

                                        </Flex>
                                    ) :
                                        (
                                            <Input value={formValues[input]} onChange={(e) => handleValueChange(input, e.target.value)}/>
                                        )
                                }
                            </>
                        );
                    })
                }
            </FormControl>
            <Button
                m={"3%"}
                onClick={() => setIsSubmit(true)}
            >
                Submit
            </Button>
        </Box>
    );
}