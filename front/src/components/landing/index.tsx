import React from 'react';

import { Flex, GridItem, Grid } from '@chakra-ui/react';
import MainView from '@/components/landing/mainView';
import KnowMoreView from '@/components/landing/knowMoreView';

export default function Landing(): React.JSX.Element {
    const views: React.JSX.Element[] = [<MainView />, <KnowMoreView />];

    return (
        <Grid mt="1%" w="100vw" templateRows="repeat(1, 1fr)" templateColumns="repeat(1, 1fr)">
            <GridItem rowSpan={1} colSpan={3}>
                <Flex
                    direction="column"
                    gap={6}
                    overflowY="scroll"
                    height="100vh"
                    style={{
                        scrollSnapType: 'y mandatory',
                    }}
                    alignItems="center"
                    w="100vw"
                >
                    {views.map((view) => (
                        <React.Fragment>{view}</React.Fragment>
                    ))}
                </Flex>
            </GridItem>
        </Grid>
    );
}
