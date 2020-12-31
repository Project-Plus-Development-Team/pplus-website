import "bulma/bulma.sass";
import "bulmaswatch/cyborg/bulmaswatch.min.css";
import "../styles/global.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { AppProps } from "next/app";
import PageHeader from "../components/PageHeader";
import Head from "next/head";
import { getVersions } from "../lib/changes";

export default function App({ Component, pageProps, versions }: AppProps & { versions: any }) {
  console.log("VERSIONS", versions);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Smash, Project+, Project M, PM, P+, Smash Mod, Brawl Mod, Update, ProjectM, Project M, P+, Project+, Project Plus, Smash Bros Project Plus, Project M Plus, PM, Smash Bros Brawl, Brawl Mods, Smash Bros Brawl Mods, project m, project m 3.6, project melee, project melee plus, project melee plus, project m mod, project m game, project m plus, jank, knuckles"/>
        <meta name="description" content="Project+ is a balance patch for Project M, a popular Super Smash Bros. Brawl mod"/>
        <meta name="author" content="waffeln"/>

        {/* theme color for mobile phone tabs */}
        <meta name="theme-color" content="#34d171"/>

        {/* preview image for embeds in some services */}
        <meta name="og:image" content="/img/favicon.png"/>
        
        <title>Project+ Website</title>
      </Head>
      <PageHeader versions={versions}/>
      <Component {...pageProps}/>
    </>
  );
}

export async function getStaticProps() {
  const versions = await getVersions();

  return {
    props: {
      versions
    }
  };
}
