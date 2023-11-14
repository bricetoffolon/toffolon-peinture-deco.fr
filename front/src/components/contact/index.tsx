import React from "react";
import { Container, Flex, Heading, Text} from "@chakra-ui/react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInformation from "@/components/contact/ContactInformation";

export default function Contact(): React.JSX.Element {
    return (
        <Container maxW={"full"} overflow={"hidden"} h={'100vh'} padding={"3%"}>
            <Flex
                direction={"column"}
                gap={"10%"}
            >
               <Flex
                   direction={"column"}
                   alignSelf={"center"}
                   alignItems={"center"}
               >
                   <Heading
                       size={"4xl"}
                   >
                       Contactez-nous dès <Heading size={"4xl"} as={"span"} color={"brand.500"}>maintenant !</Heading>
                   </Heading>
                   <Text mt="2%" as="b" fontSize="4xl" color={"gray.400"}>Pour un devis gratuit et personnalisé, <br/>n'hésitez pas à prendre contact avec nous</Text>
               </Flex>
                <Flex
                    gap={"justify-space"}
                >
                    <ContactForm />
                    <ContactInformation/>
                </Flex>
            </Flex>
        </Container>
    );
}