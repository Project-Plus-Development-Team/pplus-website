import { Container, Section, Heading } from "react-bulma-components";
import ReactMarkdown from "react-markdown";

function FAQ({ markdown }) {
  return (
    <>
      <Section>
        <Container className="maincard">
          <Heading>F.A.Q.</Heading>
          <Heading subtitle className="is-spaced">(Frequently Asked Questions)</Heading>
          <ReactMarkdown allowDangerousHtml>{markdown.default}</ReactMarkdown>
        </Container>
      </Section>
      <style global jsx>{`
        h3 {
          font-size: 20px;
          font-weight: 600;
        }

        h3:not(:first-child) {
          margin-top: 1rem;
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
