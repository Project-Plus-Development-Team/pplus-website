import Changes, { ChangesStaticProps } from "../../components/Changes/Changes";
import { getVersionData, getSortedVersions } from "../../lib/get-version";

export default Changes;

export const getStaticProps: ChangesStaticProps = async () => {
  const sortedVersions = await getSortedVersions();
  const latestVersion = sortedVersions[sortedVersions.length - 1];
  const latestVersionData = await getVersionData(latestVersion);

  return {
    props: {
      version: latestVersion,
      data: latestVersionData,
      siteUrl: process.env.URL
    }
  };
};
