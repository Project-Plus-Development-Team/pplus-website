import { AppProps } from "next/app";
import { PageHeader } from "../modules/page-header/PageHeader";
import { DefaultSeoPPlus } from "configuration/DefaultSeoPPlus";
import React from "react";

import "../global.scss";
import "../configuration/fontawesome";
// import "../../public/q9283rw8fg.css";

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  Promise.all([
    import("react-dom"),
    import("@axe-core/react")
  ])
    .then(([ReactDOM, axe]) => {
      axe.default(React, ReactDOM, 1000)
    })
}

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeoPPlus/>
    <PageHeader/>
    <Component {...pageProps}/>
  </>
);

export default App;