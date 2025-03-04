import React from 'react';

import Posts from '@/components/api/service/posts';
import NavBarApi from '@/components/layout/NavBar/navBarApi';
import ProtectedRoute from "@/components/api/user/protectedRoute";
import {Flex} from "@chakra-ui/react";
import Footer from "@/components/layout/Footer";

export default function PostsPage(): React.JSX.Element {
    return (
        <>
            <Flex direction="column" minH={"100vh"}>
                <NavBarApi />
                <Flex direction={"column"} flex={"1"}>
                    <ProtectedRoute>
                        <Posts />
                    </ProtectedRoute>
                </Flex>
            </Flex>
            <Footer />
        </>

    );
}