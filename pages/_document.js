import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
              <link rel="icon" type="image/x-icon" href="logo/favicon.png"></link>
              <meta name='description' content='official website of Tathva 21,techinal fest of National
                Institute of Technology,Calicut'></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
