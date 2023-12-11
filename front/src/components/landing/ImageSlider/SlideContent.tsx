import React from 'react';

import { Box, Center } from '@chakra-ui/react';

export default function SlideContent({
    imageUrl,
    Content,
}: {
    imageUrl: string;
    Content: React.JSX.Element;
}) {
    return (
        <Box
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${imageUrl})`}
            width="100vw"
            height="100vh"
        >
            <Center padding="1%">{Content}</Center>
        </Box>
    );
}
