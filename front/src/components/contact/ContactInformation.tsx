import React from "react";
import {Flex, Heading, Text} from "@chakra-ui/react";
import informationData from "@/constant/informationData";
import InformationButton from "@/components/contact/informationButton";

export default function ContactInformation(): React.JSX.Element {
    return (
       <Flex
           direction={"column"}
       >
           <Heading size="2xl" color={"whiteAlpha.900"}>Contact</Heading>
           <Text mt="5%" fontSize="2xl" color={"whiteAlpha.800"}>Contactez nous dés <Text as={"b"}>maintenant !</Text></Text>
           <Flex
               direction={"column"}
               gap={"6"}
               align={"flex-start"}
               mt={"15%"}
           >
               {
                   informationData().map((data, key) => {
                       return (
                           <Flex
                               key={key}
                           >
                               <InformationButton
                                   Icon={data.Icon}
                                   text={data.text}
                                   content={data.content}
                               />
                           </Flex>
                       );
                   })
               }
           </Flex>
       </Flex>
    );
}