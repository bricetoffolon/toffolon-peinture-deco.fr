import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '@/styles/carousel.css';

const theme = extendTheme({
    colors: {
        brand: {
            250: "#108BDD40",
            500: "#108BDD",
            900: "#0C5D89"
        }
    }
})

function MyApp({ Component, pageProps }: any) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp;