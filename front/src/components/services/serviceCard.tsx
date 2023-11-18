import React from "react";

import {useBreakpointValue, useDisclosure} from "@chakra-ui/react";

import {AnimatePresence, motion} from 'framer-motion';

import ServiceCardLanding from "@/components/services/serviceCardLanding";
import ServiceCardInfo from "@/components/services/serviceCardInfo";

import {service} from "@/constant/serviceInformation";
import DrawerInfo from "@/components/services/drawerInfo";

export default function ServiceCard({service}: {service: service}) : React.JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const isSmallDevice = useBreakpointValue({base: true, xl: false});

    const cardVariants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
        },
        animate: {
            opacity: 1,
            transition: { duration: 0.5 },
            filter: "blur(0px)",
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 },
            filter: "blur(8px)",
        },
    };

    return (
        <>
            {
                isSmallDevice ? (
                    <>
                        <DrawerInfo service={service} isOpen={isOpen} onClose={onClose}/>
                        <ServiceCardLanding service={service} onOpen={onOpen}/>
                    </>
                ) : (
                    <AnimatePresence mode={"wait"}>
                        {isOpen ? (
                            <motion.div
                                key="serviceCardInfo"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={cardVariants}
                            >
                                <ServiceCardInfo service={service} onClose={onClose}/>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="serviceCardLanding"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={cardVariants}
                            >
                                <ServiceCardLanding service={service} onOpen={onOpen}/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )
            }
        </>
    );

}