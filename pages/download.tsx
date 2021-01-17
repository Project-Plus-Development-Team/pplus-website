// Function says: This page uses getStaticProps to load the links to be displayed from /data/download.json,
// which Next.js then feeds into the Download component

import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Button, Container, Heading, Icon } from "react-bulma-components";
import YouTube from "react-youtube";
import importedLinkGroups from "../data/download.json";
import { getSortedVersions } from "../lib/get-version";

interface LinkGroup {
  [title: string]: {
    url: string
    icon?: string
  }
}

function LinkGroup({ data }: { data: LinkGroup }) {
  return (
    <Button.Group>
      {Object.entries(data).map(([title, { url, icon }], index2) =>
        <Button color="link" key={index2} href={url} renderAs="a">
          {icon === undefined ? (
            title
          ) : (
            <div>
              <Icon>
                <span className={icon}/>
              </Icon>
              <span>{title}</span>
            </div>
          )}
        </Button>
      )}
    </Button.Group>
  );
}

interface DownloadProps {
  linkGroups: LinkGroup[]
  latestVersion: string
}

export default function Download({ linkGroups, latestVersion }: DownloadProps) {
  return (
    <>
      <Head>
        <title>Download Project+</title>
      </Head>
      <Container>
        <Heading>Download v{latestVersion}</Heading>
        <Heading subtitle>Wii Lite only changes music compression to fit on a 2 GB SD card.</Heading>
        <Heading subtitle>The Cosmetics Pack includes files for custom build creation, such as stage imagery templates and full resolution HD textures.</Heading>
        {linkGroups.map((group, index) => <LinkGroup key={index} data={group}/>)}
      </Container>
      <Container>
        <Heading subtitle>Need help installing Project+? Project M Nexus&apos;s in-depth guide has got you covered!</Heading>
        <YouTube videoId="4XynDH-eVDE"/>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<DownloadProps> = async () => {
  const sortedVersions = await getSortedVersions();
  const latestVersion = sortedVersions[sortedVersions.length - 1];

  return {
    props: {
      linkGroups: importedLinkGroups,
      latestVersion
    }
  };
};
