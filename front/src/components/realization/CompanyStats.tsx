import React from 'react';

import { useSpring, animated } from '@react-spring/web';

import { Flex, Heading, Stat, StatGroup, StatLabel, StatNumber, Image } from '@chakra-ui/react';
import ContactButton from '@/components/layout/Button/contactButton';
import { AddAnimation, animateButton } from '@/components/layout/animations';

function StatCounter({ label, value }: { label: string; value: number }): React.JSX.Element {
    const springProps = useSpring({ to: { count: value }, from: { count: 0 } });

    return (
        <Stat textAlign="center">
            <StatLabel textShadow="0.1px 0.1px" whiteSpace="nowrap" color="brand.400">
                {label}
            </StatLabel>
            <StatNumber>
                +
                <animated.span>
                    {springProps.count.interpolate(() => Math.floor(value))}
                </animated.span>
            </StatNumber>
        </Stat>
    );
}

export default function CompanyStat(): React.JSX.Element {
    const year = new Date().getFullYear();

    return (
        <Flex direction="column" gap={10} alignItems="center" padding="3%" minW="50%">
            <Heading alignItems="center" justifyContent="center">
                Découvrez notre{' '}
                <Heading as="span" color="brand.500">
                    expertise
                </Heading>
            </Heading>
            <AddAnimation motionOptions={animateButton({ timing: 0.5 })}>
                <Image src="https://toffolon-website.s3.eu-west-3.amazonaws.com/realization/static/static1" />
            </AddAnimation>
            <StatGroup alignItems="center" gap={6}>
                <StatCounter label={"Années d'expérience"} value={year - 1960} />
                <StatCounter label="Nombre de projets par an" value={100} />
            </StatGroup>
            <ContactButton props={{ rounded: true }} />
        </Flex>
    );
}
