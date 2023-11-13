import React from "react";
import {Box, Container, Flex} from "@chakra-ui/react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInformation from "@/components/contact/ContactInformation";

export default function Contact(): React.JSX.Element {
    return (
        <Container maxW={"full"} centerContent overflow={"hidden"} h={'100vh'}>
            <Flex
                padding={"1%"}
            >
                <Box
                    borderRadius={"lg"}
                    boxShadow={"lg"}
                    bg={"brand.500"}
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{sm: 4, md: 8, lg: 10}}
                    w={"50vw"}
                    h={"70vh"}
                >
                    <Flex
                        gap={"6"}
                    >
                        <ContactInformation />
                        <ContactForm />
                    </Flex>
                </Box>
            </Flex>
        </Container>
    );
}