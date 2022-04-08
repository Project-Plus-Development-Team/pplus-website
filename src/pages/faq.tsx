import { Content } from "react-bulma-components";
import { GetStaticProps } from "next";
import { useCallback } from "react";
import { useHash } from "../shared/hooks/use-hash";
import { loadMarkdownAst, ParseableNode } from "next-server-utilities/load-markdown-ast";
import { getFAQStructuredData } from "modules/faq/get-faq-structured-data";
import { MarkdownAstRenderer, RenderHook } from "shared/components/MarkdownAstRenderer";
import { CopyToClipboard } from "shared/components/CopyToClipboard";
import { FAQPageJsonLd, NextSeo } from "next-seo";
import { root } from "next-server-utilities/root";
import { getCurrentUrlWithHash } from "shared/functions/get-current-url-with-hash";
import { NextSeoQuestion } from "shared/types/structured-data";

import styles from "../modules/faq/faq.module.scss";

interface Props {
  markdownAst: any
  questions: NextSeoQuestion[]
}

const getIdOfNode = (node: ParseableNode) => {
  if (!("url" in node)) {
    return undefined;
  }

  const result = node.url.match(/^#(.*)$/i);
  return result?.[1];
};

const FAQ = ({ markdownAst, questions }: Props) => {
  const hash = useHash();
  
  // TODO instead of this custom stuff i should probably use MDX instead
  const Hook: RenderHook = useCallback((node, Render) => {
    if (node.type === "heading" && node.depth === 4) {
      const content = node.children[0].type === "link" ? (
        node.children[0].children.map((n, i) => <Render key={i} node={n}/>)
      ) : (
        node.children.map((n, i) => <Render key={i} node={n}/>)
      );
  
      const id = getIdOfNode(node.children[0]);
      const highlightedClass = id === hash ? styles.highlighted : "";

      return (
        <h4 id={id} className={`copy-trigger ${highlightedClass}`}>
          {content}
          {id && (
            <CopyToClipboard link={getCurrentUrlWithHash(id)}/>
          )}
        </h4>
      );
    }
  }, [hash]);

  return (
    <main>
      <NextSeo
        title="Frequently Asked Questions"
        description="Find answers to common questions about installation details, ISOs, mod content and more!"
      />
      <FAQPageJsonLd
        mainEntity={questions}
      />
      <Content className={styles.content}>
        <MarkdownAstRenderer
          node={markdownAst}
          renderHook={Hook}
        />
      </Content>
      <style jsx global>{`
        .copy-trigger.${styles.highlighted} > .copy {
          color: #005c32;
        }

        .copy-trigger.${styles.highlighted}:hover > .copy {
          color: hsl(0, 0%, 80%);
        }
      `}</style>
    </main>
  );
};

export default FAQ;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const markdownPath = root("src/modules/faq/faq.md");
  const markdownAst = await loadMarkdownAst(markdownPath);

  return {
    props: {
      markdownAst,
      questions: getFAQStructuredData(markdownAst)
    }
  };
};
