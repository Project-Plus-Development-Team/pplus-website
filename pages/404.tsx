import Head from "next/head";
import { Heading, Columns } from "react-bulma-components";
import SmartImage from "../components/smart-image";

export default function FourOhFour() {
  return (
    <>
      <Head><title>404 - Page not found</title></Head>
      <Columns className="is-vcentered">
        <Columns.Column className="has-text-centered">
          <Heading>YIKES!</Heading>
          <Heading subtitle>This page could not be found.<br/>Imagine the soothing sound of <a href="https://youtu.be/vv_x6I1l1mM">crashing Project M.</a></Heading>
        </Columns.Column>
        <Columns.Column className="has-text-centered">
          <SmartImage
            img={require("../public/images/knuckles/woah.png?size=600")}
            webp={require("../public/images/knuckles/woah.png?size=600&webp")}
          />
        </Columns.Column>
      </Columns>
    </>
  );
}