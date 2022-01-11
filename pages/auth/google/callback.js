import Loader from "@/components/common/loader";
import { useUserContext } from "@/context/userContext";
import { CleanedUserData, saveCookie } from "@/lib/user/login";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function GoogleAuthCallback() {
  const router = useRouter();
  const {setUser,setIsLoggedIn}=useUserContext()
  useEffect(() => {
    if (router.query["id_token"]) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/callback?id_token=${router.query["id_token"]}w&access_token=${router.query["access_token"]}&raw%5Baccess_token%5D=${router.query["access_token"]}&raw%5Bexpires_in%5D=${router.query["raw[expires_in]"]}&raw%5Bscope%5D=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&raw%5Btoken_type%5D=Bearer&raw%5Bid_token%5D=${router.query["id_token"]}`
        )
        .then((res) => {
          const data=CleanedUserData(res.data.jwt,res.data.user) 
          saveCookie(data)
          setUser(data)
          setIsLoggedIn(true) 
          router.push('/')

        });

    }
  }, [router.query]);
  return <Loader/>;
}
