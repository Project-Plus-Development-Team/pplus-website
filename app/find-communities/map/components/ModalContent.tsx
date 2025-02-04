import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
	faDiscord,
	faFacebook,
	faTwitch,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { A11tySwitch } from "app/components/A11tyText";
import type { Region } from "../map-types";
import styles from "./MapModal.module.scss";

interface PlatformButtonProps {
	text: string;
	icon: IconProp;
	href: string;
	title?: string;
}

export const PlatformButton = ({
	text,
	icon,
	href,
	title,
}: PlatformButtonProps) => (
	<a className="button is-link" href={href} rel="noreferrer nofollow">
		<FontAwesomeIcon icon={icon} fixedWidth className="mr-2" />
		<span>
			{title ? <A11tySwitch visible={text} screenReader={title} /> : text}
		</span>
	</a>
);

interface Props {
	region: Region;
	onClose: () => void;
}

export const ModalContent = ({ region, onClose }: Props) => {
	useEffect(() => {
		// TODO couldn't make this work with react's autoFocus polyfill, so this has to do for now.
		const cardBody = document.querySelector(".modal-card-body");

		if (cardBody) {
			const link = cardBody.querySelector("a");
			link?.focus();
		}
	}, []);

	return (
		<div className="modal-card">
			<header className="modal-card-head is-justify-content-space-between">
				<div className="is-flex-grow-1 is-flex is-flex-wrap-wrap is-justify-content-space-between gap">
					<p
						id="modal-title"
						className="modal-card-title"
						style={{ maxWidth: "100%", overflowWrap: "anywhere" }}
					>
						Communities in {region.name}
					</p>
					<button
						className="delete"
						onClick={onClose}
						aria-label="Close this modal"
					/>
				</div>
			</header>
			<section
				className={`modal-card-body ${styles.body}`}
				aria-labelledby="modal-title"
			>
				{region.platforms.discordInviteId && (
					<PlatformButton
						text="Discord"
						title={`${region.name} Discord Server`}
						icon={faDiscord}
						href={`https://discord.com/invite/${region.platforms.discordInviteId}`}
					/>
				)}
				{region.platforms.facebookGroupId && (
					<PlatformButton
						text="Facebook"
						title={`${region.name} Facebook Group`}
						icon={faFacebook}
						href={`https://facebook.com/groups/${region.platforms.facebookGroupId}`}
					/>
				)}
				{region.platforms.twitchName && (
					<PlatformButton
						text="Twitch"
						title={`${region.name} Twitch Channel`}
						icon={faTwitch}
						href={`https://twitch.tv/${region.platforms.twitchName}`}
					/>
				)}
				{region.platforms.website && (
					<PlatformButton
						text="Website"
						title={`${region.name} Website`}
						icon={faGlobe}
						href={region.platforms.website}
					/>
				)}
				{region.platforms.youtubeChannelUrl && (
					<PlatformButton
						text="YouTube"
						title={`${region.name} YouTube Channel`}
						icon={faYoutube}
						href={region.platforms.youtubeChannelUrl}
					/>
				)}
				{region.platforms.twitterHandle && (
					<PlatformButton
						text="Twitter"
						title={`${region.name} Twitter`}
						icon={faTwitter}
						href={`https://twitter.com/${region.platforms.twitterHandle}`}
					/>
				)}
			</section>
			<footer className={`modal-card-foot ${styles.footer}`}>
				<h1 className="subtitle is-3" style={{ textAlign: "center" }}>
					<i className="fa-solid fa-link-slash" />
					<span>Something broken or wrong?</span>
					<br />
					<a href="https://projectplusgame.com/discord">
						Join our Discord server
					</a>
					{" and use the #website channel."}
					<br />
					<span>
						{" or send me an e-mail at "}
						<a href="mailto:waffeln@mailbox.org">waffeln@mailbox.org</a>
					</span>
				</h1>
			</footer>
		</div>
	);
};
