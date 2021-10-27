import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/reset.css';
import '../styles/globals.css';
import Page from '../components/utils/Page';
// import ThemeProvider from '../components/utils/Theme/ThemeProvider';
// import { useContext, useState } from 'react';
// import { themes } from '../components/utils/Theme/Themes';
// import ThemeContext from '../components/utils/Theme/ThemeContext';

import { ThemeProvider } from '../components/utils/Themes/ThemeContext';

/**
 *
 * @param {function} Component Properties passed into the function
 * @returns {function} JSX Function
 */
function MyApp({ Component, pageProps }: AppProps): unknown {
  // const theme = useContext(ThemeContext);

  // const themeStyles = {
  //   background: theme.background,
  //   color: theme.text,
  // };

  return (
    <>
      <Head>
        <title>NextJS Base | Lodestone Studio</title>
        <link rel="shortcut icon" href="/Favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider>
        <Page>
          {/* <div style={themeStyles}> */}
          <Component {...pageProps} />
          {/* </div> */}
        </Page>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
