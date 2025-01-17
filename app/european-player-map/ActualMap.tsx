"use client";

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Map, Overlay } from "pigeon-maps";
import { A11tySwitch } from "app/components/A11tyText";
import { CharacterImage } from "./CharacterImage";
import type { Player } from "./page";
import styles from "./Map.module.scss";

export function ActualMap({ players }: { players: Player[] }) {
	return (
		<Map height={600} defaultCenter={[50, 5]} defaultZoom={4}>
			{players
				.toSorted((a, b) => (b.anchor[0] < a.anchor[0] ? -1 : 0)) // render lower overlays later in DOM as a fix for no z-index in SVG (for tooltips)
				.map((p) => (
					<Overlay
						key={p.name + String(p.anchor[0]) + String(p.anchor[1])}
						anchor={p.anchor}
						offset={[25, 25]}
						className={styles.popover}
					>
						<div className={styles.popoverContent}>
							<p>{p.name}</p>
							{p.discordTag && (
								<p>
									<A11tySwitch
										visible={
											<>
												<FontAwesomeIcon
													icon={faDiscord}
												/>
												{" " + p.discordTag}
											</>
										}
										screenReader={`Tag on Discord: ${p.discordTag}`}
									/>
								</p>
							)}
							{p.note && (
								<p>
									<A11tySwitch
										visible={
											<>
												<FontAwesomeIcon
													icon={faNoteSticky}
												/>
												{" " + p.note}
											</>
										}
										screenReader={`Note: ${p.note}`}
									/>
								</p>
							)}
						</div>
						<CharacterImage character={p.character} />
					</Overlay>
				))}
		</Map>
	);
}
