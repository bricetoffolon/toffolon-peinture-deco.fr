import React from 'react';

import { Flex, Box } from '@chakra-ui/react';
import MainView from '@/components/landing/mainView';
import KnowMoreView from '@/components/landing/knowMoreView';

export default function Landing(): React.JSX.Element {
    const views: React.JSX.Element[] = [<MainView />, <KnowMoreView />];

    return (
        <Flex
            mt="1%"
            direction="column"
            overflowY="scroll"
            height="100vh"
            style={{
                scrollSnapType: 'y mandatory',
                overflowX: 'hidden', // Hides horizontal overflow
            }}
            alignItems="center"
        >
            {views.map((view) => (
                <Box
                    width="100%"
                    height="100vh"
                    scrollSnapAlign="start"
                    style={{ boxSizing: 'border-box' }} // Ensure padding and borders are included in the height
                >
                    {view}
                </Box>
            ))}
        </Flex>
    );
}
