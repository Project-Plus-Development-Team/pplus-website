import { useEffect, useState } from "react";
import { VersionData } from "../../types/changes";
import { Heading, Button } from "react-bulma-components";
import Character from "./Character";
import { GetStaticProps } from "next";
import Head from "next/head";
import FAButton from "../FAButton";

// used by the two different pages that are using this component in order to assure they provide the right data format
export type ChangesStaticProps = GetStaticProps<ChangesProps, { version: string }>;

export interface ChangesProps {
  version: string
  data: VersionData
  siteUrl: string
}

const generateLinks = (links: VersionData["links"]) => (
  <Button.Group>
    {Object.entries(links!).map(([title, { url, icon }], index) => (
      <FAButton
        color="link"
        key={index}
        href={url}
        renderAs="a"
        icon={icon}
      >
        {title}
      </FAButton>
    ))}
  </Button.Group>
);

export default function Changes({ version, data, siteUrl }: ChangesProps) {
  const buttons = data.links ? generateLinks(data.links) : undefined;
  const [characterToUnfold, setCharacterToUnfold] = useState<string>();

  useEffect(() => {
    const decodedHash = decodeURI(window.location.hash);
    const target = decodedHash.slice(1).trim();

    if (target) {
      setCharacterToUnfold(target);
    }
  }, []);

  const content = data.changes.map((character, index) => (
    <Character
      key={index}
      data={character}
      version={version}
      siteUrl={siteUrl}
      fold={character.name !== characterToUnfold}
    />
  ));

  const title = `Changes in Project+ v${version}`;

  return (
    <>
      <Head><title>{title}</title></Head>
      <Heading>{title}</Heading>
      <p className="has-text-weight-bold">This information was automatically parsed from the Google Document, errors still possible.</p>
      <br/>
      {buttons}
      {content}
    </>
  );
}