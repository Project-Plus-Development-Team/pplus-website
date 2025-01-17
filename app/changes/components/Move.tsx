import type { ChangeObjectType } from "../changes-types";

interface MoveProps {
	data: ChangeObjectType;
	subpoint?: boolean;
}

export const Move = ({ data, subpoint }: MoveProps) => {
	const content = data.changes.map((change, index) => {
		const isString = typeof change === "string";
		const inner = isString ? (
			change
		) : (
			<Move subpoint data={change as ChangeObjectType} />
		); // Recursion
		return <li key={index}>{inner}</li>;
	});

	const title = subpoint ? (
		data.title
	) : (
		<h1 className="subtitle is-2">{data.title}</h1>
	);

	return (
		<>
			{title}
			<ul>{content}</ul>
		</>
	);
};
