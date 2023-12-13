import React from 'react';

import { Flex, Grid, GridItem } from '@chakra-ui/react';

import ServiceCard from '@/components/services/serviceCard';
import { serviceInformation } from '@/constant/serviceInformation';

export default function Services(): React.JSX.Element {
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
                    {serviceInformation.map((element: any) => ( // eslint-disable-line
                        // eslint-disable-line
                            <ServiceCard key={element.id} serviceElement={element} />
                        )
                    )}
                </Flex>
            </GridItem>
        </Grid>
    );
}
