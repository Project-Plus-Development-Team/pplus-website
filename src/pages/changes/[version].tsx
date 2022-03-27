import { VersionChangesShared, VersionChangesSharedProps } from "modules/changes/components/VersionChangesShared";
import { GetStaticPaths, GetStaticProps } from "next";
import { getMixedVersionData, getSortedVersions } from "modules/changes/get-version";

export default VersionChangesShared;

export const getStaticPaths: GetStaticPaths = async () => {
  const versions = ["all", ...await getSortedVersions()];

  return {
    paths: versions.map(version => ({ params: { version } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<VersionChangesSharedProps> = async ({ params }) => {
  if (params?.version === undefined || Array.isArray(params.version)) {
    throw new Error("/pages/changes/[version] param unexpectedly undefined");
  }

  return {
    props: {
      data: await getMixedVersionData(params.version)
    }
  };
};
