import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

import mention from './legalMention.json';

import ParagraphLayout from '@/components/legalMention/paragraphLayout';
import ContactButton from '@/components/layout/Button/contactButton';

export default function LegalMention(): React.JSX.Element {
    return (
        <>
            <Flex m="1%" justifyContent="center">
                <Heading
                    size={{
                        base: 'xl',
                        xl: '2xl',
                    }}
                >
                    Mentions Légales
                </Heading>
            </Flex>
            <Flex direction="column" m="1%">
                {mention.data.map((element: any, index: number) => (
                    <ParagraphLayout key={index.toString()} element={element} />
                ))}
            </Flex>
            <Flex m="1%" alignItems="center" direction="column" gap={6}>
                <Heading>Des questions ?</Heading>
                <ContactButton fontSize="20px" />
            </Flex>
        </>
    );
}
