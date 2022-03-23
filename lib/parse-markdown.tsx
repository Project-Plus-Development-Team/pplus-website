import { unified } from 'unified';
import markdown from 'remark-parse';
import { VFileCompatible } from 'vfile';
import { memo } from 'react';
import { toString } from 'mdast-util-to-string';

// https://css-tricks.com/responsible-markdown-in-next-js/

export const parseMarkdown = (content: VFileCompatible) => {
  const engine = unified().use(markdown);
  const ast = engine.parse(content);
  const processedAst = engine.runSync(ast);
  cleanNode(processedAst);
  return processedAst;
};

const getComponent = node => {
  switch (node.type) {
    case 'root':
      return ({ children }) => children;

    case 'paragraph':
      return ({ children }) => <p>{children}</p>;

    case 'emphasis':
      return ({ children }) => <em>{children}</em>;

    case 'heading':
      return ({ children, depth = 2 }) => {
        const Heading = `h${depth}`;
        // @ts-ignore
        return <Heading>{children}</Heading>;
      };

    case 'text':
      return ({ value }) => value;

    default:
      console.log('Unhandled node type', node);
      return ({ children }) => children;
  }
};

const Node = node => {
  const Component = getComponent(node);
  const { children } = node;

  return children ? (
    <Component {...node}>
      {children.map((child, index) => (
        <Node key={index} {...child} />
      ))}
    </Component>
  ) : (
    <Component {...node} />
  );
};

const cleanNode = node => {
  delete node.position;
  
  if (node.children) {
    node.children.forEach(cleanNode);
  };
};

const MarkdownRendererNoMemo = props => <Node {...props.ast} />;

export const MarkdownRenderer = memo(MarkdownRendererNoMemo);