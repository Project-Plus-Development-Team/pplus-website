import React from "react";
import Changes, { ChangesProps } from "../components/Changes/Changes";
import { getVersionData, getVersions } from "../lib/changes";
import { StaticPropsReturnType } from "./changes/[version]";

// This component is the same as /changes/something, but always shows the latest changes

export default function ChangesPage(props: ChangesProps) {
  return <Changes {...props}/>;
}

export async function getStaticProps(): Promise<StaticPropsReturnType> {
  const versions = await getVersions();
  const latestVersion = versions[versions.length - 1];
  const latestVersionData = await getVersionData(latestVersion);

  return {
    props: {
      version: latestVersion,
      data: latestVersionData,
      siteUrl: process.env.URL
    }
  };
}
