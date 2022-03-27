// @ts-nocheck // TODO
import fs from "fs/promises";
import matter from "gray-matter";
import { Content } from "react-bulma-components";

const BlogEntry = ({ frontmatter, content }) => (
  <Content>
    {/* <ReactMarkdown>
      {content}
    </ReactMarkdown> */}
  </Content>
);

export default BlogEntry;

export const getStaticPaths = async () => {
  const files = await fs.readdir("./data/blog");

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = await fs.readFile(`./data/blog/${slug}.md`, "utf-8");

  const { data, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter: data,
      content
    }
  };
};