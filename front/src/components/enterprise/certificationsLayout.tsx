import React from 'react';
import { Flex } from '@chakra-ui/react';
import { certification, entrepriseCertifications } from '@/constant/certifications';
import CertificationElement from '@/components/enterprise/certificationElement';

export default function CertificationLayout(): React.JSX.Element {
    return (
        <Flex alignSelf="center" mt="5%">
            <Flex gap={6}>
                {entrepriseCertifications.map((certification: certification) => {
                    return <CertificationElement props={certification} />;
                })}
            </Flex>
        </Flex>
    );
}
