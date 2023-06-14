import React from "react";

import { Box, Center } from '@chakra-ui/react';



export default function SlideContent({imageUrl, Content}) {
    return (
        <Box
            position={"relative"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundImage={`url(${imageUrl})`}
            width={"100vw"}
            height={"100vh"}
        >
            <Center h={"100%"}>
                {Content}
            </Center>
        </Box>
    );
}