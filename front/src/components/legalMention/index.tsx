import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

import ParagraphLayout from '@/components/legalMention/paragraphLayout';
import legalNotice from '@/constant/legalNotice';

export default function LegalMention(): React.JSX.Element {
    return (
        <Flex direction="column" padding={{ base: '5%', xl: '2%' }}>
            <Heading
                size={{
                    base: 'xl',
                    xl: '2xl',
                }}
                color="brand.500"
            >
                Mentions Légales
            </Heading>
            <Flex direction="column" mt="1%">
                {legalNotice().legalNotice.map((element: any, index: number) => ( // eslint-disable-line
                    // eslint-disable-line
                        <ParagraphLayout index={index} notice={element} />
                    )
                )}
            </Flex>
        </Flex>
    );
}
