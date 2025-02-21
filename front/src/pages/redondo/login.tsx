import React from 'react';
import NavBarDashboard from '@/components/layout/NavBar/NavBarDashboard';
import Login from '@/components/api/user/Login';

export default function LoginPage(): React.JSX.Element {
    return (
        <>
            <NavBarDashboard />
            <Login />
        </>
    );
}