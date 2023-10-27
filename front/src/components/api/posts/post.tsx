import React, {useState} from "react";
import {
    AspectRatio,
    Box,
    useDisclosure,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import PostModal from "@/components/api/posts/postModal";


export default function Post({ data, admin, setResponse }: {data: any, admin: boolean, setResponse: any}): React.JSX.Element {
    const {isOpen, onOpen, onClose} = useDisclosure();

    const [reload, setReload] = useState<boolean>(false);

    if (reload) {
        setResponse(null);
        setReload(false);
    }

    return (
        <>
        {
            data.image.length > 0 ? (
                <>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: {duration: 0.2}
                        }}
                        whileTap={{
                            scale: 0.8,
                        }}
                    >
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
                            </Box>
                        </AspectRatio>
                    </motion.div>

                    <PostModal
                        data={data}
                        isOpen={isOpen}
                        onClose={onClose}
                        admin={admin}
                        setReload={setReload}
                    />
                </>

            ) : null
        }
        </>
    );
}