import Head from "next/head";
import { Container } from "react-bulma-components";
import ReactMarkdown from "react-markdown";

function FAQ({ markdown }) {
  return (
    <>
      <Head>
        <title>F.A.Q.</title>
      </Head>
      <Container>
        <Container className="maincard">
          <div className="content">
            <ReactMarkdown className="line-break" allowDangerousHtml>
              {markdown.default}
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

FAQ.getInitialProps = async () => {
  const markdown = await import("../markdown/faq.md");

  return {
    markdown
  };
};

export default FAQ;
