import React from "react";
import {Flex, FormControl, Button, FormLabel, Input, Box, InputLeftElement, InputGroup} from "@chakra-ui/react";

import { inputsContact } from "@/constant/inputsContact";


export default function ContactForm(): React.JSX.Element {
    return (
        <Box
            padding={"2%"}
            borderWidth={"1px"}
            borderRadius={"lg"}
            boxShadow={"lg"}
            bg={"whiteAlpha.900"}
            width={{ base: "90%", sm: "80%", md: "70%", lg: "60%" }}
            height={"100%"}
            mx="auto"
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
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        {input.icon}
                                    </InputLeftElement>
                                    <Input height={input.field == "Message" ? "30vh" :  undefined} verticalAlign="top" size={'md'} boxShadow={"lg"} borderColor="brand.500" borderRadius={"lg"} borderWidth={"1%"}/>
                                </InputGroup>
                            </FormControl>
                        );
                    })
                }
                <Button
                    boxShadow={"lg"}
                    textColor={"whiteAlpha.900"}
                    bg={"brand.500"}
                    borderRadius={"lg"}
                    _hover={{
                        bg: "brand.600"
                    }}
                >
                    Envoyer
                </Button>
            </Flex>
        </Box>
    );
}