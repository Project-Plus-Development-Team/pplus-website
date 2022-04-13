import { AppProps } from "next/app";
import { PageHeader } from "../modules/page-header/PageHeader";
import { DefaultSeoPPlus } from "configuration/DefaultSeoPPlus";

import "../global.scss";
import "../configuration/fontawesome";
// import "../../public/q9283rw8fg.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeoPPlus/>
    <PageHeader/>
    <Component {...pageProps}/>
  </>
);

export default App;