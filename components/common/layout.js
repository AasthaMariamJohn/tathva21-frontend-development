import Head from "next/head";
import Navbar from "./Navbar";
import Model3D from "@/components/3DModel/main";
import ContactUsLogo from "./contactLogo";
import DonateBtn from "./donateBtn";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/batman_forever/batmfa__.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/quantico/quantico.regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/augmented-ui@2/augmented-ui.min.css"
        />
      </Head>
      <Navbar />
      { <Model3D />   }

      <main>{children}</main>
      {/* <DonateBtn/> */}
      <ContactUsLogo />
    </div>
  );
}
