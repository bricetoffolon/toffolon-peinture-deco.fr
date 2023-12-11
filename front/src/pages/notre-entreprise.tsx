import React from 'react';

import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Enterprise from '../components/enterprise';

export default function EnterprisePage(): React.JSX.Element {
    return (
        <>
            <NavBar />
            <Enterprise />
            <Footer />
        </>
    );
}
