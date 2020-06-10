import NextApp from 'next/app'
import React from 'react'
import { StylesProvider, MuiThemeProvider, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import jssPluginIsolate from 'jss-plugin-isolate';
import CssBaseline from '@material-ui/core/CssBaseline';
import { I18nextProvider } from 'react-i18next';

import theme from '../src/theme';
import i18n from '../src/config/i18n';

import '../src/styles/index.css';

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginIsolate()],
});

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <I18nextProvider i18n={i18n}>
            <Component {...pageProps} />
          </I18nextProvider>
        </MuiThemeProvider>
      </StylesProvider>
    )
  }
}