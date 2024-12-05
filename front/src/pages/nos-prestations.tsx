 import React from 'react';

import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Services from '../components/services';

export default function ServicesPage(): React.JSX.Element {
    return (
        <>
            <NavBar />
            <Services />
        </>
    );
}
