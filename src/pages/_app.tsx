// Next.js uses this component to initialize pages.

// This is the correct location for this polyfill since `fetch` may be present
// during server-rendering as well.
import 'isomorphic-unfetch';

import { AppProps } from 'next/app';
import NextHead from 'next/head';
import { WithTranslation } from 'next-i18next';
import { Fragment } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BaseCSS } from 'styled-bootstrap-grid';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';

import { wrapper, persistor } from '~redux/store';
import { appWithTranslation, withTranslation } from '~root/i18n';
import { theme } from '~styles/base';
import GlobalStyle from '~styles/global';

type HeadProps = WithTranslation & {};

const Head = ({ t }: HeadProps) => (
  <NextHead>
    <title>{t('app-title')}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,531;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,531;1,600;1,700;1,800;1,900&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap"
    />
  </NextHead>
);

const MyHead = withTranslation('common')(Head);

const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json());

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <MyHead />
    <BaseCSS />
    <GlobalStyle />
    <PersistGate persistor={persistor}>
      <SWRConfig value={{ fetcher }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </PersistGate>
  </>
);

export default wrapper.withRedux(appWithTranslation(MyApp));
