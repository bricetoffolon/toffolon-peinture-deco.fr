import React from 'react';

import { Drawer, DrawerContent, DrawerOverlay, DrawerBody } from '@chakra-ui/react';
import InfoContent from "@/components/services/infoContent";
import {service} from "@/constant/serviceInformation";

export default function DrawerInfo({ service, isOpen, onClose }: {service: service, isOpen: boolean, onClose: () => void}) {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} size="full" placement="bottom">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerBody paddingTop="20%">
                    <InfoContent service={service} onClose={onClose} />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
