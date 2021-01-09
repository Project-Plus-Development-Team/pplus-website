// Function says: This is a dynamically routed page to handle /changes/2.0 etc. without having to create individual page files for every version.
// The /changes/index.tsx is very similar, but it always loads the latest version (see that file for more details).
// This file instead specifies the getStaticPaths method, which tells Next.js which 'subpages' we have data for (and which are rendered by Next.js when building)
// When requesting a page or building the site, the getStaticProps method is called by Next.js and gives it the data it needs to render the ChangesPage component,
// which in turn uses the generic Changes component to render a changelog + extra data

import Changes, { ChangesStaticProps } from "../../components/Changes/Changes";
import { getVersionData, getSortedVersions } from "../../lib/get-version";

export default Changes; // simply use the generic Changes component

export async function getStaticPaths() {
  const versions = await getSortedVersions();

  return {
    paths: versions.map(version => ({ params: { version } })),
    fallback: false
  };
}

export const getStaticProps: ChangesStaticProps = async ({ params }) => {
  const changesData = await getVersionData(params.version);
  
  return {
    props: {
      version: params.version,
      data: changesData,
      siteUrl: process.env.URL
    }
  };
};
