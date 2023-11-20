import React from 'react';
import { Flex, Heading, Text, Image, useBreakpointValue, Card, CardBody } from '@chakra-ui/react';
import { buttonList } from '@/constant/pageButtonData';
import PageIcon from '@/components/landing/pageIcon';
import ContactButton from '@/components/layout/Button/contactButton';
import {
    AddAnimation,
    animateButton,
    animateLayout,
    animateText,
} from '@/components/layout/animations';

export default function KnowMoreView(): React.JSX.Element {
    const isSmallDevice = useBreakpointValue({ base: true, xl: false });

    return (
        <Card
            style={{
                scrollSnapAlign: 'start',
            }}
            h="100vh"
            variant="unstyled"
            paddingLeft={{ base: '5%', xl: '0%' }}
            paddingRight={{ base: '5%', xl: '0%' }}
        >
            <CardBody>
                <Flex direction="column">
                    <Flex direction="column" alignItems="center">
                        <AddAnimation motionOptions={animateText({ timing: 0.5 })}>
                            <Heading
                                color="brand.400"
                                size={{ base: 'xl', xl: '4xl' }}
                                maxW={{ base: '80vw', xl: undefined }}
                            >
                                Besoin d'en savoir plus ?
                            </Heading>
                        </AddAnimation>
                        <AddAnimation motionOptions={animateText({ timing: 0.8 })}>
                            <Text
                                as="b"
                                color="gray.500"
                                fontSize={{ base: 'xl', xl: '4xl' }}
                                maxW={{ base: '80vw', xl: undefined }}
                            >
                                L'entreprise Toffolon vous proprose plusieurs types de services
                            </Text>
                        </AddAnimation>
                    </Flex>
                    <Flex
                        gap={{ base: 3, xl: 20 }}
                        direction={{ base: 'column', xl: 'row' }}
                        alignItems={{ base: 'center', xl: undefined }}
                    >
                        <AddAnimation motionOptions={animateLayout({ timing: 0.8 })}>
                            <Image
                                src="https://toffolon-website.s3.eu-west-3.amazonaws.com/landing/landing2.png"
                                w={{ base: '80vw', xl: '50vw' }}
                            />
                        </AddAnimation>
                        <Flex
                            gap={{ base: 10, xl: 20 }}
                            alignSelf="center"
                            direction={{ base: 'row', xl: 'column' }}
                        >
                            {buttonList
                                ? buttonList.slice(1).map((buttonData) => {
                                      return (
                                          <PageIcon
                                              Icon={buttonData.icon}
                                              href={buttonData.href}
                                              info={buttonData.info}
                                              name={buttonData.name}
                                          />
                                      );
                                  })
                                : null}
                        </Flex>
                    </Flex>
                    <Flex alignSelf="center" mt={{ base: '10%', xl: '0%' }}>
                        <AddAnimation motionOptions={animateButton({ timing: 0.5 })}>
                            <ContactButton
                                props={{
                                    rounded: true,
                                    fontSize: isSmallDevice ? 'xl' : '4xl',
                                    padding: '10%',
                                }}
                            />
                        </AddAnimation>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
}
