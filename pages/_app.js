import '../src/styles/index.css';
import { ThemeProvider } from 'styled-components'

import "../src/styles/fontawesome";

const theme = {
  primary: 'green',
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}