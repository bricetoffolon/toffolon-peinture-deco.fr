import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function ParagraphLayout({key, element}: {key: string, element: any}): React.JSX.Element {
    return (
        <Flex
            direction={"column"}
            margin={"1%"}
            gap={6}
        >
            <Heading
                color={"brand.500"}
            >
                {key}.{element.title}
            </Heading>
            <Text
                as={"b"}
                fontSize={"lg"}
                color={"brand.900"}
            >
                {element.paragraph}
            </Text>
        </Flex>
    );
}