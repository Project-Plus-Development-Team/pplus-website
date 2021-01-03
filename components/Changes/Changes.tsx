import React from "react";
import { VersionData } from "../../types/changes";
import { Heading, Container, Button } from "react-bulma-components";
import Character from "./Character";
import { GetStaticProps } from "next";

// used by the two different pages that are using this component in order to assure they provide the right data format
export type ChangesStaticProps = GetStaticProps<ChangesProps, { version: string}>;

export interface ChangesProps {
  version: string
  data: VersionData
  siteUrl: string
}

const generateLinks = (links: VersionData["links"]) =>
  <Button.Group>
    {Object.entries(links).map(([title, url], index) =>
        <Button color="primary" key={index} href={url}>{title}</Button>
    )}
  </Button.Group>;

export default function Changes({ version, data, siteUrl }: ChangesProps) {
  const buttons = data.links ? generateLinks(data.links) : undefined;

  const content = data.changes.map((character, index) =>
    <Character key={index} data={character} version={version} siteUrl={siteUrl}/>
  );

  return <Container>
    <Heading>Changes in Project+ v{version}</Heading>
    <p className="has-text-weight-bold">Automatically parsed from the Google Document, errors still possible.</p>
    <br/>
    {buttons}
    {content}
  </Container>;
}