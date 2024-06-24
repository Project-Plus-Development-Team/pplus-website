import { Heading } from "react-bulma-components";
import { YouTubePlayer } from "shared/components/YouTubePlayer";
import { GoodImage } from "shared/components/GoodImage";
import { FAQPageJsonLd, NextSeo, SocialProfileJsonLd } from "next-seo";
import { News } from "modules/home/components/News";
import { WhatIsPPlus } from "modules/home/components/WhatIsPPlus";
import { Links } from "modules/home/components/Links";

import glowyFalco from "~generated-images/falco-glowy.webp";
import styles from "modules/home/Home.module.scss";

const Home = () => (
  <main className={styles.content}>
    <NextSeo
      titleTemplate="%s"
      title="Project+ | Community driven patch for Project M"
    />
    <FAQPageJsonLd
      mainEntity={[
        {
          questionName: "What is Project+?",
          acceptedAnswerText: "Project+ is a community driven patch for Project M, a game modification for Super Smash Bros. Brawl."
        }
      ]}
    />
    <SocialProfileJsonLd
      type="Organization"
      name="Project+ Development Team"
      url="https://projectplusgame.com"
      sameAs={[
        "https://twitter.com/ProjectPlusGame",
        "https://www.youtube.com/channel/UCR6pr4sUamrcs879_agUHJA"
      ]}
    />

    <News/>
    <WhatIsPPlus/>

    <div className={styles.falco_wrapper}>
      <GoodImage
        img={glowyFalco}
        alt="Glowing silhuette of Falco"
        className={styles.falco}
      />
    </div>

    <Links/>

    <div style={{gridArea: "youtube"}}>
      <Heading size={2}>Watch the Project+ v3.0 Trailer</Heading>
      <YouTubePlayer
        title="Project+ Trailer Video YouTube Embed"
        id="zhJrTM7r1tE"
      />
    </div>
  </main>
);

export default Home;