import React from "react";

import {Flex, Grid, GridItem, Heading, Text, Image} from "@chakra-ui/react";

import { motion } from "framer-motion";

import EntrepriseInformations from "@/components/entreprise/EnterpriseInformations";

import ContactButton from "@/components/layout/Button/contactButton";


export default function Enterprise() {
    const certifications: string[] = ["QUALIBAT RGE & PEINTURE/RAVALEMENT TECHNICITÉ CONFIRMÉE", "GARANTIE DÉCENNALE", "GARANTIE RC PRO"]

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
                opacity: 1,
                translateY: -100
            }}
            transition={{
                duration: 1.5,
            }}
        >
            <Flex
                direction={{
                    base: "column",
                    lg: "row",
                }}
            >
                <Grid
                    templateColumns={'repeat(1, 1fr)'}
                    w={"100vw"}
                    h={"100vh"}
                >
                    <GridItem
                        bg={"tomato"}
                    >
                        <Text
                            as={"b"}
                        >
                            Image CEO
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Flex
                            padding={"5%"}
                            alignItems={"center"}
                            direction={"column"}
                            gap={6}
                        >
                            <Heading
                                color={"#108BDD"}
                            >
                                Depuis 1960
                            </Heading>

                            <Flex
                                fontSize={"2xl"}
                                color={"#108BDD"}
                                direction={"column"}
                            >
                                <EntrepriseInformations />
                            </Flex>
                        </Flex>
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns={'repeat(1, 1fr)'}
                    w={"100vw"}
                    h={"100vh"}
                >
                    <GridItem
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Flex
                            direction={"column"}
                            alignItems={"center"}
                            gap={10}
                            style={{ margin: "0 auto" }}
                        >
                            <Heading
                                color={"#108BDD"}
                                size={{
                                    base: "xl",
                                    lg: "3xl"
                                }}
                            >
                                VOTRE CHANTIER DE A À Z
                            </Heading>
                            <Heading
                                color={"#0C5D89"}
                                size={{
                                    base: "md",
                                    lg:"xl"
                                }}
                                mr={"20%"}
                                ml={"20%"}
                            >
                                CONFIEZ-NOUS VOS TRAVAUX EXTÉRIEURS OU INTÉRIEURS. UNE SEULE ÉQUIPE VOUS EST DÉDIÉE TOUT AU LONG DE VOTRE CHANTIER : AUCUN CHANGEMENT, AUCUN ARRÊT DU CHANTIER
                            </Heading>
                            <Flex
                                mt={"10%"}
                            >
                                <ContactButton
                                    fontSize={"40px"}
                                />
                            </Flex>
                            <Flex
                                direction={{
                                    base: "column",
                                    lg: "row"
                                }}
                                gap={10}
                                alignItems={"center"}
                            >
                                <Flex
                                    w={"10vw"}
                                    h={"10vh"}
                                >
                                    <Image
                                        src={"https://toffolon-website.s3.eu-west-3.amazonaws.com/certification-qualibat-rge"}
                                        alt={"certification-qualibat-rge"}
                                    />
                                </Flex>
                                <Flex
                                    direction={"column"}
                                    gap={6}
                                    alignItems={"center"}
                                >
                                    {
                                        certifications.map((element) => (
                                            <Text
                                                as={"b"}
                                                size={"xl"}
                                                color={"#0C5D89"}
                                            >
                                                {element}
                                            </Text>
                                        ))
                                    }
                                </Flex>
                            </Flex>
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
        </motion.div>
    );
}