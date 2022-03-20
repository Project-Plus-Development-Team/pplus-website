import Image from "next/image";
import Link from "next/link";
import { Heading, Content } from "react-bulma-components";
import FAButton from "../components/FAButton";
import { sortedVersions } from "../components/PageHeader/PageHeader";
import { YouTubePlayer } from "../components/YouTubePlayer";
import { useViewportWidth } from "../lib/use-viewport-width";
import glowyFalco from "../public/images/falco-glowy.png";

import styles from "../styles/home.module.scss";

export default function Home() {
  const width = useViewportWidth();
  const newsButtonSize = width < 768 ? "normal" : "large";

  return (
    <div className={styles.content}>
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
            Find communities
          </FAButton>
        </Link>
      </div>

      <div className={styles.falco_wrapper}>
        <Image
          src={glowyFalco}
          width="300"
          height="366"
          alt="Glowy, translucent Falco"
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
        <Heading>Project+ is...</Heading>
        <Content>
          <ul className={styles.list}>
            <li>is a community driven patch for Project M</li>
            <li>strives to invigorate the Project M experience</li>
            <li>further balances the roster</li>
            <li>fixes lingering 3.6 bugs</li>
            <li>gives the entire UI a fresh coat of paint</li>
            <li>adjusts movesets to be more fun to play with and against</li>
            <li>introduces new gameplay mechanics to Project M</li>
            <li>includes new features such as those created by the Legacy TE team for Legacy TE 2.5.</li>
          </ul>
        </Content>
      </div>
    </div>
  );
}