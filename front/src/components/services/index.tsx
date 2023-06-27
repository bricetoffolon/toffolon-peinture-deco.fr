import React from "react";

import { Flex, Heading, Grid, GridItem, Wrap, WrapItem } from "@chakra-ui/react";

import { FaUserEdit, FaStopwatch, FaFillDrip, FaFileSignature } from "react-icons/fa";

import {
    EnterpriseLabel
} from "@/components/enterprise/EnterpriseInformations";

import ServiceCard from "@/components/services/serviceCard";

import services from "./services.json";
import ContactButton from "@/components/layout/Button/contactButton";
import IconLayout from "@/components/services/iconLayout";
import CertificationLayout from "@/components/enterprise/certificationsLayout";

export default function Services(): React.JSX.Element {
    return (
        <Grid
            w={"100vw"}
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
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
                        <Flex>
                            <EnterpriseLabel />
                        </Flex>
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
                        align={"center"}
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
            <GridItem bg={"brand.250"} rowStart={2} rowSpan={2} colSpan={3} padding={"2%"}>
                <Flex color={"brand.500"} direction={"column"} align={"center"}>
                    <Heading maxWidth={"80%"} align={"center"} size={{base: "lg", xl: "3xl"}}>
                        Pour recevoir dés maintenant votre devis gratuit, Contactez-nous
                    </Heading>
                    <Wrap
                        mt={"5%"}
                        mb={"5%"}
                        spacing={10}
                    >
                        <WrapItem align={"center"}>
                            <IconLayout FaIcon={FaFileSignature} description={"Devis sur mesure"}/>
                        </WrapItem>
                        <WrapItem  align={"center"}>
                            <IconLayout FaIcon={FaUserEdit} description={"Interlocuteur unique"}/>
                        </WrapItem>
                        <WrapItem align={"center"}>
                            <IconLayout FaIcon={FaStopwatch} description={"Planning respecté"}/>
                        </WrapItem>
                        <WrapItem  align={"center"}>
                            <IconLayout FaIcon={FaFillDrip} description={"Matériaux agréés"}/>
                        </WrapItem>
                    </Wrap>
                    <ContactButton/>
                    <Flex
                        mt={"2%"}
                    >
                        <CertificationLayout />
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
    );
}