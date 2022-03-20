import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { Card, Heading, Media, Message, Tag } from "react-bulma-components";
import Link from "next/link";

interface MatterShape {
  title: string
  date: string
  excerpt: string
  image?: string
  tags?: string[]
  author: string
}

interface BlogEntry {
  slug: string
  frontmatter: MatterShape
}

interface Props {
  blogEntries: BlogEntry[]
}

const textToHue = (text: string) => {
  const charCodeSum = [...text].reduce((prev, cur) => prev + cur.charCodeAt(0), 0);
  return (charCodeSum % 64) * 4; // mapped from 0-255
};

export default function Blog({ blogEntries }: Props) {
  return (
    <>
      <Heading>Blog entries</Heading>
      {blogEntries
        .sort((a, b) => b.frontmatter.date < a.frontmatter.date ? -1 : 0)
        .map(entry => (
          <Message key={entry.slug}>
            <Message.Header textSize={4}>
              <div className="is-flex-grow-1">
                <Link href={`/blog/${entry.slug}`}>
                  <a className="is-block">
                    {entry.frontmatter.title}
                  </a>
                </Link>
                <Heading subtitle size={6}>
                  {new Date(entry.frontmatter.date).toLocaleDateString(undefined, { dateStyle: "full" })}
                  {" - "}
                  {entry.frontmatter.author}
                </Heading>
              </div>
              {entry.frontmatter.tags?.map((tag, i) => (
                <Tag
                  key={i}
                  size="medium"
                  className="ml-3"
                  style={{
                    backgroundColor: `hsl(${textToHue(tag)}, 70%, 50%)`
                  }}
                >
                  • {tag}
                </Tag>
              ))}
            </Message.Header>
            <Message.Body>
              <Media>
                {entry.frontmatter.image && (
                  <Media.Item align="left">
                    <Card.Image src={entry.frontmatter.image} rounded size={64}/>
                  </Media.Item>
                )}
                <Media.Item align="center">
                  {entry.frontmatter.excerpt}
                </Media.Item>
              </Media>
            </Message.Body>
          </Message>
        ))
      }
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dirents = await fs.readdir("./data/blog", { withFileTypes: true });

  const blogEntries: BlogEntry[] = [];

  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      continue;
    }

    const { ext, name } = path.parse(dirent.name);

    if (ext.toLowerCase() !== ".md") {
      continue;
    }

    const contents = await fs.readFile(`./data/blog/${dirent.name}`, "utf-8");
    const { data } = matter(contents);
    const frontmatter = data as MatterShape;

    blogEntries.push({
      slug: name,
      frontmatter
    });
  }

  return {
    props: {
      blogEntries
    }
  };
};