import React from 'react';

import Posts from '@/components/api/posts';
import NavBarDashboard from '@/components/layout/NavBar/NavBarDashboard';

export default function PostsPage(): React.JSX.Element {
    return (
        <>
            <NavBarDashboard />
            <Posts />
        </>
    );
}