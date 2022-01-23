import { useUserContext } from "@/context/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import getWorkshopWithName from "@/lib/workshops/getWorkshop";
import getRegisteredWorkshopInfo from "@/lib/workshops/getRegisteredWorkshopInfo";
import styles from "@/components/dashboard/db.module.css";
import Loader from "@/components/common/loader";
import EventComponent from "@/components/dashboard/EventComponent";
import { useRouter } from "next/router";
import Overlay from "@/components/common/overlay";
import { Login } from "@/lib/user/login";
import Head from "next/head";
import Ewl_component from "@/components/dashboard/workshops/workshopComponent";

export default function DashboardWorkshopName() {
  const router=useRouter()
  // const { isLoggedIn, user } = useUserContext();
  // useEffect(() => {
  //   if (!isLoggedIn && !user) {
  //     Login(router);
  //   }
  // }, [isLoggedIn]);
	const {workshopName,refresh } = router.query
	useEffect(()=>{
		if(refresh=="True")
			router.push(`/dashboard/workshops/${workshopName}`)
	},[refresh])
  return (
    <div>
      <Head>
        <title>WorkshopName</title>
      </Head>
      <ToastContainer />
      <Overlay>
        <Dashboard />
      </Overlay>
    </div>
  );
}
function Dashboard() {
  const { user, userWorkshops } = useUserContext();
  const router = useRouter();
  const { workshopName } = router.query;
  const [Workshop, setWorkshop] = useState(null);
  const [userWorkshopId, setUserWorkshopId] = useState(null);
  const [userWorkshopDetails, setUserWorkshopDetails] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (workshopName) {
      getWorkshopWithName(workshopName, setWorkshop);
    }
  }, [workshopName]);

  useEffect(() => {
    if (Workshop && userWorkshops) {
      for (var i = 0; i < userWorkshops.length; i++) {
        if (userWorkshops[i].workshopId == Workshop.id) {
          setUserWorkshopId(userWorkshops[i].userWorkshopId);
          setIsRegistered(true);
        }
      }
    }
  }, [Workshop, userWorkshops]);

  useEffect(() => {
    if (isRegistered && Workshop && userWorkshopId) {
      getRegisteredWorkshopInfo(
        userWorkshopId,
        user.jwt,
        setWorkshop,
        setUserWorkshopDetails
      );
    }
  }, [isRegistered]);

  return (
    <div className={styles["main"]}>
      {Workshop && isRegistered &&   userWorkshopDetails ? (
        <div className={styles["grid"]}>
          <div className={styles["section1"]}>
            {/* <EventComponent event={Workshop}></EventComponent> */}
            <Ewl_component event={Workshop} isRegistered={true}></Ewl_component>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
