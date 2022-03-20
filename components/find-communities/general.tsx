import Image from "next/image";
import FAButton from "../FAButton";

import styles from "./General.module.scss";

import pplusLogo from "../../public/favicon.png";
import brawlbackLogo from "../../public/logos/brawlback.png";
import pmnexusLogo from "../../public/logos/pm-nexus-x-white.png";
import smashcordsLogo from "../../public/logos/smashcords.png";
import beginnerLogo from "../../public/logos/beginner-pm-pplus.webp";
import projectmLogo from "../../public/logos/project-m.png";
import smashladderLogo from "../../public/logos/smashladder.png";
import brawlmoddingLogo from "../../public/logos/custom-brawl-modding.png";

interface Props {
  logo: {
    src: string
    height: number
    width: number
    blurDataURL?: string
  }
  text: string
  url: string
}

const Button = ({ logo, text, url }: Props) => (
  <FAButton renderAs="a" href={url} className="pl-3" target="_blank">
    {/* <Image src={logo} height={34} width={34} objectFit="contain"/> */}
    <img
      src={logo.src}
      style={{
        height: 34,
        width: 34,
        objectFit: "contain",
        marginLeft: "1em"
      }}
    />
    <span className="ml-2 mr-4">{text}</span>
  </FAButton>
);

export const General = () => (
  <div className={styles.general}>
    <Button text="Project+ Discord" url="https://discord.gg/vdssRDg" logo={pplusLogo}/>
    <Button text="Project M Nexus Discord" url="https://discord.gg/sz7JDpR" logo={pmnexusLogo}/>
    <Button text="SmashCords Website" url="https://smashcords.com/brawl" logo={smashcordsLogo}/>
    <Button text="Project M General Discord" url="https://discord.gg/0P4bR7bAyAZciLYM" logo={projectmLogo}/>
    <Button text="Beginner PM &amp; P+ Discord" url="https://discord.gg/nKzgmbfXM4" logo={beginnerLogo}/>
    <Button text="SmashLadder Website" url="https://smashladder.com/netplay" logo={smashladderLogo}/>
    <Button text="Brawl Modding Discord" url="https://discord.gg/GbxJhbv" logo={brawlmoddingLogo}/>
    <Button text="Brawlback Discord" url="https://discord.gg/dzYRN32k4D" logo={brawlbackLogo}/>
  </div>
);