// Like _app.js, _document.js is a custom component that Next.js uses
// to augment your applications <html> and <body> tags.
// This is necessary because Next.js pages skip the definition
// of the surrounding document’s markup.

import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// The logic you see here has been pointed out in the styled-components
// documentation: https://styled-components.com/docs/advanced#nextjs
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        enhanceComponent: (Component) => Component
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
