import React from 'react';

import { Flex, Heading, Icon, Img, Text } from '@chakra-ui/react';
import { FaHammer } from 'react-icons/fa';
import { entrepriseInformation } from '@/constant/entrepriseInformation';
import { AddAnimation, animateText } from '@/components/enterprise/animations';

export default function KnowHowContent(): React.JSX.Element {
    return (
        <Flex alignSelf="center" direction="column" gap={6}>
            <Flex alignItems="center" gap={3}>
                <Icon
                    as={FaHammer}
                    boxSize={{ base: '5em', xl: '8em' }}
                    color="blue.200"
                    padding="1%"
                    bg="brand.500"
                    borderRadius="lg"
                    boxShadow="xl"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                />
                <Heading size={{ base: 'lg', xl: '2xl' }}>{entrepriseInformation[1].title}</Heading>
            </Flex>
            <Flex alignItems="center" direction={{ base: 'column', xl: 'row' }}>
                <Img
                    src="https://toffolon-website.s3.eu-west-3.amazonaws.com/contact/DALL%C2%B7E+2023-11-19+02.25.28+-+A+flat+vector+design+representing+the+art+of+building+painting.+The+image+features+a+stylized%2C+simplistic+representation+of+an+artisan+painting+a+larg.png"
                    w={{ base: '90vw', xl: '40vw' }}
                />
                <AddAnimation motionOptions={animateText({ timing: 0.5 })}>
                    <Text
                        as="b"
                        color="gray.500"
                        fontSize={{ base: '2xl', xl: '3xl' }}
                        maxW={{ base: '90vw', xl: '50vw' }}
                    >
                        {entrepriseInformation[1].paragraph}
                    </Text>
                </AddAnimation>
            </Flex>
        </Flex>
    );
}
