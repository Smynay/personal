import Footer from '@Components/blocks/Footer';
import Header from '@Components/blocks/Header';
import NavMenu from '@Components/elements/NavMenu';
import { CssBaseline } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { ThemeProvider } from '@material-ui/styles';
import { APP_GLOBAL_TITLE } from '@Utils/constants';
import { SETTINGS } from '@Utils/settings';
import Head from 'next/head';
import React, { ReactElement, ReactNode, useState } from 'react';
import { Themes } from 'theme';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Unknown' }: Props): ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <Head>
        <title>{`${APP_GLOBAL_TITLE} | ${title}`}</title>
      </Head>
      <ThemeProvider theme={Themes[SETTINGS.theme]}>
        <CssBaseline>
          <Header onMenuClick={toggleDrawer} />
          <main>{children}</main>
          <Footer />
          <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} color="primary.main">
            <NavMenu />
          </Drawer>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
