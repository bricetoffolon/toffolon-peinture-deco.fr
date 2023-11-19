import React from 'react';

import { Flex } from '@chakra-ui/react';

import CertificationLayout from '@/components/enterprise/certificationsLayout';
import ContactButton from '@/components/layout/Button/contactButton';
import FamilyContent from '@/components/enterprise/familyContent';
import KnowHowContent from '@/components/enterprise/knowHowContent';
import CraftsmanshipContent from '@/components/enterprise/craftsmanshipContent';
import { AddAnimation, animateLayout, animateButton } from '@/components/enterprise/animations';

export default function Enterprise(): React.JSX.Element {
    return (
        <Flex w="100%" padding="2%" direction="column" gap={20}>
            <FamilyContent />
            <AddAnimation motionOptions={animateLayout({ timing: 0.5 })}>
                <KnowHowContent />
            </AddAnimation>
            <AddAnimation motionOptions={animateLayout({ timing: 0.5 })}>
                <CraftsmanshipContent />
            </AddAnimation>
            <AddAnimation motionOptions={animateLayout({ timing: 0.5 })}>
                <CertificationLayout />
            </AddAnimation>
            <Flex alignSelf="center">
                <AddAnimation motionOptions={animateButton({ timing: 0.5 })}>
                    <ContactButton props={{fontSize: "3xl", padding: "10%"}} />
                </AddAnimation>
            </Flex>
        </Flex>
    );
}
