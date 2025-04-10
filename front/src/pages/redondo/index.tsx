import React from 'react';
import NavBarApi from '@/components/layout/NavBar/navBarApi';
import Dashboard from '@/components/api/dashboard/Dashboard';
import ProtectedRoute from "@/components/api/user/protectedRoute";
import {Flex} from "@chakra-ui/react";
import Footer from "@/components/layout/Footer";

export default function DashboardPage(): React.JSX.Element {
    return (
        <>
            <Flex direction={"column"} h={"100vh"}>
                <NavBarApi />
                <Flex direction={"column"} flex={"1"}>
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                </Flex>
            </Flex>
            <Footer />
        </>
    );
}