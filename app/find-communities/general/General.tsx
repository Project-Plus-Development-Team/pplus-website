import type { StaticImageData } from "next/image";
import { GoodImage } from "app/components/GoodImage";
import type { GeneralCommunity } from "../map/map-types";

import images from "~image-indexes/communities";
import pplusLogo from "~generated-images/favicon.webp";
import styles from "./General.module.scss";

interface ButtonProps {
	logo: StaticImageData;
	text: string;
	url: string;
}

const GeneralCommunityButton = ({ logo, text, url }: ButtonProps) => (
	<a className="button" href={url}>
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
	</a>
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
