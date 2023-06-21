import React from "react";

import { Flex, Heading } from "@chakra-ui/react";

import {
    EnterpriseLabel
} from "@/components/enterprise/EnterpriseInformations";

import ServiceCard from "@/components/services/serviceCard";

import services from "./services.json";

export default function Services(): React.JSX.Element {
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
            <Flex
                direction={{
                    base: "column",
                    xl: "row"
                }}
                gap={6}
            >
                {services.data.map((element: any, index: number) => (
                    <ServiceCard
                        key={index}
                        service={element}
                    />
                ))}
            </Flex>
        </Flex>
    );
}