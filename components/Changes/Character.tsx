import { useRouter } from "next/router";
import React from "react";
import { CharacterType } from "../../types/changes";
import CopyToClipboard from "./CopyToClipboard";
import Move from "./Move";
import { Heading, Content } from "react-bulma-components";

const iconMap = {
  "Costumes & Aesthetics": "stickers",
  "Misc": "smash",
  "Stages": "stages",
  "Bug Fixes":" Bug Fixes",
  "Aesthetic Changes": "Aesthetic Changes"
};

interface CharacterProps {
  version: string
  data: CharacterType
  siteUrl: string
  fold: boolean
}

export default function Character({ data: { name, moves }, version, siteUrl, fold }: CharacterProps) {
  const parentElement = React.useRef<HTMLDivElement>(null);

  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (!fold) {
      setShow(true);

      parentElement.current.scrollIntoView();
    }
  }, [ fold ]); // watch the fold parameter, if it turns true, unfold by setting show to true

  const hyphenName = name.replace(/\s/gi, "-");
  const icon = iconMap[hyphenName] ? `icons/${iconMap[hyphenName]}` : `characters/${hyphenName}`;

  const content = moves.map((move, index) =>
    <Move key={index} data={move}/>
  );

  function toggleShow() {
    setShow(!show);
  }

  const router = useRouter();
  const pageName = router.pathname.split("/")[1]; // should always be "changes"
  const link = encodeURI(`${siteUrl}/${pageName}/${version}#${name}`);

  return (
    <div key={name} ref={parentElement}>
      <Heading size={4} className="is-flex is-align-content-center mt-5">
        <img src={`/images/${icon}.png`} alt={name}/>
        <a onClick={toggleShow} className={`dropdown-toggle ${show ? "open" : ""}`}>{name}</a>
        <CopyToClipboard link={link}/>
      </Heading>
      <Content style={{
        display: show ? "block" : "none"
      }}>
        {content}
      </Content>

      <style jsx>{`
        img {
          margin-right: 7px;
          height: 40px;
        }

        .dropdown-toggle {
          user-select: none;
          line-height: 39px;
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
