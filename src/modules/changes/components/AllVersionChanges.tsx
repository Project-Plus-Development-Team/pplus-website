import { Heading } from "react-bulma-components";
import { VersionData, ChangeBlock } from "../changes-types";
import { NextSeo } from "next-seo";
import { useCategoryToUnfold } from "../changes-hooks";
import { Category } from "./Category";
import { Fragment } from "react";
import { Move } from "./Move";

const useAllDeduplicatedCategories = (versionDataArray: VersionData[]) => {
  const allCategoriesWithDuplicates = versionDataArray.flatMap(versionData => (
    versionData.changes.map(c => c.name)
  ));

  return [...new Set<string>(allCategoriesWithDuplicates)];
};

const getChangesBlocks = (
  data: VersionData[], categoryName: string
) => (
  data.reduce<ChangeBlock[]>((prev, versionObject) => {
    const foundChanges = versionObject.changes.find(c => c.name === categoryName);

    if (foundChanges === undefined) {
      return prev;
    }
    
    return [...prev, {
      version: versionObject.version,
      changes: foundChanges.moves
    }];
  }, [])
);

interface Props {
  data: VersionData[]
}

export const AllVersionChanges = ({ data }: Props) => {
  const allCategories = useAllDeduplicatedCategories(data);
  const categoryToUnfold = useCategoryToUnfold();

  return (
    <>
      <NextSeo
        title="Changes from all versions"
        description="View all changes from all Project+ versions automatically combined."
      />
      <Heading>Changes from all Project+ versions</Heading>
      <p>
        <strong>Disclaimer</strong>: The changes are grouped by character / category and are <strong>automatically concatenated</strong> based on the other changelogs.<br/>
        This means that some changes introduced in an earlier version might be removed or overwritten in a later version.
      </p>
      <br/>
      {allCategories.map(categoryName => (
        <Category
          key={categoryName}
          shouldBeShown={categoryToUnfold === categoryName}
          name={categoryName}
        >
          {getChangesBlocks(data, categoryName).map(block => (
            <Fragment key={block?.version}>
              <Heading size={3} className="is-italic">
                Changes in version v{block?.version}
              </Heading>
              {block.changes.map((change, i) => (
                <Move data={change} key={i}/>
              ))}
            </Fragment>
          ))}
        </Category>
      ))}
    </>
  );
};