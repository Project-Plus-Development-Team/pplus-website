// Function says: This page uses getStaticProps to load the /data/faq.md file to make it easier to change the FAQ

import Head from "next/head";
import { Content } from "react-bulma-components";
import { promises as fs } from "fs";
import path from "path";
import { GetStaticProps } from "next";
import CopyToClipboard from "../components/Changes/CopyToClipboard";
import { useCallback, useEffect, useState } from "react";
import { useHash } from "../hooks/use-hash";
import { MarkdownRenderer, parseMarkdown } from "lib/parse-markdown";
import { toString } from "mdast-util-to-string";

const HeadingWithAnchor = ({ children, siteUrl, hash }) => {
  const hasAnchor = children[0].includes("§");

  if (!hasAnchor) {
    return (
      <h4>{children}</h4>
    );
  }

  const firstElemParts = children[0].split("§");
  const restOfFirstChild = firstElemParts.slice(1).join("§");

  const newChildren = [
    restOfFirstChild,
    ...children.slice(1)
  ];

  const hasHighlightedClass = hash === firstElemParts[0];

  return (
    <h4 id={firstElemParts[0]} className={hasHighlightedClass ? "highlighted" : ""}>
      {newChildren}
      <CopyToClipboard link={`${siteUrl}/faq#${firstElemParts[0]}`}/>
    </h4>
  );
};

interface Props {
  markdownAst: any
  siteUrl: string
  jsonLD: string
}

export default function FAQ({ markdownAst, siteUrl, jsonLD }: Props) {
  const hash = useHash();

  // useCallback to pass the siteUrl
  const HeadingWithAnchorWithSiteUrl = useCallback(({ children }) => (
    <HeadingWithAnchor siteUrl={siteUrl} hash={hash}>
      {children}
    </HeadingWithAnchor>
  ), [siteUrl, hash]);

  return (
    <>
      <Head>
        <title>F.A.Q.</title>
        <script type="application/ld+json">
          {jsonLD}
        </script>
      </Head>
      <Content>
        {/* <ReactMarkdown
          className="line-break"
          components={{
            h4: HeadingWithAnchorWithSiteUrl
          }}
        >
          {markdown}
        </ReactMarkdown> */}
        {/* <MarkdownRenderer>{markdownAst}</MarkdownRenderer> */}
      </Content>
      <style global jsx>{`
        .content h1 {
          padding: 0 0.8rem;
        }

        .content h4 {
          margin-top: 2em;
          margin-bottom: 0.5em;
          border-radius: 0.3rem;
          background-color: hsla(0, 0%, 100%, 0.1);
          padding: 0 0.8rem;
        }

        .content h4.highlighted {
          background-color: #0a8354;
        }

        p {
          padding: 0 0.8rem;
        }

        h4 > .copy {
          color: white;
        }

        h4:hover > .copy {
          visibility: visible;
        }
      `}</style>
    </>
  );
}

const mdastNodeToString = (node: unknown) => (
  toString(node, { includeImageAlt: true })
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const markdownPath = path.join(process.cwd(), "data/faq.md");
  const markdown = await fs.readFile(markdownPath, "utf-8");
  const markdownAst = parseMarkdown(markdown);

  return {
    props: {
      markdownAst,
      siteUrl: process.env.URL,
      jsonLD: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": markdownAst.children.reduce((prev, child, index) => {
          if (child.type !== "heading" || child.depth !== 4) {
            return prev;
          }

          const restOfChildren = markdownAst.children.slice(index + 1);
          const nextHeadingIndex = restOfChildren.findIndex(c => c.type === "heading");
          const childrenUntilNextHeading = restOfChildren.slice(0, nextHeadingIndex);

          return [
            ...prev,
            {
              "@type": "Question",
              "name": mdastNodeToString(child),
              "acceptedAnswer": {
                "@type": "Answer",
                "text": childrenUntilNextHeading.map(mdastNodeToString).join("")
              }
            }
          ];
        }, [])
      })
    }
  };
};
