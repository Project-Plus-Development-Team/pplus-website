import { GoodImage } from "shared/components/GoodImage";
import { GeneralCommunity } from "../map/map-types";
import { StaticImageData } from "next/image";
import { Button } from "react-bulma-components";

import styles from "./General.module.scss";
import images from "~capsules/communities";
import pplusLogo from "~generated-images/favicon.webp";

interface ButtonProps {
  logo: StaticImageData;
  text: string;
  url: string;
}

const GeneralCommunityButton = ({ logo, text, url }: ButtonProps) => (
  <Button renderAs="a" href={url}>
    <GoodImage
      img={logo}
      alt={`${text} Logo`}
      style={{
        height: 34,
        width: 34,
        objectFit: "contain",
        marginLeft: "1em",
      }}
      lazy
    />
    <span className="ml-2 mr-4">{text}</span>
  </Button>
);

interface Props {
  generalCommunities: GeneralCommunity[];
}

export const General = ({ generalCommunities }: Props) => (
  <div className={styles.general}>
    {generalCommunities.map((community) => (
      <GeneralCommunityButton
        key={community.displayName}
        text={community.displayName}
        logo={
          community.imageName === "pplusLogo"
            ? pplusLogo
            : images[community.imageName]
        }
        url={community.url}
      />
    ))}
  </div>
);
