import { Root } from "mdast";
import { toString } from "mdast-util-to-string";
import { NextSeoQuestion } from "shared/types/structured-data";

const mdastNodeToString = (node: unknown) => (
  toString(node, { includeImageAlt: true })
);

export const getFAQStructuredData = (markdownAst: Root) => {
  return markdownAst.children.reduce<NextSeoQuestion[]>((prev, child, index) => {
    if (child.type !== "heading" || child.depth !== 4) {
      return prev;
    }

    const restOfChildren = markdownAst.children.slice(index + 1);
    const nextHeadingIndex = restOfChildren.findIndex(c => c.type === "heading");

    const childrenUntilNextHeading = nextHeadingIndex !== -1 ? (
      restOfChildren.slice(0, nextHeadingIndex)
    ) : (
      restOfChildren
    );

    const addedQuestion: NextSeoQuestion = {
      questionName: mdastNodeToString(child),
      acceptedAnswerText: childrenUntilNextHeading.map(mdastNodeToString).join("")
    };

    return [ ...prev, addedQuestion ];
  }, []);
};