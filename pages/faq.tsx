// Function says: This page uses getStaticProps to load the /data/faq.md file to make it easier to change the FAQ

import Head from "next/head";
import { Content } from "react-bulma-components";
import ReactMarkdown from "react-markdown";
import { promises as fs } from "fs";
import path from "path";
import { GetStaticProps } from "next";

export default function FAQ({ markdown }) {
  return (
    <>
      <Head>
        <title>F.A.Q.</title>
      </Head>
      <Content>
        <ReactMarkdown className="line-break">
          {markdown}
        </ReactMarkdown>
      </Content>
      <style global jsx>{`
        .content h4 {
          margin-top: 1.1em;
          margin-bottom: 0.4em;
        }
      `}</style>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const markdownPath = path.join(process.cwd(), "data/faq.md");
  const markdown = await fs.readFile(markdownPath, "utf-8");

  return {
    props: {
      markdown
    }
  };
};
