import styles from "./General.module.scss";
import images from "~capsules/communities";
import pplusLogo from "~generated-images/favicon.webp";
import { FAButton } from "shared/components/FAButton";
import { GoodImage } from "shared/components/GoodImage";

interface ButtonProps {
  logo: {
    src: string
    height: number
    width: number
    blurDataURL?: string
  }
  text: string
  url: string
}

const Button = ({ logo, text, url }: ButtonProps) => (
  <FAButton renderAs="a" href={url} className="pl-3">
    <GoodImage
      img={logo}
      alt={`${text} Logo`}
      style={{
        height: 34,
        width: 34,
        objectFit: "contain",
        marginLeft: "1em"
      }}
      lazy
    />
    <span className="ml-2 mr-4">{text}</span>
  </FAButton>
);

export const General = () => (
  <div className={styles.general}>
    <Button text="Project+ Discord" url="https://discord.gg/vdssRDg" logo={pplusLogo}/>
    <Button text="Project M Nexus Discord" url="https://discord.gg/sz7JDpR" logo={images["pm-nexus-x-white"]}/>
    <Button text="SmashCords Website" url="https://smashcords.com/brawl" logo={images.smashcords}/>
    <Button text="Project M General Discord" url="https://discord.gg/0P4bR7bAyAZciLYM" logo={images["project-m"]}/>
    <Button text="Beginner PM &amp; P+ Discord" url="https://discord.gg/nKzgmbfXM4" logo={images["beginner-pm-pplus"]}/>
    <Button text="SmashLadder Website" url="https://smashladder.com/netplay" logo={images.smashladder}/>
    <Button text="Brawl Modding Discord" url="https://discord.gg/GbxJhbv" logo={images["custom-brawl-modding"]}/>
    <Button text="Brawlback Discord" url="https://discord.gg/dzYRN32k4D" logo={images.brawlback}/>
    <Button text="Cosmetic Standardization Project" url="https://discord.gg/hQnPXfc" logo={images["cosmetic-standardization-project"]}/>
  </div>
);