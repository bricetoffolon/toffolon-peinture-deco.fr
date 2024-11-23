import React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { AppProps } from 'next/app';

import '@/styles/carousel.css';

import Head from 'next/head';


const theme = extendTheme({
    colors: {
        brand: {
            250: '#108BDD40',
            400: '#108BDDCC',
            500: '#108BDD',
            600: '#0C6BAF',
            900: '#0C5D89',
        },
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Toffolon - Entreprise Générale de Peintures et de Décoration</title>
                <link rel="icon" href="/favicon.png" type="image/png"/>
            </Head>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
