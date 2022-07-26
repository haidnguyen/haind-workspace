import { ChakraProvider } from '@chakra-ui/react';
import { TitleProvider } from '@haind-workspace/blog/data-title';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  const title = 'Higher-order Engineer';
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' type='image/x-icon' href='/logo.ico' />
      </Head>
      <ChakraProvider>
        <TitleProvider title={title}>
          <main>
            <Component {...pageProps} />
          </main>
        </TitleProvider>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
