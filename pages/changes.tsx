// Function says: This component is the same as /changes/[version].tsx, but always shows the latest changes (as seen in getStaticProps below).

import Changes, { ChangesStaticProps } from "../components/Changes/Changes";
import { getVersionData, getSortedVersions } from "../lib/version";

export default Changes; // simply use the generic Changes component

export const getStaticProps: ChangesStaticProps = async () => {
  const sortedVersions = await getSortedVersions();
  const latestVersion = sortedVersions[sortedVersions.length - 1];
  const latestVersionData = await getVersionData(latestVersion); // <- we're loading the latest version available for this route

  return {
    props: {
      version: latestVersion,
      data: latestVersionData,
      siteUrl: process.env.URL
    }
  };
};
