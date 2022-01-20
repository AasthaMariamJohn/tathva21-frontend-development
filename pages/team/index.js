import Overlay from "@/components/common/overlay";
import Team2 from "@/components/team/team";
import Head from "next/head";
export default function Team() {
  return (
    <div>
      <Head>
        <title>Team</title>
      </Head>
      <Overlay>
        <Team2 />
      </Overlay>
    </div>
  );
}
