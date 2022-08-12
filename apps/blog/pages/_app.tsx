import { Box, ChakraProvider } from '@chakra-ui/react';
import { TitleProvider } from '@haind-workspace/blog/data-title';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import '@fontsource/montserrat';
import en from '../i18n/en.json';
import vi from '../i18n/vi.json';

const messages = {
  en,
  vi,
};

function CustomApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [lang] = locale.split('-');

  return (
    <>
      <Head>
        <link rel='icon' type='image/x-icon' href='/logo.ico' />
      </Head>

      <ChakraProvider>
        <IntlProvider messages={messages[lang]} defaultLocale='en' locale={lang}>
          <TitleProvider
            author='Hai Nguyen'
            description="Hai's personal blog"
            keywords={['Blog', 'Angular', 'React', 'Javascript', 'Typescript', 'Functional Progamming']}
            siteUrl='https://haidnguyen.dev'
            title='Higher-order Enginerr'
          >
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
