import React from "react";
import {Flex, Heading} from "@chakra-ui/react";
import CertificationLayout from "@/components/enterprise/certificationsLayout";

export default function CompanyAward(): React.JSX.Element {
    return (
        <Flex
            padding={"3%"}
            boxShadow={"xl"}
            justifyItems={"center"}
            bg={"gray.200"}
            borderRadius={"lg"}
            gap={10}
            direction={"column"}
            minW={"50%"}
        >
            <Heading
                textShadow={"0.1px 0.1px"}
                textAlign={"center"}
            >
                Notre société est fière d'être <Heading as={"span"} color={"brand.500"}>reconnu</Heading>
            </Heading>
            <CertificationLayout />
        </Flex>
    );
}