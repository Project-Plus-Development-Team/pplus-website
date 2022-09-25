import { remark } from "remark";
import fs from "fs/promises";
import { Content, Root } from "mdast";

// this system was inspired by the following article
// https://css-tricks.com/responsible-markdown-in-next-js/
// but with my own modifications to be more modern or specialized for the P+ website

export type ParseableNode = Content|Root

export const loadMarkdownAst = async (file: string): Promise<Root> => {
  const markdown = await fs.readFile(file, "utf-8");
  const root = remark().parse(markdown);
  cleanNode(root);
  return root;
};

const cleanNode = (node: ParseableNode) => {
  if ("position" in node) {
    delete node.position;
  }
  
  if ("children" in node) {
    node.children.forEach(n => cleanNode(n));
  }
};
