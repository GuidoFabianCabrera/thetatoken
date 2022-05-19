import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';

import theme from '../styles/theme/theme';
import '../styles/globals.scss';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  return <Wrapper {...props} />;
};

const Wrapper = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

const hocs = [];

export default hocs.reduce((prev, current) => current(prev), MyApp);
