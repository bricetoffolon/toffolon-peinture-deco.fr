import React from 'react';
import NavBarApi from '@/components/layout/NavBar/navBarApi';
import Login from '@/components/api/user/login';
import Footer from "@/components/layout/Footer";
import {Flex} from "@chakra-ui/react";

export default function LoginPage(): React.JSX.Element {
    return (
        <>
            <Flex direction={"column"} h={"100vh"}>
                <NavBarApi />
                <Flex flex={"1"}>
                    <Login />
                </Flex>
            </Flex>
            <Footer />
        </>
    );
}