import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="logo/favicon.png"></link>
          <meta
            name="description"
            content="official website of Tathva 21,techinal fest of National
                Institute of Technology,Calicut"
          ></meta>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-JHKM93DCN2"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[G-JHKM93DCN2]', { page_path: window.location.pathname });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
