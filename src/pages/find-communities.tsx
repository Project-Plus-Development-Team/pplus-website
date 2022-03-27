import { Heading } from "react-bulma-components";
import { General } from "modules/find-communities/general/General";
import { FindCommunitiesData, getFindCommunitiesData } from "../modules/find-communities/get-find-communities-data";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { MapProps } from "modules/find-communities/map/Map";
import { CSSMainProps } from "modules/find-communities/css/CSSMain";
import { Placeholder } from "shared/components/Placeholder";
import { defaultKeywords } from "DefaultSeoPPlus";

const LazyMap = dynamic<MapProps>(
  () => (
    import("modules/find-communities/map/Map")
      .then(m => m.Map)
  ),
  {
    loading: ({ error, isLoading, retry }) => (
      <Placeholder
        error={error}
        isLoading={isLoading}
        retry={retry}
        height={400} // TODO make dynamic like map component
      >
        <span className="fas fa-map mr-3"/>
        Loading Map...
      </Placeholder>
    ),
    ssr: false
  }
);

const LazyCSS = dynamic<CSSMainProps>(
  () => (
    import("modules/find-communities/css/CSSMain")
      .then(m => m.CSSMain)
  ),
  {
    loading: ({ error, isLoading, retry }) => (
      <Placeholder
        error={error}
        isLoading={isLoading}
        retry={retry}
        height={400}
      >
        <span className="fas fa-map mr-3"/>
        Loading Character Selection Screen...
      </Placeholder>
    ),
    ssr: false
  }
);

const FindCommunities = ({ characterDiscordMap, regions }: FindCommunitiesData) => (
  <>
    <NextSeo
      title="Find Communities"
      description="Find Discords for all Project+ characters, regional Discords, Facebook Groups, Twitch and YouTube Channels, Twitter accounts, and more."
    />
    <Heading size={4}>General communities</Heading>
    <General/>
    <Heading size={4} className="mt-3">Find your community on the map</Heading>
    <LazyMap regions={regions}/>
    <Heading size={4} className="mt-3 mb-1">Character communities (Discord)</Heading>
    <LazyCSS characterDiscordMap={characterDiscordMap}/>
  </>
);

export default FindCommunities;

export const getStaticProps: GetStaticProps<FindCommunitiesData> = async () => ({
  props: await getFindCommunitiesData()
});