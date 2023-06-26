import React from "react";

import {
    Card,
    CardBody,
    CardHeader,
    Text,
    Heading,
    CardFooter,
    Flex,
    Image,
    useBreakpointValue,
    Box,
} from "@chakra-ui/react";

import ServiceDrawer from "@/components/services/serviceDrawer";

export default function ServiceCard({service}: {service: any}) : React.JSX.Element {
    const displayMode = useBreakpointValue({base: "Card", xl: "Box"});

    return (
        <>
            {
                displayMode == "Card" ? (
                    <Card
                        _hover={{
                            transition: "0.4s",
                            color: "brand.500",
                            transform: 'scale(1.03)',
                        }}
                        maxW={{
                            base: "md",
                            xl: "xl"
                        }}
                        style={{
                            scrollSnapAlign: "start",
                        }}
                        height={"100%"}
                        borderColor={"whiteAlpha.500"}
                    >
                        <CardHeader
                        >
                            <Flex
                                justifyContent={"center"}
                            >
                                <Heading
                                    color={"brand.500"}
                                    size={"xl"}
                                >
                                    {service.name}
                                </Heading>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src={service.imageUrl}
                                alt={service.name}
                                borderRadius='lg'
                            />
                            <Flex
                                mt={"2%"}
                            >
                                <Text
                                    as={"b"}
                                    color={"brand.400"}
                                >
                                    {service.description}
                                </Text>
                            </Flex>
                        </CardBody>
                        <CardFooter>
                            <ServiceDrawer
                                service={service}
                            />
                        </CardFooter>
                    </Card>
                ) : (
                    <Flex style={{scrollSnapAlign: "start"}}>
                        <Box
                            position={"relative"}
                            backgroundPosition={"center"}
                            backgroundRepeat={"no-repeat"}
                            backgroundSize={"cover"}
                            backgroundImage={service.imageUrl}
                            width={"100vw"}
                            height={"100vh"}
                        >
                            <Flex
                                alignItems={"center"}
                                margin={"1%"}
                                direction={"column"}
                            >
                                <Heading size="2xl" color={"brand.500"}>{service.name}</Heading>
                                <Text as={"b"}>{service.description}</Text>
                                <Flex
                                    mt={"50vh"}
                                >
                                    <ServiceDrawer
                                        service={service}
                                    />
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                )
            }
        </>
    );
}