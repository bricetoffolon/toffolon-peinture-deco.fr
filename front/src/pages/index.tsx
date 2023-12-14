import React from 'react';

import NavBar from '@/components/layout/NavBar';
import Landing from '@/components/landing/';

function LandingPage(): React.JSX.Element {
    return (
        <div>
            <NavBar />
            <Landing />
        </div>
    );
}

export default LandingPage;
