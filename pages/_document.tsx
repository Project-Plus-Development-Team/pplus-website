// Function says: This is the Netlify document component, shared with all pages just like _app
// It's used to customize the base HTML document, mostly to add custom attributes (like lang) and CSS classes to HTML elements like <html> and <body>

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