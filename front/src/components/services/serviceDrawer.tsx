import React from "react";

import {
    Box,
    Button,
    Center,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    Icon,
    Text,
    useDisclosure
} from "@chakra-ui/react";

import { FaPlusCircle } from "react-icons/fa";

export default function ServiceDrawer({service}: {service: any}): React.JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                leftIcon={<Icon as={FaPlusCircle}/>}
                color={"brand.500"}
                onClick={onOpen}
                _hover={{
                    transition: "0.8s",
                    bg:"brand.500",
                    color: 'blackAlpha.900'
                }}
            >
                En savoir plus
            </Button>

            <Drawer
                isOpen={isOpen}
                placement={"bottom"}
                onClose={onClose}
                size={"full"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Box
                        backgroundImage={`url(${service.imageUrl})`}
                        backgroundSize={"cover"}
                        backgroundPosition={"center"}
                        backgroundRepeat={"no-repeat"}
                        w={"100vw"}
                        h={"20vh"}
                        zIndex={-1}
                        pt={"3%"}
                    >
                        <Center>
                            <Heading size={{base: "lg", xl: "2xl",}} color={"brand.500"}>
                                {service.name}
                            </Heading>
                        </Center>
                    </Box>
                    <DrawerCloseButton />
                    <DrawerHeader>
                    </DrawerHeader>
                    {service.content ?
                        (
                            <DrawerBody>
                                <Flex alignItems={"center"} direction={{base: "column"}} gap={10} paddingLeft={"10%"} paddingRight={"10%"}>
                                    <Heading color={"brand.500"} size={{base: "lg", xl:"xl"}}>
                                        {service.content.label}
                                    </Heading>
                                    <Text color={"brand.900"} as={"b"}>{service.content.description}</Text>
                                </Flex>
                                <Flex>
                                </Flex>
                            </DrawerBody>
                        ) : null
                    }
                </DrawerContent>
            </Drawer>
        </>
    );
}