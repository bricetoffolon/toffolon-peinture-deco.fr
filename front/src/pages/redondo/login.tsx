import React from 'react';
import NavBarDashboard from '@/components/layout/NavBar/NavBarDashboard';
import Login from '@/components/api/user/login';

export default function LoginPage(): React.JSX.Element {
    return (
        <>
            <NavBarDashboard />
            <Login />
        </>
    );
}