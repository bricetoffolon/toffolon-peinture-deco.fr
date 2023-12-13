import React from 'react';

import { Flex } from '@chakra-ui/react';

import ContactButton from '@/components/layout/Button/contactButton';
import ButtonBasic from '@/components/layout/Button/buttonBasic';
import buttonList from '@/constant/pageButtonData';

function PageButton(): React.JSX.Element {
    return (
        <Flex
            gap={6}
            direction={{
                base: 'column',
                xl: 'row',
            }}
        >
            {buttonList
                ? buttonList.map((element) => {
                      return <ButtonBasic props={element} />;
                  })
                : null}
            <ContactButton props={{}} />
        </Flex>
    );
}

export default PageButton;
