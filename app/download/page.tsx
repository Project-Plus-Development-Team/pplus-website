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
import { getSortedVersions } from "app/changes/get-version";
import { YouTubePlayer } from "app/components/YouTubePlayer";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import downloadJson from "./download.json";

const DownloadThing = ({
	text,
	url,
	iconLabel,
	mirrorUrl,
	icon,
}: {
	text: string;
	url: string;
	icon: IconDefinition;
	iconLabel?: string;
	mirrorUrl?: string;
}) => (
	<div className="tw:flex tw:flex-col tw:gap-1 tw:items-center">
		<h3>{text}</h3>
		<a
			href={url}
			className="button is-link tw:aspect-square tw:relative tw:p-2"
		>
			<FontAwesomeIcon icon={icon} fontSize="4em" />
			{iconLabel && (
				<div className="tw:absolute tw:text-black">{iconLabel}</div>
			)}
		</a>
		{mirrorUrl && (
			<a
				href={mirrorUrl}
				className="tw:not-hover:text-neutral-400 tw:not-hover:no-underline"
			>
				Mirror
			</a>
		)}
	</div>
);

export async function generateMetadata(): Promise<Metadata> {
	const sortedVersions = await getSortedVersions();
	const latestVersion = sortedVersions[sortedVersions.length - 1];

	return {
		title: `Download v${latestVersion}`,
		description: `Download Project+ version ${latestVersion} for Wii and Netplay for Windows, macOS, and Linux. You'll also find the Lite version, Modders Pack, music list, and more!`,
	};
}

const Note = ({ children }: PropsWithChildren) => (
	<p className="tw:my-3 tw:p-1 tw:text-center tw:bg-neutral-900 tw:rounded tw:border-neutral-700 tw:border tw:text-neutral-200">
		{children}
	</p>
);

export default async function Download() {
	const sortedVersions = await getSortedVersions();
	const latestVersion = sortedVersions[sortedVersions.length - 1];

	return (
		<main>
			<h1 className="title is-1 tw:text-center">Downloads</h1>
			<hr />
			<section>
				<h2 className="title is-2 tw:flex tw:justify-center tw:items-center tw:gap-3">
					Download Project+ v{latestVersion}{" "}
					<a href="/feed.xml" rel="noreferrer" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="28"
							width="28"
							viewBox="0 0 448 512"
						>
							<path
								fill="#ee802f"
								d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
							/>
						</svg>
					</a>
				</h2>
				<div className="tw:flex tw:gap-2 tw:flex-wrap tw:*:grow">
					<div>
						<h3 className="title is-3 tw:text-center">Console</h3>
						<div className="tw:flex tw:gap-4 tw:justify-evenly">
							<DownloadThing
								icon={faSdCard}
								text="Wii"
								url={downloadJson.editions.wii.url}
							/>
							<DownloadThing
								icon={faSdCard}
								text="Wii Lite"
								iconLabel="2GB"
								url={downloadJson.editions["wii-lite"].url}
							/>
						</div>
					</div>
					<div>
						<h3 className="title is-3 tw:text-center">Dolphin</h3>
						<div className="tw:flex tw:gap-4 tw:justify-evenly">
							<DownloadThing
								icon={faWindows}
								text="Windows"
								url={downloadJson.editions.windows.url}
							/>
							<DownloadThing
								icon={faApple}
								text="macOS"
								url={downloadJson.editions["mac-os"].url}
							/>
							<DownloadThing
								icon={faLinux}
								text="Linux AppImage"
								url={downloadJson.editions["linux-appimage"].url}
							/>
							<DownloadThing
								icon={faLinux}
								text="Linux Flatpak"
								url={downloadJson.editions["linux-flatpak"].url}
							/>
						</div>
					</div>
				</div>
				<Note>
					Wii Lite only changes music compression to fit on a 2 GB SD card.
				</Note>
			</section>
			<hr />
			<section>
				<h2 className="title is-2 tw:text-center">Mirrors</h2>
				<div className="tw:flex tw:gap-6 tw:justify-evenly tw:flex-wrap">
					<DownloadThing
						icon={faSdCard}
						text="Wii"
						url={downloadJson.editions.wii.mirror}
					/>
					<DownloadThing
						icon={faSdCard}
						text="Wii Lite"
						iconLabel="2GB"
						url={downloadJson.editions["wii-lite"].mirror}
					/>
					<DownloadThing
						icon={faWindows}
						text="Windows"
						url={downloadJson.editions.windows.mirror}
					/>
				</div>
				<Note>
					These are alternative download links for if the main download links
					fail.
				</Note>
			</section>
			<hr />
			<section>
				<h2 className="title is-2 tw:text-center">Modding Resources</h2>
				<div className="tw:flex tw:gap-6 tw:justify-evenly tw:flex-wrap">
					{downloadJson["modding-resources"].map((resource, i) => (
						<DownloadThing
							key={i}
							icon={faBoxOpen}
							url={resource.url}
							text={resource.title}
						/>
					))}
				</div>
				<Note>
					The Modders Pack includes files for custom build creation, such as
					stage imagery templates and full resolution HD textures.
				</Note>
			</section>
			<hr />
			<section>
				<h2 className="title is-2 tw:text-center">How to Install</h2>
				<p className="mb-2">
					Need help installing Project+? Project M Nexus&apos;s in-depth guide
					has got you covered!
				</p>
				<YouTubePlayer
					id="4XynDH-eVDE"
					title="Project+ Install Guide Video YouTube Embed"
				/>
			</section>
		</main>
	);
}
