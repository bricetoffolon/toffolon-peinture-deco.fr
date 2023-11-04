import React from "react";

import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";

import ServiceCard from "@/components/services/serviceCard";

import services from "./services.json";

export default function Services(): React.JSX.Element {
    return (
        <Grid
            w={"100vw"}
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(1, 1fr)'
        >
            <GridItem rowSpan={1} colSpan={3}>
                <Flex
                    mt={"2%"}
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
                            <Heading>Votre chantier de <Heading as="span" color={"brand.400"}>A</Heading> à <Heading as="span" color={"brand.400"}>Z</Heading></Heading>
                    </Heading>
                    <Flex
                        direction={"column"}
                        gap={6}
                        overflowY="scroll"
                        height={{
                            base: "500px",
                            xl: "100vh"
                        }}
                        style={{
                            scrollSnapType: "y mandatory",
                        }}
                        alignItems={"center"}
                    >
                        {services.data.map((element: any, index: number) => (
                            <ServiceCard
                                key={index}
                                service={element}
                            />
                        ))}
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
    );
}