import React from "react";
import {Button} from "@chakra-ui/react";

export default function InformationButton({Icon, text, content}): React.JSX.Element {
    return (
        <Button
            bg={"brand.300"}
            borderRadius={"lg"}
            borderWidth={"2px"}
            borderColor={"brand.500"}
            _hover={{
                borderColor: "whiteAlpha.900",
                boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
            }}
            color={"whiteAlpha.900"}
            leftIcon={Icon}
            size={"lg"}
        >
            {text}
        </Button>
    );
}