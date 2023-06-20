import React from "react";

import { Flex, Heading, Image } from "@chakra-ui/react";

import {
    EnterpriseCatchPhrase,
    EnterpriseLabel
} from "@/components/enterprise/EnterpriseInformations";

import ContactButton from "@/components/layout/Button/contactButton";

export default function Prestations(): React.JSX.Element {
    return (
        <Flex
            m={"2%"}
            alignItems={"center"}
            direction={"column"}
            gap={6}
        >
            <Heading
                size={{
                    base: "xl",
                    xl: '3xl'
                }}
            >
                <Flex>
                    <EnterpriseLabel />
                </Flex>
            </Heading>
            <Flex>
                <EnterpriseCatchPhrase />
            </Flex>
            <ContactButton
                fontSize={"30px"}
            />
            <Flex
                w={"5vw"}
                h={"5vh"}
                alignItems={"center"}
                m={"1%"}
            >
                <Image
                    src={"https://toffolon-website.s3.eu-west-3.amazonaws.com/certification-qualibat-rge"}
                    alt={"certification-qualibat-rge"}
                />
            </Flex>
            <Flex
                direction={"column"}
                alignItems={"center"}
            >
            </Flex>
        </Flex>
    );
}