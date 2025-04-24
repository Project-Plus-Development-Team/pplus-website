import {
	faDiscord,
	faGithub,
	faReddit,
	faBluesky,
} from "@fortawesome/free-brands-svg-icons";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Home.module.scss";
import type { Metadata } from "next";
import Link from "next/link";
import { A11tySwitch } from "app/components/A11tyText";
import { GoodImage } from "app/components/GoodImage";
import { YouTubePlayer } from "app/components/YouTubePlayer";
import glowyFalco from "~generated-images/falco-glowy.webp";

export const metadata: Metadata = {
	title: "Project+ | Community driven patch for Project M",
};

export default function Home() {
	return (
		<main className={styles.main}>
			<div style={{ gridArea: "text" }}>
				<h1 className="title is-1">What is Project+?</h1>
				<h2 className="subtitle">Project+...</h2>
				<div className="content">
					<ul>
						<li>
							is a community driven patch for Project M, a game modification for
							Brawl
						</li>
						<li>strives to invigorate the Project M experience</li>
						<li>further balances the roster</li>
						<li>fixes lingering Project M 3.6 bugs</li>
						<li>gives the entire UI a fresh coat of paint</li>
						<li>adjusts movesets to be more fun to play with and against</li>
						<li>introduces new gameplay mechanics to Project M</li>
						<li>
							includes new features created by the Brawl modding community
						</li>
					</ul>
				</div>
			</div>

			<div className={styles.falco_wrapper}>
				<GoodImage img={glowyFalco} alt="Glowing silhuette of Falco Lombardi" />
			</div>

			<div className="box" style={{ gridArea: "links" }}>
				<h3 className="subtitle is-2 ">Join or follow us!</h3>

				<div className="is-flex is-flex-wrap-wrap gap">
					<a href="/discord" className="button is-flex-grow-1">
						<FontAwesomeIcon icon={faDiscord} fixedWidth className="mr-2" />
						<A11tySwitch
							visible="Project+"
							screenReader="Project+ Discord Server"
						/>
					</a>
					<a
						href="https://www.reddit.com/r/ssbpm"
						className="button is-flex-grow-1"
					>
						<FontAwesomeIcon icon={faReddit} fixedWidth className="mr-2" />
						<A11tySwitch visible="r/ssbpm" screenReader="Project M Subreddit" />
					</a>
					<a
						href="https://bsky.app/profile/projectplusgame.com"
						className="button is-flex-grow-1"
					>
						<FontAwesomeIcon icon={faBluesky} fixedWidth className="mr-2" />
						<A11tySwitch
							visible="@ProjectPlusGame.com"
							screenReader="Project+ on Bluesky"
						/>
					</a>
					<a
						href="https://www.ssbwiki.com/Project%2B"
						className="button is-flex-grow-1"
					>
						<FontAwesomeIcon icon={faBook} fixedWidth className="mr-2" />
						<A11tySwitch
							visible="SmashWiki"
							screenReader="Project+ SmashWiki entry"
						/>
					</a>
					<a
						href="https://github.com/Project-Plus-Development-Team/pplus-website"
						className="button is-flex-grow-1"
					>
						<FontAwesomeIcon icon={faGithub} fixedWidth className="mr-2" />
						<A11tySwitch
							visible="Website source"
							screenReader="Website source code on GitHub"
						/>
					</a>
				</div>
			</div>

			<div style={{ gridArea: "youtube" }}>
				<h2 className="title is-2">Watch the Project+ v3.0 Trailer</h2>
				<YouTubePlayer
					title="Project+ Trailer Video YouTube Embed"
					id="zhJrTM7r1tE"
				/>
			</div>
		</main>
	);
}
