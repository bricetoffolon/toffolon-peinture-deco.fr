import React from 'react';
import { Card, CardBody, CardHeader, Flex, Heading, Image, Text } from '@chakra-ui/react';
import ButtonBasic from '@/components/layout/Button/buttonBasic';
import buttonList from '@/constant/pageButtonData';
import {
    AddAnimation,
    animateButton,
    animateText1,
    animateText2,
} from '@/components/layout/animations';

export default function MainView(): React.JSX.Element {
    return (
        <Card h="100vh" variant="unstyled" alignItems="center">
            <CardHeader
                mt="1%"
                transition="transform 0.3s"
                _hover={{
                    transform: 'scale(1.05)',
                }}
            >
                <AddAnimation motionOptions={animateButton({ timing: 0.5 })}>
                    <Image
                        src="https://toffolon-website.s3.eu-west-3.amazonaws.com/Toffolon-Icon.png"
                        maxW={{ base: '90vw', xl: '30vw' }}
                    />
                </AddAnimation>
                <AddAnimation motionOptions={animateText2()}>
                    <Text as="b" fontSize={{ base: 'lg', md: '2xl', xl: '2xl' }} color="gray.500">
                        Entreprise de peinture et de rénovations
                    </Text>
                </AddAnimation>
            </CardHeader>
            <CardBody>
                <Flex alignItems="center" direction={{ base: 'column-reverse', xl: 'row' }}>
                    <Flex
                        direction="column"
                        gap={{ base: 1, xl: 6 }}
                        justifyItems="center"
                        maxW={{ base: '80vw', xl: '30vw' }}
                    >
                        <AddAnimation motionOptions={animateText1()}>
                            <Heading
                                size={{ base: '2xl', xl: '4xl' }}
                                color="brand.400"
                                mt={{ base: '5vh', xl: 0 }}
                                textAlign={{ base: 'center', xl: 'left' }}
                            >
                                Entreprise familliale depuis 1960
                            </Heading>
                        </AddAnimation>
                        <AddAnimation motionOptions={animateButton({ timing: 0.5 })}>
                            <ButtonBasic
                                props={{
                                    ...buttonList[0],
                                    variant: 'solid',
                                    fontSize: '2xl',
                                    padding: '10%',
                                    rounded: true,
                                }}
                            />
                        </AddAnimation>
                    </Flex>
                    <AddAnimation motionOptions={animateButton({ timing: 0.8 })}>
                        <Image
                            src="https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/landing1.png"
                            maxH={{ base: '50vh', xl: '60vh' }}
                            mt={{ base: '10%', xl: undefined }}
                        />
                    </AddAnimation>
                </Flex>
            </CardBody>
        </Card>
    );
}
