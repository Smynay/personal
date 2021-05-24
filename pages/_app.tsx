import { APP_GLOBAL_TITLE } from '@Utils/constants';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{APP_GLOBAL_TITLE}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
