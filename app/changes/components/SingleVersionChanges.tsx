import type { VersionData } from "../changes-types";
import { Category } from "./Category";
import { ChangesLinks } from "./ChangesLinks";
import { Move } from "./Move";

interface Props {
	data: VersionData;
}

export const SingleVersionChanges = ({
	data: { changes, version, links },
}: Props) => (
	<>
		<h1 className="title">Changes in Project+ v{version}</h1>
		{links !== undefined && <ChangesLinks links={links} />}
		{changes.map((category, index) => (
			<Category key={index} name={category.name}>
				{category.moves.map((move, index) => (
					<Move key={index} data={move} />
				))}
			</Category>
		))}
	</>
);
