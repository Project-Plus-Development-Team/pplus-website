import type { MouseEventHandler } from "react";
import { CSSButton } from "./CSSButton";
import type { CSSEntry } from "../css-types";
import styles from "../CSSMain.module.scss";

export const CSSRow = ({
	row,
	characterDiscordMap,
}: {
	row: CSSEntry[];
	characterDiscordMap: Record<string, string>;
}) => {
	const randomHandler2: MouseEventHandler = (event) => {
		event.preventDefault();
		const allDiscordInvites = Object.values(characterDiscordMap);
		const randomIndex = Math.floor(
			Math.random() * allDiscordInvites.length
		);
		const randomDiscord =
			"https://discord.com/invite/" + allDiscordInvites[randomIndex];
		window.open(randomDiscord);
	};

	return (
		<div className={styles.row}>
			{row.map((charWithoutInvite) => {
				const discordInviteId =
					characterDiscordMap[charWithoutInvite.name];

				if (
					discordInviteId === undefined &&
					!charWithoutInvite.isRandom
				) {
					throw new Error(
						`Missing Discord invite id for "${charWithoutInvite.name}"`
					);
				}

				const charWithInvite = {
					...charWithoutInvite,
					discordInviteId:
						characterDiscordMap[charWithoutInvite.name],
				};

				return (
					<CSSButton
						key={charWithoutInvite.img}
						character={charWithInvite}
						randomHandler={randomHandler2}
					/>
				);
			})}
		</div>
	);
};
