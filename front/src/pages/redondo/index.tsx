import React from 'react';
import NavBarDashboard from '@/components/layout/NavBar/NavBarDashboard';
import Dashboard from '@/components/api/dashboard/Dashboard';
import ProtectedRoute from "@/components/api/user/protectedRoute";

export default function DashboardPage(): React.JSX.Element {
    return (
        <>
            <NavBarDashboard />
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        </>
    );
}