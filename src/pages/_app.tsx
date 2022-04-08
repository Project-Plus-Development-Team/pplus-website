import { AppProps } from "next/app";
import { PageHeader } from "../modules/page-header/PageHeader";
import { DefaultSeoPPlus } from "configuration/DefaultSeoPPlus";

import "../global.scss";
import "../configuration/fontawesome";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeoPPlus/>
    <PageHeader/>
    <Component {...pageProps}/>
  </>
);

export default App;