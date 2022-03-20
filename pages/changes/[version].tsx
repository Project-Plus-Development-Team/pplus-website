import { AllChanges } from "../../components/Changes/AllChanges";
import Changes, { ChangesStaticProps } from "../../components/Changes/Changes";
import { getVersionData, getSortedVersions } from "../../lib/get-version";

export default function ChangesVersionSeparator(props) {
  if (props.versionsData !== undefined) {
    return <AllChanges {...props}/>;
  }

  return <Changes {...props}/>;
};

export async function getStaticPaths() {
  const versions = ["all", ...await getSortedVersions()];

  return {
    paths: versions.map(version => ({ params: { version } })),
    fallback: false
  };
}

export const getStaticProps: ChangesStaticProps|any = async ({ params }) => {
  if (params.version === "all") {
    const versions = await getSortedVersions();

    const versionsData = await Promise.all(
      versions.map(async version => {
        const data = await getVersionData(version);
        return { version, data };
      })
    );

    return {
      props: {
        versionsData,
        siteUrl: process.env.URL
      }
    };
  }

  const versionData = await getVersionData(params.version);
  
  return {
    props: {
      version: params.version,
      data: versionData,
      siteUrl: process.env.URL
    }
  };
};
