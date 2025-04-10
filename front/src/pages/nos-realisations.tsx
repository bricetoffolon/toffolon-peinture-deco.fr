import React from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Realization from '@/components/realization';
import {Flex} from "@chakra-ui/react";

export default function AchievementPage(): React.JSX.Element {
    return (
        <>
            <Flex direction={"column"} minH={"100vh"}>
                <NavBar />
                <Flex flex={"1"}>
                    <Realization />
                </Flex>
            </Flex>
            <Footer />
        </>
    );
}
