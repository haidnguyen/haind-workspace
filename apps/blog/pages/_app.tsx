import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}

export default CustomApp;
