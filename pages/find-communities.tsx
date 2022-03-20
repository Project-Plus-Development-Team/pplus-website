import { GetStaticPropsResult } from "next";
import { Heading } from "react-bulma-components";
import { CSSMain } from "../components/find-communities/CSSMain";
import { General } from "../components/find-communities/general";
import { Map } from "../components/find-communities/map";
import { FindCommunitiesData, getFindCommunitiesData } from "../lib/get-find-communities-data";

export default function FindingCommunities({
  characterDiscordMap, regions
}: FindCommunitiesData) {
  return (
    <>
      <Heading>General communities</Heading>
      <General/>
      <Heading className="mt-3">Find your community on the map</Heading>
      <Map regions={regions}/>
      <Heading className="mt-3">Character communities (Discord)</Heading>
      <CSSMain characterDiscordMap={characterDiscordMap}/>
    </>
  );
}

type StaticPropsReturn = Promise<GetStaticPropsResult<FindCommunitiesData>>

export const getStaticProps = async (): StaticPropsReturn => ({
  props: await getFindCommunitiesData()
});