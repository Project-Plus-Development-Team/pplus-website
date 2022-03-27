import { getSingleVersionData, getSortedVersions } from "modules/changes/get-version";
import { GetStaticProps } from "next";
import { VersionChangesShared, VersionChangesSharedProps } from "modules/changes/components/VersionChangesShared";

export default VersionChangesShared;

export const getStaticProps: GetStaticProps<VersionChangesSharedProps> = async () => {
  const sortedVersions = await getSortedVersions();
  const latestVersion = sortedVersions[sortedVersions.length - 1];

  return {
    props: {
      data: await getSingleVersionData(latestVersion)
    }
  };
};
