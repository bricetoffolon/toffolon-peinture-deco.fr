import React from 'react';

import { Card } from '@chakra-ui/react';

import { service } from '@/constant/serviceInformation';

import InfoContent from '@/components/services/infoContent';

export default function ServiceCardInfo({
    serviceElement,
    onClose,
}: {
    serviceElement: service;
    onClose: () => void;
}): React.JSX.Element {
    return (
        <Card
            style={{
                scrollSnapAlign: 'start',
            }}
            borderColor="whiteAlpha.500"
            variant={{
                base: 'elevated',
                xl: 'unstyled',
            }}
            h="100vh"
        >
            <InfoContent serviceElement={serviceElement} onClose={onClose} />
        </Card>
    );
}
