import { useEffect, useRef, useState } from "react";
import { Heading, Content, Icon } from "react-bulma-components";
import Head from "next/head";
import Move from "../Changes/Move";
import { VersionData } from "../../types/changes";
import CharacterIcon from "./CharacterIcon";
import CopyToClipboard from "./CopyToClipboard";
import { useRouter } from "next/router";

interface Props {
  versionsData: {
    version: string
    data: VersionData
  }[]
  siteUrl: string
}

export const AllChanges = ({ versionsData, siteUrl }: Props) => {
  const allCategoriesWithDuplicates = versionsData.flatMap(versionObject => {
    return versionObject.data.changes.map(c => c.name);
  });

  const allCategories = [...new Set<string>(allCategoriesWithDuplicates)];

  const [characterToUnfold, setCharacterToUnfold] = useState<string>();

  useEffect(() => { 
    const decodedHash = decodeURI(window.location.hash);
    const target = decodedHash.slice(1).trim();

    if (target) {
      setCharacterToUnfold(target);
    }
  }, []);

  const content = allCategories.map(category => {
    const changesBlocks = versionsData
      .map(versionObject => {
        const foundChanges = versionObject.data.changes.find(c => c.name === category);

        if (foundChanges === undefined) {
          return null;
        }

        return {
          version: versionObject.version,
          changes: foundChanges.moves
        };
      })
      .filter(block => block !== null);

    const [show, setShow] = useState(false);
    const fold = characterToUnfold !== category;
    const headingElement = useRef<HTMLElement>(null);

    useEffect(() => {
      if (!fold) {
        setShow(true);

        setTimeout(() => {
          window.scrollTo({
            top: headingElement.current?.offsetTop
          });
        }, 300); // hacky :( but will be called 2x and jump back to top otherwise
      }
    }, [fold]);

    const router = useRouter();
    const pageName = router.pathname.split("/")[1]; // should always be "changes"
    const link = encodeURI(`${siteUrl}/${pageName}/all#${category}`);

    return (
      <div key={category} className="mb-5">
        <Heading size={4} className="is-flex">
          <CharacterIcon name={category}/>
          <a
            onMouseDown={e => e.button === 0 && setShow(!show)}
            // onClick={() => setShow(!show)}
            className="dropdown-toggle"
          >
            <Icon className={show ? "rotate" : ""}>
              <span className="fas fa-angle-right"/>
            </Icon>
            <span ref={headingElement}>
              {category}
            </span>
          </a>
          <CopyToClipboard link={link}/>
        </Heading>

        {show && changesBlocks.map(block => (
          <Content key={block?.version}>
            <Heading size={6} className="is-italic">
              Changes in version v{block?.version}
            </Heading>
            {block?.changes.map((change, i) => (
              <Move data={change} key={i}/>
            ))}
          </Content>
        ))}

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
  });

  const title = "Changes from all Project+ versions (auto-generated)";

  return (
    <>
      <Head><title>{title}</title></Head>
      <Heading>{title}</Heading>
      <p>
      <strong>Disclaimer</strong>: The changes are grouped by character / category and are <strong>automatically concatenated</strong> based on the other changelogs.<br/>
        This means that some changes introduced in an earlier version might be removed or overwritten in a later version.
      </p>
      <br/>
      {content}
    </>
  );
};