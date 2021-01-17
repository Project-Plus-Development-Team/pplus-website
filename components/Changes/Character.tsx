import { useRouter } from "next/router";
import React from "react";
import { CharacterType } from "../../types/changes";
import CopyToClipboard from "./CopyToClipboard";
import Move from "./Move";
import { Heading, Content, Icon } from "react-bulma-components";
import CharacterIcon from "./CharacterIcon";

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

      parentElement.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [ fold ]); // watch the fold parameter, if it turns true, unfold by setting show to true

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
        <CharacterIcon name={name}/>
        <a
          onClick={toggleShow}
          className="dropdown-toggle"
        >
          <Icon className={show ? "rotate" : ""}>
            <span className="fas fa-angle-right"/>
          </Icon>
          <span>
            {name}
          </span>
        </a>
        <CopyToClipboard link={link}/>
      </Heading>
      <Content style={{
        display: show ? "block" : "none"
      }}>
        {content}
      </Content>

      <style jsx global>{`
        .icon {
          transition: transform 0.06s;
          margin-right: 0.3rem;
        }

        .icon.rotate {
          transform: rotateZ(90deg);
        }
      `}</style>

      <style jsx>{`
        .dropdown-toggle {
          user-select: none;
          line-height: 39px;
        }
      `}</style>
    </div>
  );
}
