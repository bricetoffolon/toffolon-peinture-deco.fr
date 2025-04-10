import React from 'react';
import UpdatePass from '@/components/api/user/updatePass';
import {Flex} from "@chakra-ui/react";
import NavBarApi from "@/components/layout/NavBar/navBarApi";
import Footer from "@/components/layout/Footer";

export default function PasswordPage(): React.JSX.Element {
    return (
        <Flex direction="column" h={"100vh"}>
            <NavBarApi/>
            <Flex direction="column" alignItems="center" padding={"1%"} flex={"1"}>
                <UpdatePass />
            </Flex>
            <Footer />
        </Flex>
    );
}