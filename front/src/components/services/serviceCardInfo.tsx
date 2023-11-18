import React, {SetStateAction} from "react";

import {
    Box,
    Button,
    Card,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";

import StepsIcon from "@/components/services/stepsIcon";
import {service} from "@/constant/serviceInformation";

export default function ServiceCardInfo({service, isOpen, setIsOpen}: { service: service, isOpen: boolean, setIsOpen: React.Dispatch<SetStateAction<boolean>> }): React.JSX.Element {
    return (
        <Card
            style={{
                scrollSnapAlign: 'start',
            }}
            borderColor="whiteAlpha.500"
            variant={{
                base: 'elevated',
                xl: 'unstyled',
            }}
            h="90vh"
        >
            { service.content ?
                (
                        <Box
                            boxShadow={"xl"}
                            padding={"5%"}
                            borderRadius={"lg"}
                            w={"95%"}
                            alignSelf={"center"}
                        >
                            <Button mb="1%" onClick={() => setIsOpen(!isOpen)}>Retour</Button>
                            <Stack>
                                <Flex
                                    alignItems={"center"}
                                    direction={"row"}
                                    gap={6}
                                >
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.name}
                                        borderRadius={"lg"}
                                        w={{
                                            base: "15vw",
                                            xl: "15vw"
                                        }}
                                        h={{
                                            base: "15vh",
                                            xl: "15vh"
                                        }}
                                    />
                                    <Flex
                                        direction={"column"}
                                    >
                                        <Heading size={"2xl"} color={"brand.500"}>{service.name}</Heading>
                                        { service.content ? (<Text as={"bold"} color={"brand.400"}>{service.content.label}</Text>) : null}
                                    </Flex>
                                </Flex>
                                <Flex
                                    mt={"2%"}
                                    direction={"column"}
                                    alignItems={"left"}
                                    gap={"6"}
                                >
                                    <Heading color={"brand.500"} size={"2xl"}>Que faisons-nous ?</Heading>
                                    <Text
                                        fontSize={"2xl"}
                                        as={"b"}

                                    >
                                        {service.content.description}
                                    </Text>
                                    <Flex
                                        gap={6}
                                        align={"center"}
                                        mt={"2%"}
                                    >
                                        {
                                            service.content.steps.map((step) => {
                                                return (
                                                    <StepsIcon step={step}/>
                                                );
                                            })
                                        }
                                    </Flex>
                                </Flex>
                            </Stack>
                        </Box>
                ) : null
            }
        </Card>
    );
}