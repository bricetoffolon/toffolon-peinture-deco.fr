import React, { useState } from "react";
import {
    AspectRatio,
    Box,
    Skeleton,
    useDisclosure,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import PostModal from "@/components/api/posts/postModal";


export default function Post({ data, admin, setResponse }: { data: any, admin: boolean, setResponse: any }): React.JSX.Element {
    const {isOpen, onOpen, onClose} = useDisclosure();

    const [reload, setReload] = useState<boolean>(false);

    if (reload) {
        setResponse(null);
        setReload(false);
    }

    return (
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
                <Skeleton
                    isLoaded={!!data.id}
                    fadeDuration={4}
                    color='white'
                >
                    <AspectRatio minW='300px' maxW='400px' ratio={1}>
                        <Box
                            as={"button"}
                            bg={"gray.200"}
                            borderRadius={"lg"}
                            margin={"1%"}
                            padding={"10%"}
                            backgroundPosition={"center"}
                            backgroundRepeat={"no-repeat"}
                            backgroundSize={"cover"}
                            backgroundImage={data.image && data.image.length > 0 ? `url(${data.image[0].url})` : undefined}
                            onClick={onOpen}
                            boxShadow={"xl"}
                        >
                        </Box>
                    </AspectRatio>
                </Skeleton>
            </motion.div>

            {
                !!data.id ? (
                    <PostModal
                        data={data}
                        isOpen={isOpen}
                        onClose={onClose}
                        admin={admin}
                        setReload={setReload}
                    />
                ) : null
            }
        </>
    );
}