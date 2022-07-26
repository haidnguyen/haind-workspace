import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Higher-order Engineer</title>
      </Head>
      <ChakraProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
