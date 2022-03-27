import "../global.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { AppProps } from "next/app";
import { PageHeader } from "../modules/PageHeader/PageHeader";
import { Container } from "react-bulma-components";
import { DefaultSeoPPlus } from "DefaultSeoPPlus";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeoPPlus/>
    <PageHeader/>
    <Container renderAs="main">
      <Component {...pageProps}/>
    </Container>
  </>
);

export default App;