import type { ChangeObjectType } from "../changes-types";

interface MoveProps {
	data: ChangeObjectType;
	subpoint?: boolean;
}

const MoveContent = ({ data }: { data: ChangeObjectType }) => {
	if (data.changes === undefined) {
		return null
	}

	const content = data.changes.map((change, index) => {
		const inner = typeof change === "string" ? (
			change
		) : (
			<Move subpoint data={change as ChangeObjectType} />
		); // Recursion
		return <li key={index}>{inner}</li>;
	});

	return <ul>{content}</ul>
}

export const Move = ({ data, subpoint }: MoveProps) => {
	const title = subpoint ? (
		data.title
	) : (
		<h1 className="subtitle is-2">{data.title}</h1>
	);

	return (
		<>
			{title}
			<MoveContent data={data} />
			{data.comment && <ul><li>
				<em>{data.comment}</em>
			</li>
			</ul>}
		</>
	);
};
