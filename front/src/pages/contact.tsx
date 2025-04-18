import React from 'react';

import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/contact';

export default function contactPage(): React.JSX.Element {
    return (
        <>
            <NavBar />
            <Contact />
            <Footer />
        </>
    );
}
