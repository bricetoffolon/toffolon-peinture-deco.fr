import React from "react";
import { Flex, Image, Tag } from "@chakra-ui/react";

export default function CertificationLayout(): React.JSX.Element {
    const certifications: string[] = ["QUALIBAT RGE & PEINTURE/RAVALEMENT TECHNICITÉ CONFIRMÉE", "GARANTIE DÉCENNALE", "GARANTIE RC PRO"];

    return (
        <Flex
            alignItems={"center"}
            direction={"column"}
            gap={10}
        >
            <Flex
                w={"5vw"}
                h={"5vh"}
                alignItems={"center"}
            >
                <Image
                    src={"https://toffolon-website.s3.eu-west-3.amazonaws.com/certification-qualibat-rge"}
                    alt={"certification-qualibat-rge"}
                />
            </Flex>
            <Flex gap={3} direction={"column"} alignItems={"center"}>
                {
                    certifications.map((certif: string) => (
                        <Tag color={"brand.500"} alignItems={"center"} padding={"1%"} bg={"None"} textShadow={"0.1px 0.1px"}>
                            {certif}
                        </Tag>
                    ))
                }
            </Flex>
        </Flex>
    );
}