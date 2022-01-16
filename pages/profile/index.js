import Overlay from "@/components/common/overlay";
import Main from "@/components/profile/main";
import { ProfileWrapper} from "@/context/profileContext";
import { useUserContext } from "@/context/userContext";
import { Login } from "@/lib/user/login";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Me() {
      const {isLoggedIn}=useUserContext()
      const router=useRouter()
      console.log(isLoggedIn)
      // useEffect(()=>{
      //       if(!isLoggedIn)[
      //             Login(router)
      //       ]
      // },[isLoggedIn])
      return (
            <ProfileWrapper>
                  <Head>
                        <title>Profile</title>
                  </Head>
                  <Overlay>
                  <Main/>
                  </Overlay>
            </ProfileWrapper>
      )
}
