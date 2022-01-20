import ComingSoon from "@/components/common/coming_soon";
import Overlay from "@/components/common/overlay";
import Head from "next/head";

export default function Events() {
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>
      <Overlay>
        <ComingSoon event={"Events"} time={"05 26 2029, 6:00 am"}/>
      </Overlay>
    </div>
  );
}
