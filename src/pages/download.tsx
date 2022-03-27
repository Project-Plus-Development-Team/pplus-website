import { GetStaticProps } from "next";
import { Button, Heading } from "react-bulma-components";
import importedLinkGroups from "../modules/download/download.json";
import { getSortedVersions } from "../modules/changes/get-version";
import { FAButton } from "shared/components/FAButton";
import { YouTubePlayer } from "shared/components/YouTubePlayer";
import { NextSeo } from "next-seo";
import { useEffect } from "react";

export type LinkGroup = Record<string, { url: string, icon?: string }>;

interface LinkGroupProps {
  data: LinkGroup[]
}

function LinkGroup({ data }: { data: LinkGroupProps }) {
  return (
    <Button.Group>
      {Object.entries(data).map(([title, { url, icon }], index2) =>
        <FAButton
          color="link"
          key={index2}
          href={url}
          renderAs="a"
          icon={icon}
        >
          {title}
        </FAButton>
      )}
    </Button.Group>
  );
}

interface DownloadProps {
  linkGroups: LinkGroupProps[]
  latestVersion: string
}

async function incrementDownloadCounter() {
  if (["localhost", "127.0.0.1"].includes(window.location.hostname)) { // hacky way to disable in dev
    return;
  }

  const response = await fetch("https://api.countapi.xyz/hit/projectplusgame.com/counter");
  const { value } = await response.json();
  console.log(`Download counted. Downloads: ${value}`);
}

const Download = ({ linkGroups, latestVersion }: DownloadProps) => {
  useEffect(() => { // TODO improve download determination
    incrementDownloadCounter();
  });

  return (
    <>
      <NextSeo
        title={`Download v${latestVersion}`}
        description={`Download Project+ version ${latestVersion} for Wii and Netplay for Windows, MacOS and Linux. You'll also find the Lite version, Modders Pack, music list, and more!`}
      />
      <Heading>Download Project+ v{latestVersion}</Heading>
      <Heading subtitle>Wii Lite only changes music compression to fit on a 2 GB SD card.</Heading>
      <Heading subtitle>The Modders Pack includes files for custom build creation, such as stage imagery templates and full resolution HD textures.</Heading>
      {linkGroups.map((group, index) => (
        <LinkGroup key={index} data={group}/>
      ))}
      <Heading subtitle>Need help installing Project+? Project M Nexus&apos;s in-depth guide has got you covered!</Heading>
      <YouTubePlayer
        id="4XynDH-eVDE"
        title="Project+ Install Guide Video YouTube Embed"
      />
    </>
  );
};

export default Download;

export const getStaticProps: GetStaticProps<DownloadProps> = async () => {
  const sortedVersions = await getSortedVersions();
  const latestVersion = sortedVersions[sortedVersions.length - 1];

  return {
    props: {
      linkGroups: importedLinkGroups as unknown as LinkGroupProps[],
      latestVersion
    }
  };
};
