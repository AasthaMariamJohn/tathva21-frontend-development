import Main from "@/components/profile/main";
import { ProfileWrapper} from "@/context/profileContext";
import Head from "next/head";

export default function Me() {
      return (
            <ProfileWrapper>
                  <Head>
                        <title>Profile</title>
                  </Head>
                  <Main/>
            </ProfileWrapper>
      )
}
