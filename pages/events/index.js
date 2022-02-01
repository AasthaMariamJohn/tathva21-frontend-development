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
        <ComingSoon event={"Events"} time={"02 06 2022, 12:00 am"} />
      </Overlay>
    </div>
  );
}
