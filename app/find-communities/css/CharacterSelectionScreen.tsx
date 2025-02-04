"use client";

import { MouseEventHandler } from "react";
import characterCommunityData from "./character-communities.json";
import styles from "./CharacterSelectionScreen.module.scss";
import { CSSButton } from "./components/CSSButton";

interface Props {
	characterDiscordMap: Record<string, string>;
}

export const CharacterSelectionScreen = ({ characterDiscordMap }: Props) => {
	const randomHandler: MouseEventHandler = (event) => {
		event.preventDefault();
		const allDiscordInvites = Object.values(characterDiscordMap);
		const randomIndex = Math.floor(Math.random() * allDiscordInvites.length);
		const randomDiscord =
			"https://discord.com/invite/" + allDiscordInvites[randomIndex];
		window.open(randomDiscord);
	};

	return (
		<>
			<div className={`cssContainer ${styles.container}`}>
				{characterCommunityData.map((character, i) => (
					<div key={character.name}>
						<CSSButton
							character={{
								...character,
								discordInviteId: characterDiscordMap[character.name],
							}}
							randomHandler={randomHandler}
						/>
					</div>
				))}
			</div>
			<p
				style={{
					textAlign: "center",
					backgroundColor: "black",
					opacity: 0.3,
					margin: "-1rem",
					marginTop: 0,
					padding: "0.5rem 0",
				}}
			>
				Character communities responsive design by{" "}
				<a href="https://banchouboo.neocities.org/" rel="noreferrer nofollow">
					banchouboo
				</a>
			</p>
		</>
	);
};
