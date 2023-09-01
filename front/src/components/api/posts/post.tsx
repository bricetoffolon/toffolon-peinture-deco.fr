import React from "react";
import {
    AspectRatio,
    Box,
    Heading,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";

export default function Post({data, email}: {data: any, email: any}): React.JSX.Element {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
        {
            data.image.length > 0 ? (
                <>
                <AspectRatio maxW='400px' ratio={1}>
                    <Box
                        as={"button"}
                        bg={"gray.200"}
                        borderRadius={"lg"}
                        margin={"1%"}
                        padding={"10%"}
                        backgroundPosition={"center"}
                        backgroundRepeat={"no-repeat"}
                        backgroundSize={"cover"}
                        backgroundImage={`url(${data.image[0].url})`}
                        onClick={onOpen}
                    >
                     <Heading
                         opacity={"0%"}
                     >{data.title}</Heading>
                    </Box>
                </AspectRatio>

                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalHeader></ModalHeader>
                        <ModalBody></ModalBody>
                    </ModalContent>
                </Modal>
                </>

            ) : null
        }
        </>
    );
}