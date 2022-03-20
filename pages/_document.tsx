// Function says: This is the Netlify document component, shared with all pages just like _app
// It's used to customize the base HTML document, mostly to add custom attributes (like lang) and CSS classes to HTML elements like <html> and <body>

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  public render() {
    return (
      <Html lang="en" className="is-flex is-flex-direction-column">
        <Head/>
        <body
          className="has-background-dark is-flex-grow-1"
          style={{
            backgroundImage: `url(/images/mosaic-background-pattern.jpg)` // TODO can be optimized maybe?
          }}
        >
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}