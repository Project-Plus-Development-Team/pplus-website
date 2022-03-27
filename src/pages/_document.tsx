import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <Head/>
        <body className="has-background-dark">
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}