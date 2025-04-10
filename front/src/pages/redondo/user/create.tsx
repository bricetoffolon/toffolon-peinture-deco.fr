import React from 'react';
import AddUser from '@/components/api/user/addUser';
import NavBarApi from '@/components/layout/NavBar/navBarApi';
import Footer from "@/components/layout/Footer";
import {Flex} from "@chakra-ui/react";

export default function AddUserPage(): React.JSX.Element {
    return (
        <>
            <Flex h={"100vh"} direction={"column"}>
                <NavBarApi />
                <Flex flex={"1"}>
                    <AddUser />
                </Flex>
            </Flex>
            <Footer />
        </>
    );
}