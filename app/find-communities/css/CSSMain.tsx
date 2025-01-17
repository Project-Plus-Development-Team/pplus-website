"use client";

import characterCommunityData from "./character-communities.json";
import { CSSRow } from "./components/CSSRow";
import styles from "./CSSMain.module.scss";
import { reorganizeCSSDataForSmallScreen } from "./reorganize-data";

interface Props {
	characterDiscordMap: Record<string, string>;
}

export const CSSMain = ({ characterDiscordMap }: Props) => (
	<>
		<div className={`${styles.css_main} ${styles.css_big} css-main`}>
			{characterCommunityData.map((row, rowIndex) => (
				<CSSRow
					row={row}
					key={rowIndex}
					characterDiscordMap={characterDiscordMap}
				/>
			))}
		</div>
		<div className={`${styles.css_main} ${styles.css_medium} css-main`}>
			{reorganizeCSSDataForSmallScreen(characterCommunityData, 5, 6).map(
				(row, rowIndex) => (
					<CSSRow
						row={row}
						key={rowIndex}
						characterDiscordMap={characterDiscordMap}
					/>
				)
			)}
		</div>
		<div className={`${styles.css_main} ${styles.css_small} css-main`}>
			{reorganizeCSSDataForSmallScreen(characterCommunityData, 2, 3).map(
				(row, rowIndex) => (
					<CSSRow
						row={row}
						key={rowIndex}
						characterDiscordMap={characterDiscordMap}
					/>
				)
			)}
		</div>
	</>
);
