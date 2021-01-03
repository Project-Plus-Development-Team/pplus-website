import React from "react";
import Changes, { ChangesProps } from "../../components/Changes/Changes";
import { getVersionData, getVersions } from "../../lib/changes";

export default function ChangesPage(props: ChangesProps) {
  return <Changes {...props}/>;
}

export async function getStaticPaths() {
  const versions = await getVersions();

  return {
    paths: versions.map(version => ({ params: { version } })),
    fallback: false
  };
}

export interface StaticPropsReturnType {
  props: ChangesProps
}

export async function getStaticProps({ params }): Promise<StaticPropsReturnType> {
  const changesData = await getVersionData(params.version);

  return {
    props: {
      version: params.version,
      data: changesData,
      siteUrl: process.env.URL
    }
  };
}
