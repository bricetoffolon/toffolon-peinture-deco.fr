import React, { useState } from 'react';
import {
    Box,
    Flex,
    Icon,
    Heading,
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Text,
    Input,
} from '@chakra-ui/react';
import { FaCopy } from 'react-icons/fa';

interface buttonProps {
    Icon?: string;
    text: string;
    content: string;
    catchPhrase?: string;
}

export default function InformationButton(props: buttonProps): React.JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isBot, setIsBot] = useState<boolean>(false);

    return (
        <Flex>
            {props.Icon ? (
                <Flex
                    direction="column"
                    alignSelf="center"
                    w={{
                        base: '35vw',
                        xl: '10vw',
                    }}
                    mt={{
                        base: '20%',
                        xl: '0%',
                    }}
                >
                    <Box
                        as="button"
                        borderRadius="lg"
                        bg="brand.500"
                        boxShadow="2xl"
                        h="15vh"
                        transition="transform 0.3s"
                        _hover={{
                            transform: 'scale(1.1)',
                        }}
                        _active={{
                            transform: 'scale(0.8)',
                        }}
                        onClick={onOpen}
                    >
                        <Icon
                            // @ts-ignore
                            as={props.Icon}
                            boxSize="4em"
                            color="blue.300"
                        />
                    </Box>
                    <Heading alignSelf="center" size="lg" mt="10%">
                        {props.text}
                    </Heading>
                    {props.catchPhrase ? (
                        <Text as="b" textAlign="center" color="gray.500">
                            {props.catchPhrase}
                        </Text>
                    ) : null}
                </Flex>
            ) : (
                <Button onClick={onOpen}>{props.text}</Button>
            )}

            <div style={{ display: 'none' }}>
                <Input name="botField" onChange={() => setIsBot(true)} tabIndex={-1} />
            </div>

            {!isBot ? (
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{props.text}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box boxShadow="2xl" borderRadius="lg" borderWidth="1px" padding="5%">
                                <Heading textAlign="center" color="brand.500">
                                    {props.content}
                                </Heading>
                            </Box>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                leftIcon={<FaCopy />}
                                boxShadow="lg"
                                onClick={() => {
                                    navigator.clipboard.writeText(props.content);
                                }}
                            >
                                Copier
                            </Button>
                            <Button boxShadow="lg" ml={3} onClick={onClose}>
                                Fermer
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            ) : null}
        </Flex>
    );
}
