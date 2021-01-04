// Function says: This page uses getStaticProps to load the links to be displayed from /data/download.json,
// which Next.js then feeds into the Download component

import { GetStaticProps } from "next";
import Head from "next/head";
import { Button, Container, Heading } from "react-bulma-components";
import importedLinkGroups from "../data/download.json";
import { getSortedVersions } from "../lib/version";

interface LinkGroup {
  [title: string]: string
}

function LinkGroup({ data }: { data: LinkGroup }) {
  return (
    <Button.Group>
      {Object.entries(data).map(([title, url], index2) =>
        <Button color="link" key={index2} href={url} renderAs="a">
          {title}
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
        <iframe
          style={{
            width: 560,
            height: 316,
            marginBottom: 26
          }}
          src="https://www.youtube.com/embed/4XynDH-eVDE"
        />
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
