import React from "react";
import {Flex, FormControl, Button, FormLabel, Input, Box, InputLeftElement, InputGroup} from "@chakra-ui/react";

import { inputsContact } from "@/constant/inputsContact";


export default function ContactForm(): React.JSX.Element {
    return (
        <Box
            padding={"2%"}
            borderRadius={"lg"}
            w={"50%"}
            height={"90%"}
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
                                    <Input height={input.field == "Message" ? "30vh" :  undefined} verticalAlign="top" size={'md'} boxShadow={"2xl"} borderColor="brand.500" borderRadius={"lg"} borderWidth={"1%"}/>
                                </InputGroup>
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
            >
                Envoyer
            </Button>
        </Box>
    );
}