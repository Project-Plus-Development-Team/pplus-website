import Link from "next/link";
import { Heading, Content, Button, Box } from "react-bulma-components";
import { sortedVersions } from "../modules/PageHeader/PageHeader";
import { useViewport } from "../shared/hooks/use-viewport";
import glowyFalco from "~generated-images/falco-glowy.webp";

import styles from "../modules/home/home.module.scss";
import { FAButton } from "shared/components/FAButton";
import { YouTubePlayer } from "shared/components/YouTubePlayer";
import { GoodImage } from "shared/components/GoodImage";
import { FAQPageJsonLd, NextSeo, SocialProfileJsonLd } from "next-seo";

const Home = () => {
  const { isMobile } = useViewport();
  const newsButtonSize = isMobile ? "normal" : "large";

  return (
    <div className={styles.content}>
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
      <div className={`container ${styles.news}`}>
        <Link href="/download" passHref>
          <FAButton
            color="link"
            className="has-text-weight-bold"
            icon="fas fa-download"
            title="Download the latest version of Project+"
            size={newsButtonSize}
          >
            Download Project+ v{sortedVersions[sortedVersions.length - 1]}
          </FAButton>
        </Link>
        <Link href="/find-communities" passHref>
          <FAButton
            color="success"
            className={`has-text-weight-bold has-new ${styles.new_button}`}
            icon="fas fa-search"
            title="Find communities for your character, region, or other interests"
            size={newsButtonSize}
          >
            Find Communities
          </FAButton>
        </Link>
      </div>

      <div className={styles.falco_wrapper}>
        {/* TODO add width/height attributes to all imgs [CLS] */}
        <GoodImage
          img={glowyFalco}
          alt="Glowing silhuette of Falco"
          className={styles.falco}
        />
      </div>

      <div style={{gridArea: "youtube"}}>
        <Heading size={4}>Watch the Project+ Trailer</Heading>
        <YouTubePlayer
          title="Project+ Trailer Video YouTube Embed"
          id="z_Hm9FBMz1M"
        />
      </div>

      <div style={{gridArea: "text"}}>
        <Heading>What is Project+?</Heading>
        <Heading subtitle marginless>Project+...</Heading>
        <Content>
          <ul className={styles.list}>
            <li>is a community driven patch for Project M, a game modification for Super Smash Bros. Brawl</li>
            <li>strives to invigorate the Project M experience</li>
            <li>further balances the roster</li>
            <li>fixes lingering Project M 3.6 bugs</li>
            <li>gives the entire UI a fresh coat of paint</li>
            <li>adjusts movesets to be more fun to play with and against</li>
            <li>introduces new gameplay mechanics to Project M</li>
            <li>includes new features such as those created by the Legacy TE team for Legacy TE 2.5.</li>
          </ul>
        </Content>
      </div>

      <Box className="p-4" style={{ gridArea: "links" }}>
        <Heading subtitle className="mb-3" weight="light" size={4}>Join or follow us!</Heading>

        <div className={`flex-grow-children ${styles.links_container}`}>
          <FAButton icon="fab fa-discord" renderAs="a" href="/discord" title="Project+ Discord Server">Project+</FAButton>
          <FAButton icon="fab fa-reddit" renderAs="a" href="https://reddit.com/r/ssbpm" title="Project M Subreddit">r/ssbpm</FAButton>
          <FAButton icon="fab fa-twitter" renderAs="a" href="https://twitter.com/ProjectPlusGame" title="Project+ on Twitter">@ProjectPlusGame</FAButton>
          <FAButton icon="fa-solid fa-book" renderAs="a" href="https://www.ssbwiki.com/Project%2B" title="SmashWiki Entry">SmashWiki</FAButton>
          <FAButton icon="fab fa-github" renderAs="a" href="https://github.com/FunctionDJ/projectplusgame.com" title="Website source code on GitHub">Website Source</FAButton>
        </div>
      </Box>
    </div>
  );
};

export default Home;