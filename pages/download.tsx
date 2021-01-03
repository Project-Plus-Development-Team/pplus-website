// Function says: This page uses getStaticProps to load the links to be displayed from /data/download.json,
// which Next.js then feeds into the Download component

import { GetStaticProps } from "next";
import Head from "next/head";
import { Button, Container, Heading } from "react-bulma-components";
import importedLinkGroups from "../data/download.json";

interface LinkGroup {
  [title: string]: string
}

function LinkGroup({ data }: { data: LinkGroup }) {
  return (
    <Button.Group>
      {Object.entries(data).map(([title, url], index2) =>
        <Button color="primary" key={index2} href={url} renderAs="a">
          {title}
        </Button>
      )}
    </Button.Group>
  );
}

interface DownloadProps {
  linkGroups: LinkGroup[]
}

export default function Download({ linkGroups }: DownloadProps) {
  return (
    <>
      <Head>
        <title>Download Project+</title>
      </Head>
      <Container>
        <Heading>Download v2.15</Heading>
        <Heading subtitle>Wii Lite only changes music compression to fit on a 2 GB SD card.</Heading>
        <Heading subtitle>The Cosmetics Pack includes files for custom build creation, such as stage imagery templates and full resolution HD textures.</Heading>
        {linkGroups.map((group, index) => <LinkGroup key={index} data={group}/>)}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    linkGroups: importedLinkGroups
  }
});
