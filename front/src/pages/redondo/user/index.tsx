import React from 'react';
import AddUser from '@/components/api/user/addUser';
import NavBarDashboard from '@/components/layout/NavBar/NavBarDashboard';

export default function AddUserPage(): React.JSX.Element {
    return (
        <>
            <NavBarDashboard />
            <AddUser />
        </>
    );
}
