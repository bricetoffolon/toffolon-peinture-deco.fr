import React, {useState} from "react";
import {
    AspectRatio,
    Box,
    Button,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Flex
} from "@chakra-ui/react";

import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

import {hookAPICallToastResp} from "@/hook/hookAPICall";

export default function PostModal({ data, isOpen, onClose, admin, setReload }: {data: any, isOpen: boolean, onClose: any, admin: boolean, setReload: any}) {
    const [emblaRef] = useEmblaCarousel({loop: false}, [AutoPlay()]);

    const [wantToDel, setWantToDel] = useState<boolean>(false);

    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    hookAPICallToastResp("delete", `/post/${data.id}`, null, isSubmit, setIsSubmit);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent
                padding={"1%"}
            >
                <ModalCloseButton />
                <ModalHeader>
                    <Heading
                        color={"brand.500"}
                        textShadow={"0.1px 0.1px"}
                        alignItems={"center"}
                    >
                        {data.title}</Heading>
                </ModalHeader>
                <ModalBody>
                    <div className={"embla"} ref={emblaRef}>
                        <div className={"embla__container"}>
                            {
                                data.image.map((img: any): React.JSX.Element => {
                                    return (
                                        <div className={"embla__slide"}>
                                            <AspectRatio maxW='500px' ratio={1}>
                                                <Box
                                                    position={"relative"}
                                                    backgroundPosition={"center"}
                                                    backgroundRepeat={"no-repeat"}
                                                    backgroundSize={"cover"}
                                                    backgroundImage={`url(${img.url})`}
                                                    borderRadius={"1.5%"}
                                                />
                                            </AspectRatio>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <Box
                        mt={"5%"}
                        boxShadow={"xl"}
                        borderRadius={"lg"}
                        border={"lg"}
                        borderWidth={"1px"}
                        padding={"5%"}
                    >
                        <Text
                            textAlign={"center"}
                            color={"brand.400"}
                        >
                            <strong>{data.content}</strong>
                        </Text>
                    </Box>
                </ModalBody>
                {
                    admin ? (
                        <ModalFooter>
                            {
                                wantToDel ? (
                                    <Flex
                                        direction={"row"}
                                        gap={3}
                                    >
                                        <Text>Are you sure you want to delete this post ?</Text>
                                        <Button
                                            bg={"red.500"}
                                            onClick={() => {
                                                setIsSubmit(true);
                                                setReload(true);
                                                onClose();
                                            }}
                                        >
                                            Yes
                                        </Button>
                                        <Button
                                            onClick={() => setWantToDel(false)}
                                        >
                                            No
                                        </Button>
                                    </Flex>
                                ) : (
                                    <Button
                                        color={"red.500"}
                                        onClick={() => setWantToDel(true)}
                                    >
                                        Delete this post
                                    </Button>
                                )
                            }
                        </ModalFooter>
                    ) : null
                }
            </ModalContent>
        </Modal>
    );
}