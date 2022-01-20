import Overlay from "@/components/common/overlay";
import Sponsers from "@/components/sponsors/sponsors";
import Head from "next/head";

export default function Sponsors() {
  return (
    <div>
      <Head>
        <title>Sponsers</title>
      </Head>
      <Overlay>
        <Sponsers />
      </Overlay>
    </div>
  );
}
