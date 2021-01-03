import Head from "next/head";
import { Container } from "react-bulma-components";
import ReactMarkdown from "react-markdown";
import { promises as fs } from "fs";
import path from "path";

export default function FAQ({ markdown }) {
  return (
    <>
      <Head>
        <title>F.A.Q.</title>
      </Head>
      <Container>
        <Container className="maincard">
          <div className="content">
            <ReactMarkdown className="line-break" allowDangerousHtml>
              {markdown}
            </ReactMarkdown>
          </div>
        </Container>
      </Container>
      <style global jsx>{`
        .content h4 {
          margin-top: 1.1em;
          margin-bottom: 0.4em;
        }
      `}</style>
    </>
  );
}

export const getStaticProps = async () => {
  const markdownPath = path.join(process.cwd(), "markdown/faq.md");
  const markdown = await fs.readFile(markdownPath, "utf-8");

  return {
    props: {
      markdown
    }
  };
};
