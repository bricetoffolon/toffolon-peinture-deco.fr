import React from 'react';
import VerifyUser from '@/components/api/user/verifyUser';
import {Flex} from "@chakra-ui/react";
import NavBarApi from "@/components/layout/NavBar/navBarApi";
import Footer from "@/components/layout/Footer";

export default function VerifyPage(): React.JSX.Element {
    return (
        <>
            <Flex direction={"column"} h={"100vh"}>
                <NavBarApi />
                <Flex flex={"1"} justifyContent={"center"}>
                    <VerifyUser />
                </Flex>
                <Footer />
            </Flex>
        </>
    );
}