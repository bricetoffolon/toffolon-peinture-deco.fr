import React from 'react';

import Posts from '@/components/api/service/posts';
import NavBarDashboard from '@/components/layout/NavBar/NavBarDashboard';
import ProtectedRoute from "@/components/api/user/protectedRoute";

export default function PostsPage(): React.JSX.Element {
    return (
        <>
            <NavBarDashboard />
            <ProtectedRoute>
                <Posts />
            </ProtectedRoute>
        </>
    );
}