import React from "react";
import { Heading } from "react-bulma-components";
import { ChangeObjectType } from "../../types/changes";

interface MoveProps {
  data: ChangeObjectType
  subpoint?: boolean
}

export default function Move({ data, subpoint }: MoveProps) {
  const content = data.changes.map((change, index) => {
    const isString = typeof change === "string";
    const inner = isString ? change : <Move subpoint={true} data={change as ChangeObjectType}/>;
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
}