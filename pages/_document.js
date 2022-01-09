import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
              <meta name='ex' content='aaaa'></meta>
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
