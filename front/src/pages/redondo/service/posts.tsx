import React from 'react';

import Posts from '@/components/api/service/posts';
import NavBarDashboard from '@/components/layout/NavBar/NavBarDashboard';

export default function PostsPage(): React.JSX.Element {
    return (
        <>
            <NavBarDashboard />
            <Posts />
        </>
    );
}