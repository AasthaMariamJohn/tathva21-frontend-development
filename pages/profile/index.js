import Overlay from "@/components/common/overlay";
import Main from "@/components/profile/main";
import { ProfileWrapper} from "@/context/profileContext";
import { useUserContext } from "@/context/userContext";
import { Login } from "@/lib/user/login";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function Me() {
      const {isLoggedIn,user}=useUserContext()
      const router=useRouter()
      useEffect(()=>{
            if(!isLoggedIn && !user)[
                  Login(router)
            ]
      },[isLoggedIn])
      return (
            <ProfileWrapper>
                  <Head>
                        <title>Profile</title>
                  </Head>
                  <ToastContainer />

                  <Overlay>
                  <Main/>

                  </Overlay>
            </ProfileWrapper>
      )
}
