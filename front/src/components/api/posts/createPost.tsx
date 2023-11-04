import React, {useState} from "react";
import {
    Button,
    Modal,
    ModalCloseButton,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalBody,
    FormLabel,
    FormControl,
    Input,
    useDisclosure,
    ModalFooter,
} from "@chakra-ui/react";

import { FileUploader } from "react-drag-drop-files";
import hookAddPost from "@/hook/hookAddPost";

export default function CreatePost({email, setResponse}: {email: string, setResponse: any}): React.JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const fileType: string[] = ["JPEG", "PNG"];

    const [files, setFiles]: [any, any] = useState([]);

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    hookAddPost("/post", {"title": title, authorEmail: email, "content": content}, isSubmit, setIsSubmit, files);

    const handleValueChange = (setter: any, e: any): void => {
        setter(e.target.value);
    }

    return (
        <>
            <Button
                onClick={onOpen}
                size={"lg"}
                color={"brand.500"}
            >
                Create a new post
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>
                        Create a new post
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <FormControl
                        >
                            <FormLabel>
                                Post title
                            </FormLabel>
                            <Input value={title} onChange={(e) => handleValueChange(setTitle, e)}/>
                            <FormLabel>
                                Post Description
                            </FormLabel>
                            <Input value={content} onChange={(e) => handleValueChange(setContent, e)}/>
                        </FormControl>
                        <FileUploader
                            handleChange={(e: any) => setFiles([...files, ...e])}
                            name="file"
                            types={fileType}
                            multiple={true}
                        />
                    </ModalBody>
                    <ModalFooter gap={"2"}>
                        <Button color={"brand.500"}
                                onClick={() => {
                                    setIsSubmit(true);
                                    setResponse({'data': [{}, {}, {}, {}]});
                                    onClose();
                                }}
                        >Submit</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}