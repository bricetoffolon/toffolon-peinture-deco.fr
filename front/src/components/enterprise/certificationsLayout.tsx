import React from "react";
import { Flex, Image, Tag } from "@chakra-ui/react";

export default function CertificationLayout(): React.JSX.Element {
    const certifications: string[] = ["QUALIBAT RGE & PEINTURE/RAVALEMENT TECHNICITÉ CONFIRMÉE", "GARANTIE DÉCENNALE", "GARANTIE RC PRO"];

    return (
        <Flex
            alignItems={"center"}
            direction={"column"}
            gap={2}
        >
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
            {
                certifications.map((certif: string) => (
                    <Tag color={"brand.500"}>
                        {certif}
                    </Tag>
                ))
            }
        </Flex>
    );
}