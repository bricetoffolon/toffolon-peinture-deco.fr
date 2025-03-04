import React from 'react';
import NavBarApi from '@/components/layout/NavBar/navBarApi';
import Dashboard from '@/components/api/dashboard/Dashboard';
import ProtectedRoute from "@/components/api/user/protectedRoute";

export default function DashboardPage(): React.JSX.Element {
    return (
        <>
            <NavBarApi />
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        </>
    );
}