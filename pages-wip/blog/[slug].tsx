import fs from "fs/promises";
import matter from "gray-matter";
import { Content } from "react-bulma-components";
import ReactMarkdown from "react-markdown";

export default function BlogEntry({ frontmatter, content }) {
  return (
    <Content>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </Content>
  );
}

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