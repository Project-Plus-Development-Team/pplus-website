import { Heading } from "react-bulma-components";
import { ChangeObjectType } from "../changes-types";

interface MoveProps {
  data: ChangeObjectType
  subpoint?: boolean
}

export const Move = ({ data, subpoint }: MoveProps) => {
  const content = data.changes.map((change, index) => {
    const isString = typeof change === "string";
    const inner = isString ? change : <Move subpoint data={change as ChangeObjectType}/>; // Recursion
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
};