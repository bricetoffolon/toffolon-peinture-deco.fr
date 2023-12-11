import React from 'react';
import NavBar from '@/components/layout/NavBar';
import Index from '@/components/legalMention';
import Footer from '@/components/layout/Footer';

export default function LegalMentionPage(): React.JSX.Element {
    return (
        <>
            <NavBar />
            <Index />
            <Footer />
        </>
    );
}
