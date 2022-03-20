import Head from "next/head";
import { Heading, Columns } from "react-bulma-components";

import woah from "../public/images/knuckles/woah.png";

export default function FourOhFour() {
  return (
    <>
      <Head><title>404 - Page not found</title></Head>
      <Columns className="is-vcentered">
        <Columns.Column className="has-text-centered">
          <Heading>YIKES!</Heading>
          <Heading subtitle>This page could not be found.<br/>Imagine the soothing sound of <a href="https://youtu.be/vv_x6I1l1mM">crashing Project M.</a></Heading>
          <br/>
          <span>
            There&apos;s a high chance this page used to exist, but has moved.<br/>
            A search function to find moved content is in the works, but until then you can<br/>
            <a href="/discord" target="_blank">ask in our Discord server</a> or <a href="https://twitter.com/functiongermany" target="_blank">tweet at me</a>.
          </span>
        </Columns.Column>
        <Columns.Column className="has-text-centered">
          <img
            src={woah.src}
            style={{
              width: 600,
              height: 384
            }}
            alt="Knuckles with a surprised 'woah!' expression"
          />
        </Columns.Column>
      </Columns>
    </>
  );
}