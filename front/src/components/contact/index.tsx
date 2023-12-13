import React from 'react';
import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import ContactForm from '@/components/contact/ContactForm';
import ContactInformation from '@/components/contact/ContactInformation';

import { motion } from 'framer-motion';

export default function Contact(): React.JSX.Element {
    return (
        <Container
            maxW="full"
            overflow={{
                base: undefined,
                xl: 'hidden',
            }}
            h={{
                base: undefined,
                xl: '100vh',
            }}
            padding="3%"
        >
            <Flex direction="column" gap="10%">
                <Flex direction="column" alignSelf="center" alignItems="center">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        initial={{ y: -150, filter: 'blur(2px)' }}
                        animate={{ y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <Heading
                            size={{
                                base: 'xl',
                                xl: '4xl',
                            }}
                        >
                            Contactez-nous dès{' '}
                            <Heading size={{ base: 'xl', xl: '4xl' }} as="span" color="brand.500">
                                maintenant !
                            </Heading>
                        </Heading>
                    </motion.div>
                    <Flex mt="2%" mb="2%">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ x: -50, filter: 'blur(2px)' }}
                            animate={{ x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <Text as="b" fontSize={{ base: 'xl', xl: '4xl' }} color="brand.400">
                                Pour un devis gratuit et personnalisé, <br />
                                n&apos;hésitez pas à prendre contact avec nous
                            </Text>
                        </motion.div>
                    </Flex>
                </Flex>
                <Flex
                    direction={{
                        base: 'column',
                        xl: 'row',
                    }}
                >
                    <ContactForm />
                    <ContactInformation />
                </Flex>
            </Flex>
        </Container>
    );
}
