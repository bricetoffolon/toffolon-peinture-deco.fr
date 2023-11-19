import React from 'react';
import { Flex } from '@chakra-ui/react';
import { certification, entrepriseCertifications } from '@/constant/certifications';
import CertificationElement from '@/components/enterprise/certificationElement';
import { AddAnimation, animateIntroduceIcon } from '@/components/enterprise/animations';

export default function CertificationLayout(): React.JSX.Element {
    return (
        <Flex alignSelf="center" mt="5%">
            <AddAnimation motionOptions={animateIntroduceIcon({ timing: 1 })}>
                <Flex gap={6} direction={{ base: 'column', xl: 'row' }}>
                    {entrepriseCertifications.map((certification: certification) => {
                        return <CertificationElement props={certification} />;
                    })}
                </Flex>
            </AddAnimation>
        </Flex>
    );
}
