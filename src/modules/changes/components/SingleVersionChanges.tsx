import { Heading } from "react-bulma-components";
import { Category } from "./Category";
import { VersionData } from "../changes-types";
import { useCategoryToUnfold } from "../changes-hooks";
import { NextSeo } from "next-seo";
import { ChangesLinks } from "./ChangesLinks";
import { Move } from "./Move";

interface Props {
  data: VersionData
}

export const SingleVersionChanges = ({
  data: {
    changes, version, links
  }
}: Props) => {
  const categoryToUnfold = useCategoryToUnfold();
  return (
    <>
      <NextSeo
        title={`Changes in v${version}`}
        description={`View everything that's been changed in Project+ v${version}`}
      />
      <Heading>Changes in Project+ v{version}</Heading>
      {links !== undefined && (
        <ChangesLinks links={links}/>
      )}
      {changes.map((category, index) => (
        <Category
          key={index}
          name={category.name}
          shouldBeShown={category.name === categoryToUnfold}
        >
          {category.moves.map((move, index) => (
            <Move key={index} data={move}/>
          ))}
        </Category>
      ))}
    </>
  );
};