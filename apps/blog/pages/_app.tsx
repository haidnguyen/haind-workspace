import { Box, ChakraProvider } from '@chakra-ui/react';
import { TitleProvider } from '@haind-workspace/blog/data-title';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import en from '../i18n/en.json';
import vi from '../i18n/vi.json';

const messages = {
  en,
  vi,
};

function CustomApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const title = 'Higher-order Engineer';
  const [lang] = locale.split('-');

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' type='image/x-icon' href='/logo.ico' />
      </Head>
      <ChakraProvider>
        <IntlProvider messages={messages[lang]} defaultLocale='en' locale={lang}>
          <TitleProvider title={title}>
            <Box as='main'>
              <Component {...pageProps} />
            </Box>
          </TitleProvider>
        </IntlProvider>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
