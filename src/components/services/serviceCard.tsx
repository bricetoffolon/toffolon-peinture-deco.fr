import React from "react";

import { Card, CardBody, CardHeader, Text, Heading, CardFooter, Flex, Image } from "@chakra-ui/react";

import ServiceDrawer from "@/components/services/serviceDrawer";

export default function ServiceCard({service}: {service: any}) : React.JSX.Element {
    return (
        <Card
            _hover={{
                transition: "0.4s",
                color: "brand.500",
                transform: 'scale(1.03)',
            }}
            maxW={"md"}
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
    );
}