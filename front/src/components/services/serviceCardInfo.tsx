import React from "react";

import {
    Card,
} from "@chakra-ui/react";

import {service} from "@/constant/serviceInformation";

import InfoContent from "@/components/services/infoContent";

export default function ServiceCardInfo({service, onClose}: {service: service, onClose: () => void}): React.JSX.Element {
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
            h="90vh"
        >
            <InfoContent
                service={service}
                onClose={onClose}
            />
        </Card>
    );
}