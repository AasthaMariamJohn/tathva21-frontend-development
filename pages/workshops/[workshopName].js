import Ewl_component from "@/components/common/Ewl_component";
import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";
import Loader from "@/components/common/loader";
import style from "../../components/events_workshop_lectures/ewl.module.css";
import { Center } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getWorkshopWithName from "@/lib/workshops/getWorkshop";
import Head from "next/head";
import Link from "next/link";
import { useWorkshopContext } from "@/context/workshopContext";
import getWorkshops from "@/lib/workshops/getWorkshops";
import { useUserContext } from "@/context/userContext";
import Overlay from "@/components/common/overlay";
import { useRef } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

export function Workshop({ children }) {
  const { workshops, setWorkshops } = useWorkshopContext();
  useEffect(() => {
    if (workshops == null) {
      async function test() {
        let data = await getWorkshops();
        setWorkshops(data);
      }
      test();
    }
  }, [workshops]);

  function handleControls(shift) {
    myRef.current.scrollLeft += shift;
  }

  const myRef = useRef(null);

  return (
    <div className={style.main}>
      <Center>
        <Link href={"/workshops"} passHref>
          <button className={style.backbtn}>
            {/* <RiArrowGoBackFill style={{ fontSize: "2.5rem" }} /> */}
            Back
          </button>
        </Link>
        <div className={style.main2}>
          {/* <Ewl_component /> */}
          {children}
        </div>
      </Center>
    </div>
  );
}
function isReg(Workshop1, userWorkshops) {
  if (Workshop1 && userWorkshops) {
    for (let i = 0; i < userWorkshops.length; i++) {
      if (userWorkshops[i].workshopId === Workshop1.id) {
        return true;
      }
    }
  }
  return false;
}
export default function WorkshopName() {
  const { userWorkshops } = useUserContext();
  const [Workshop1, setWorkshop1] = useState(null);

  const router = useRouter();
  const { workshopName } = router.query;
  useEffect(() => {
    if (workshopName) {
      getWorkshopWithName(workshopName, setWorkshop1);
    }
  }, [workshopName]);

  const isRegistered = useMemo(
    () => isReg(Workshop1, userWorkshops),
    [Workshop1, userWorkshops]
  );

  return (
    <div>
      <Head>
        <title>Workshop</title>
      </Head>
      <Overlay>
        {Workshop1 ? (
          <Workshop>
            <Ewl_component
              event={Workshop1}
              type={"workshop"}
              isRegistered={isRegistered}
            />
          </Workshop>
        ) : (
          <Loader />
        )}
      </Overlay>

      <ToastContainer></ToastContainer>
    </div>
  );
}
