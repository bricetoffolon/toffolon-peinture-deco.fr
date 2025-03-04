import { ReactNode, useEffect } from 'react';
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/router";
import {Flex, Spinner} from "@chakra-ui/react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/redondo/login");
        }
        if (!isLoading && user && user.role !== "ADMIN") {
            router.push("/redondo/user/verify");
        }
    }, [isLoading, user, router]);

    if (isLoading) {
        return (
            <Flex justify="center" align="center" height="100vh">
                <Spinner size="xl" />
            </Flex>
        );
    }

    return user ? <>{children}</> : null;
}