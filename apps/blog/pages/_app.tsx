import { Box, ChakraProvider } from '@chakra-ui/react';
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
          <Box as='main' bgColor='blackAlpha.100'>
            <Component {...pageProps} />
          </Box>
        </TitleProvider>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
