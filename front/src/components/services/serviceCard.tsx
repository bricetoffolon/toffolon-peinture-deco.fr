import React, {useState} from "react";

import ServiceCardLanding from "@/components/services/serviceCardLanding";
import ServiceCardInfo from "@/components/services/serviceCardInfo";

import {AnimatePresence, motion} from 'framer-motion';

import {service} from "@/constant/serviceInformation";

export default function ServiceCard({service}: {service: service}) : React.JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

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
            <AnimatePresence mode={"wait"}>
                {isOpen ? (
                    <motion.div
                        key="serviceCardInfo"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={cardVariants}
                    >
                        <ServiceCardInfo service={service} isOpen={isOpen} setIsOpen={setIsOpen}/>
                    </motion.div>
                ) : (
                    <motion.div
                        key="serviceCardLanding"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={cardVariants}
                    >
                        <ServiceCardLanding service={service} isOpen={isOpen} setIsOpen={setIsOpen}/>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );

}