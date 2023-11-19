import React from 'react';

import { Flex } from '@chakra-ui/react';

import CertificationLayout from '@/components/enterprise/certificationsLayout';
import ContactButton from '@/components/layout/Button/contactButton';
import FamilyContent from '@/components/enterprise/familyContent';
import KnowHowContent from '@/components/enterprise/knowHowContent';
import CraftsmanshipContent from '@/components/enterprise/craftsmanshipContent';
import Section from '@/components/enterprise/section';

export default function Enterprise(): React.JSX.Element {
    return (
        <Flex w="100%" padding="2%" direction="column" gap={20}>
            <FamilyContent />
            <Section>
                <KnowHowContent />
            </Section>
            <Section>
                <CraftsmanshipContent />
            </Section>
            <Section>
                <CertificationLayout />
            </Section>
            <Section>
                <Flex>
                    <ContactButton fontSize="3xl" padding="10%" />
                </Flex>
            </Section>
        </Flex>
    );
}
