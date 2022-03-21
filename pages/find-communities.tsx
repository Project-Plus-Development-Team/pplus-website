import { NoSSR } from "components/NoSSR";
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
      <Heading size={4}>General communities</Heading>
      <General/>
      <Heading size={4} className="mt-3">Find your community on the map</Heading>
      {/* the map component doesn't play well with SSR. markers get offset from the map probably because of the isDesktop thing i came up with. */}
      <NoSSR>
        <Map regions={regions}/>
      </NoSSR>
      <Heading size={4} className="mt-3 mb-1">Character communities (Discord)</Heading>
      {/* for the CSS, there was an error about HTML differences between server and client - no idea why or what, so away the SSR goes */}
      <NoSSR>
        <CSSMain characterDiscordMap={characterDiscordMap}/>
      </NoSSR>
    </>
  );
}

type StaticPropsReturn = Promise<GetStaticPropsResult<FindCommunitiesData>>

export const getStaticProps = async (): StaticPropsReturn => ({
  props: await getFindCommunitiesData()
});