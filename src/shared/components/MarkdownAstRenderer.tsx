/* eslint-disable react/jsx-no-useless-fragment */
import { memo } from 'react';
import { ParseableNode } from '../../next-server-utilities/load-markdown-ast';

export type RenderHook = (node: ParseableNode, render: typeof MarkdownAstNode) => JSX.Element|undefined

interface Props {
  node: ParseableNode
  renderHook?: RenderHook
}

const MarkdownAstNode = ({ node, renderHook }: Props): JSX.Element => {
  const children = "children" in node ? (
    node.children.map((n, i) => <MarkdownAstNode key={i} node={n} renderHook={renderHook}/>)
  ) : (
    []
  );

  if (renderHook !== undefined) {
    const value = renderHook(node, MarkdownAstNode);

    if (value !== undefined) {
      return value;
    }
  }

  switch (node.type) {
    case "root": return <>{children}</>;
    case "paragraph": return <p>{children}</p>;
    case "emphasis": return <em>{children}</em>;
    case "link": return <a href={node.url}>{children}</a>;
    case "heading": {
      const Heading = `h${node.depth}` as const;
      return <Heading>{children}</Heading>;
    }
    case "text": return <>{node.value}</>;
    case "break": return <br/>;
    case "strong": return <strong>{children}</strong>;
    case "inlineCode": return <code>{node.value}</code>;
    case "list": return node.ordered ? <ol>{children}</ol> : <ul>{children}</ul>;
    case "listItem": return <li>{children}</li>;
  }

  return <em>Unsupported Node: {node.type}</em>;
};

export const MarkdownAstRenderer = memo(MarkdownAstNode);