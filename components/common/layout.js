import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
            <link rel="preload" href="/fonts/batman_forever/batmfa__.ttf" as="font" crossOrigin=""/>
            <link rel="preload" href="/fonts/quantico/quantico.regular.ttf" as="font" crossOrigin=""/>
      </Head>
      <main>{children}</main>
    </div>
  );
}
