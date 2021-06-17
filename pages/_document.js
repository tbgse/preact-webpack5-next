import NextDocument, { Html, Main, Head, NextScript } from 'next/document';


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang={this.props.htmlLang} prefix="og: http://ogp.me/ns#">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
