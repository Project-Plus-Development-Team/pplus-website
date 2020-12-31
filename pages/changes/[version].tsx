import React from "react";
import { ChangesType, CharacterType, ChangeObjectType } from "../../types/changes";
import { Heading, Image, Content, Container } from "react-bulma-components";
import { getChangesData, getVersions } from "../../lib/changes";

interface PageData {
  version: string
  changes: ChangesType
}

const iconMap = {
  "Costumes & Aesthetics": "stickers",
  "Misc": "smash",
  "Stages": "stages"
};

interface MoveProps {
  data: ChangeObjectType
  subpoint?: boolean
}

function Move({ data, subpoint }: MoveProps) {
  const content = data.changes.map((change, index) => {
    const isString = typeof change === "string";
    const inner = isString ? change : <Move subpoint={true} data={change as ChangeObjectType}/>;
    return <li key={index}>{inner}</li>;
  });

  const title = subpoint ?
    data.title :
    <Heading subtitle size={5}>{data.title}</Heading>;

  return (
    <>
      {title}
      <ul>
        {content}
      </ul>
    </>
  );
}

interface CharacterProps {
  data: CharacterType
}

function Character({ data: { name, moves } }: CharacterProps) {
  const [show, setShow] = React.useState(false);

  const hyphenName = name.replace(/\s/gi, "-");
  const icon = iconMap[hyphenName] ? `icons/${iconMap[hyphenName]}` : `characters/${hyphenName}`;

  const content = moves.map(([move], index) =>
    <Move key={index} data={move}/>
  );

  function toggleShow() {
    setShow(!show);
  }

  return (
    <div key={name}>
      <Heading size={4}>
        {/* <Image size={64} src={`/images/${icon}.png`}/> */}
        <img style={{height: 40, marginRight: 7}} src={`/images/${icon}.png`}/>
        <a onClick={toggleShow} className={`dropdown-toggle ${show ? "open" : ""}`}>{name}</a>
      </Heading>
      <Content style={{
        display: show ? "block" : "none"
      }}>
        {content}
      </Content>

      <style jsx>{`
        .dropdown-toggle {
          user-select: none;
        }

        .dropdown-toggle::before {
          content: "►";
          margin-right: 0.5rem;
          font-family: Arial;
        }

        .dropdown-toggle.open::before {
          content: "▼"
        }
      `}</style>
    </div>
  );
}

interface ChangeProps {
  changesData: PageData
}

export default function Changes({ changesData }: ChangeProps) {
  const content = changesData.changes.map((character, index) =>
    <Character key={index} data={character}/>
  );

  return <Container>
    {content}
  </Container>;
}

export async function getStaticPaths() {
  const versions = await getVersions();

  return {
    paths: versions.map(version => ({ params: { version } })),
    fallback: false
  };
}


export async function getStaticProps({ params }) {
  const changesData = await getChangesData(params.version);

  return {
    props: {
      changesData
    }
  };
}
