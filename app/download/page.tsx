import {
	faApple,
	faLinux,
	faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBoxOpen,
	faSdCard,
	type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import { YouTubePlayer } from "app/components/YouTubePlayer";
import importedLinkGroups from "./download.json";
import { getSortedVersions } from "app/changes/get-version";

export type LinkGroup = Record<string, { url: string; icon?: string }>;

interface LinkGroupProps {
	data: LinkGroup[];
}

const iconMap: Record<string, IconDefinition> = {
	"fas fa-sd-card": faSdCard,
	"fas fa-box-open": faBoxOpen,
	"fab fa-windows": faWindows,
	"fab fa-apple": faApple,
	"fab fa-linux": faLinux,
};

function LinkGroup({ data }: { data: LinkGroupProps }) {
	return (
		<div className="buttons">
			{Object.entries(data).map(
				(
					[title, { url, icon }]: [string, LinkGroup[string]],
					index
				) => (
					<a href={url} className="button is-link" key={index}>
						{icon !== undefined && (
							<FontAwesomeIcon
								icon={iconMap[icon]}
								fixedWidth
								className="mr-2"
							/>
						)}
						<span>{title}</span>
					</a>
				)
			)}
		</div>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	const sortedVersions = await getSortedVersions();
	const latestVersion = sortedVersions[sortedVersions.length - 1];

	return {
		title: `Download v${latestVersion}`,
		description: `Download Project+ version ${latestVersion} for Wii and Netplay for Windows and Linux. You'll also find the Lite version, Modders Pack, music list, and more!`,
	};
}

export default async function Download() {
	const sortedVersions = await getSortedVersions();
	const latestVersion = sortedVersions[sortedVersions.length - 1];
	const linkGroups = importedLinkGroups as unknown as LinkGroupProps[];

	return (
		<main>
			<h1 className="title">Download Project+ v{latestVersion}</h1>
			<h1 className="subtitle">
				Wii Lite only changes music compression to fit on a 2 GB SD
				card.
			</h1>
			<h1 className="subtitle">
				The Modders Pack includes files for custom build creation, such
				as stage imagery templates and full resolution HD textures.
			</h1>
			{linkGroups.map((group, index) => (
				<LinkGroup key={index} data={group} />
			))}
			<h1 className="subtitle">
				Need help installing Project+? Project M Nexus&apos;s in-depth
				guide has got you covered!
			</h1>
			<YouTubePlayer
				id="4XynDH-eVDE"
				title="Project+ Install Guide Video YouTube Embed"
			/>
		</main>
	);
}
