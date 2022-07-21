import { ChakraProvider, Text } from '@chakra-ui/react';
import { AppProps } from 'next/app';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main>
        <Component {...pageProps} />
        <Text color='pink.500'>Test</Text>
      </main>
    </ChakraProvider>
  );
}

export default CustomApp;
