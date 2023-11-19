import React from 'react';
import { motion } from 'framer-motion';
import { Flex, Heading, Text } from '@chakra-ui/react';

import { entrepriseInformation } from '@/constant/entrepriseInformation';
import PersonPresentation from '@/components/enterprise/personPresentation';

export default function FamilyContent(): React.JSX.Element {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 20,
                }}
            >
                <Heading size={{ base: 'lg', xl: '4xl' }}>
                    Depuis{' '}
                    <Heading as="span" color="brand.400" size={{ base: 'lg', xl: '4xl' }}>
                        1960
                    </Heading>
                </Heading>
            </motion.div>
            <Flex gap={6} justifyContent="center" alignItems="center">
                <Flex direction="column">
                    <Heading size={{ base: 'lg', xl: '2xl' }}>
                        {entrepriseInformation[0].title}
                    </Heading>
                    <Text as="b" color="gray.500" fontSize={{ base: 'lg', xl: '2xl' }} maxW="30vw">
                        {entrepriseInformation[0].paragraph}
                    </Text>
                </Flex>
                <PersonPresentation
                    name="Alfred Toffolon"
                    picture="https://toffolon-website.s3.eu-west-3.amazonaws.com/contact/previous-owner.png"
                    title={"Fondateur et Gérant jusqu'en 1991"}
                />
                <PersonPresentation
                    name="Jean-Marc Toffolon"
                    picture="https://toffolon-website.s3.eu-west-3.amazonaws.com/contact/owner.png"
                    title="Gérant depuis 1991"
                />
            </Flex>
        </>
    );
}
