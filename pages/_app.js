import { ThemeProvider } from "styled-components";
import { theme } from "~/styles";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboard, faSearch, faBullhorn } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faClipboard, faSearch, faBullhorn);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
