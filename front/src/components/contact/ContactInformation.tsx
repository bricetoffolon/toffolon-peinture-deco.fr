import React from 'react';
import { Flex } from '@chakra-ui/react';
import informationData from '@/constant/informationData';
import InformationButton from '@/components/contact/informationButton';

export default function ContactInformation(): React.JSX.Element {
    return (
        <Flex
            direction="column"
            gap={{
                base: '10%',
                xl: '10',
            }}
            alignSelf={{
                base: 'center',
                xl: 'flex-start',
            }}
            ml={{
                base: 0,
                xl: '15%',
            }}
            mt={{
                base: 0,
                xl: '5%',
            }}
        >
            {informationData().map((data) => {
                return (
                    <InformationButton
                        // @ts-ignore
                        Icon={data.Icon}
                        text={data.text}
                        content={data.content}
                        catchPhrase={data.catchPhrase}
                    />
                );
            })}
        </Flex>
    );
}
