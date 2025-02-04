import { faGlobe, faMap, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CharacterSelectionScreen } from "app/find-communities/css/CharacterSelectionScreen";
import { General } from "app/find-communities/general/General";
import { getRegions } from "app/find-communities/get-regions";
import { LazyMap } from "app/find-communities/map/LazyMap";
import { getCharacterDiscordMap } from "app/find-communities/map/server/get-character-discord-map";
import { getGeneralCommunities } from "app/find-communities/map/server/get-general-communities";
import type { Metadata } from "next";
import fs from "node:fs/promises";
import { optimizeTopoJson } from "./map/optimized-topojson-loader copy";

export const metadata: Metadata = {
	title: "Find Communities",
	description:
		"Find Discords for all Project+ characters, regional Discords, Facebook Groups, Twitch and YouTube Channels, Twitter accounts, and more.",
};

export default async function FindCommunities() {
	const [characterDiscordMap, regions, generalCommunities] = await Promise.all([
		getCharacterDiscordMap(),
		getRegions(),
		getGeneralCommunities(),
	]);

	const topoJsonString = await fs.readFile(
		"./app/find-communities/map/world-110m.topo.json",
		"utf-8"
	);

	const optimizedTopoJson = optimizeTopoJson(topoJsonString);

	return (
		// hidden prevents "responsive design by [...]" background corners from going over main border-radius
		<main style={{ overflow: "hidden" }}>
			<h1 className="title is-2">
				<FontAwesomeIcon icon={faGlobe} className="mr-3" />
				General communities
			</h1>
			<General generalCommunities={generalCommunities} />
			<h1 className="title is-2 mt-4">
				<FontAwesomeIcon icon={faMap} className="mr-3" />
				Find your community on the map
			</h1>
			<LazyMap regions={regions} worldMapData={optimizedTopoJson} />
			<h1 className="title is-2 mt-4 mb-1">
				<FontAwesomeIcon icon={faUserAlt} className="mr-3" />
				Character communities (Discord)
			</h1>
			<CharacterSelectionScreen characterDiscordMap={characterDiscordMap} />
		</main>
	);
}
