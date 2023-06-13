import React from "react";

import { AspectRatio, Box, Center } from '@chakra-ui/react';

export default function ({imageUrl, Content}) {
    return (
        <AspectRatio ratio={16/9}>
            <Box
                position={"relative"}
                backgroundPosition={"center"}
                bacgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                backgroundImage={`url(${imageUrl})`}
            >
                <Center>
                    {Content}
                </Center>
            </Box>
        </AspectRatio>
    );
}