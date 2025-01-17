import type { Metadata } from "next";
import { Fragment } from "react";
import type { ChangeBlock, VersionData } from "../changes-types";
import { Category } from "./Category";
import { Move } from "./Move";

const useAllDeduplicatedCategories = (versionDataArray: VersionData[]) => {
	const allCategoriesWithDuplicates = versionDataArray.flatMap(
		(versionData) => versionData.changes.map((c) => c.name)
	);

	return [...new Set<string>(allCategoriesWithDuplicates)];
};

const getChangesBlocks = (data: VersionData[], categoryName: string) =>
	data.reduce<ChangeBlock[]>((prev, versionObject) => {
		const foundChanges = versionObject.changes.find(
			(c) => c.name === categoryName
		);

		if (foundChanges === undefined) {
			return prev;
		}

		return [
			...prev,
			{
				version: versionObject.version,
				changes: foundChanges.moves,
			},
		];
	}, []);

interface Props {
	data: VersionData[];
}

export const AllVersionChanges = ({ data }: Props) => {
	const allCategories = useAllDeduplicatedCategories(data);

	return (
		<>
			<h1 className="title">Changes from all Project+ versions</h1>
			<p>
				<strong>Disclaimer</strong>: The changes are grouped by
				character / category and are{" "}
				<strong>automatically concatenated</strong> based on the other
				changelogs.
				<br />
				This means that some changes introduced in an earlier version
				might be removed or overwritten in a later version.
			</p>
			<br />
			{allCategories.map((categoryName) => (
				<Category key={categoryName} name={categoryName}>
					{getChangesBlocks(data, categoryName).map((block) => (
						<Fragment key={block?.version}>
							<h1 className="is-italic title is-3">
								Changes in version v{block?.version}
							</h1>
							{block.changes.map((change, i) => (
								<Move data={change} key={i} />
							))}
						</Fragment>
					))}
				</Category>
			))}
		</>
	);
};
