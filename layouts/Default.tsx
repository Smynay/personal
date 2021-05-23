import Footer from '@Components/blocks/Footer';
import Header from '@Components/blocks/Header';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { APP_GLOBAL_TITLE } from '@Utils/constants';
import { SETTINGS } from '@Utils/settings';
import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react';
import { Themes } from 'theme';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Unknown' }: Props): ReactElement => (
  <div>
    <Head>
      <title>{`${APP_GLOBAL_TITLE} | ${title}`}</title>
    </Head>
    <ThemeProvider theme={Themes[SETTINGS.theme]}>
      <CssBaseline>
        <Header />
        <main>{children}</main>
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  </div>
);

export default Layout;
