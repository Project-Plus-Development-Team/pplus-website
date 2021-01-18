// Function says: This file is the main app component for the site and used by all pages.
// Here we import everything that's global to the entire site, like the PageHeader ("navigation bar")

import "bulmaswatch/cyborg/bulmaswatch.scss";
import "../styles/global.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { AppProps } from "next/app";
import PageHeader from "../components/PageHeader/PageHeader";
import Head from "next/head";
import { Container } from "react-bulma-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png?v2=dLXjO2Kp56"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v2=dLXjO2Kp56"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v2=dLXjO2Kp56"/>
        <link rel="manifest" href="/site.webmanifest?v2=dLXjO2Kp56"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v2=dLXjO2Kp56" color="#34d171"/>
        <link rel="shortcut icon" href="/favicon.ico?v2=dLXjO2Kp56"/>
        <meta name="msapplication-TileColor" content="#34d171"/>

        {/* theme color for mobile phone tabs */}
        <meta name="theme-color" content="#34d171"/>

        {/* preview image for embeds in some services */}
        <meta name="og:image" content="/images/favicon.png"/>

        <meta name="keywords" content="Smash, Project+, Project M, PM, P+, Smash Mod, Brawl Mod, Update, ProjectM, Project M, P+, Project+, Project Plus, Smash Bros Project Plus, Project M Plus, PM, Smash Bros Brawl, Brawl Mods, Smash Bros Brawl Mods, project m, project m 3.6, project melee, project melee plus, project melee plus, project m mod, project m game, project m plus, jank, knuckles"/>
        <meta name="description" content="Project+ is a balance patch for Project M, a popular Super Smash Bros. Brawl mod"/>
        <meta name="author" content="waffeln"/>
        
        <title>Project+</title>
      </Head>
      <PageHeader/>
      <Container renderAs="main">
        <Component {...pageProps}/>
      </Container>
    </>
  );
}
