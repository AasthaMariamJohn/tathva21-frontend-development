import Loader from "@/components/common/loader";
import Overlay from "@/components/common/overlay";
import Dashboard2 from "@/components/dashboard/index/dashbaord2";
import { useUserContext } from "@/context/userContext";
import getRegisteredWorkshops from "@/lib/dashboard/getRegisterdWorkshops";
import { Login } from "@/lib/user/login";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DashboarIndex() {
  const { isLoggedIn, user } = useUserContext();

  const [regWorkshops, setRegWorkshops] = useState(null);
  useEffect(()=>{
    if(user){
      getRegisteredWorkshops(user.jwt,setRegWorkshops)

    }
  },[user])
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      {regWorkshops?
      <Overlay>
        <Dashboard2 events={regWorkshops}/>
      </Overlay>
      :<Loader/>}
    </div>
  );
}
