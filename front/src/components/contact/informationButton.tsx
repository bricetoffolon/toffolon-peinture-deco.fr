import React from "react";
import {Box, Flex, Icon, Heading} from "@chakra-ui/react";

interface buttonProps {
    Icon: string,
    text: string,
    content: string,
}

export default function InformationButton(props: buttonProps): React.JSX.Element {
    return (
        <Flex
            direction={"column"}
            alignSelf={"center"}
            w={"10vw"}
        >
                <Box
                        as={"button"}
                        borderRadius={"lg"}
                        bg={"brand.400"}
                        boxShadow={"2xl"}
                        h={"15vh"}
                >
                    <Icon as={props.Icon} boxSize={"4em"} color={"brand.600"}/>
                </Box>
                <Heading alignSelf={"center"} size={"lg"} mt={"10%"}>{props.text}</Heading>
        </Flex>
    );
}