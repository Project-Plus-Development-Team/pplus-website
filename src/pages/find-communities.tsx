import { Heading } from "react-bulma-components";
import { General } from "modules/find-communities/general/General";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { LazyCSS } from "modules/find-communities/css/LazyCSS";
import { LazyMap } from "modules/find-communities/map/LazyMap";
import { GeneralCommunity, Region } from "modules/find-communities/map/map-types";
import { getCharacterDiscordMap } from "modules/find-communities/map/server/get-character-discord-map";
import { getRegions } from "modules/find-communities/get-regions";
import { getGeneralCommunities } from "modules/find-communities/map/server/get-general-communities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMap, faUserAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
  characterDiscordMap: Record<string, string>
  regions: Region[]
  generalCommunities: GeneralCommunity[]
}

const FindCommunities = ({ characterDiscordMap, regions, generalCommunities }: Props) => (
  <main>
    <NextSeo
      title="Find Communities"
      description="Find Discords for all Project+ characters, regional Discords, Facebook Groups, Twitch and YouTube Channels, Twitter accounts, and more."
    />
    <Heading size={2}>
      <FontAwesomeIcon icon={faGlobe} className="mr-3"/>
      General communities
    </Heading>
    <General generalCommunities={generalCommunities}/>
    <Heading size={2} className="mt-4">
      <FontAwesomeIcon icon={faMap} className="mr-3"/>
      Find your community on the map
    </Heading>
    <LazyMap regions={regions}/>
    <Heading size={2} className="mt-4 mb-1">
      <FontAwesomeIcon icon={faUserAlt} className="mr-3"/>
      Character communities (Discord)
    </Heading>
    <LazyCSS characterDiscordMap={characterDiscordMap}/>
  </main>
);

export default FindCommunities;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [characterDiscordMap, regions, generalCommunities] = await Promise.all([
    getCharacterDiscordMap(),
    getRegions(),
    getGeneralCommunities()
  ]);

  return {
    props: {
      characterDiscordMap,
      regions,
      generalCommunities,
    }
  };
};