import Ewl_component from "@/components/common/Ewl_component";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
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

export function Workshop({ children }) {
  const { workshops, setWorkshops } = useWorkshopContext();
  useEffect(() => {
    if (workshops == null) getWorkshops(setWorkshops);
  }, []);

  function handleControls(shift) {
    myRef.current.scrollLeft += shift;
  }

  const myRef = useRef(null);

  return (
    <div className={style.main}>
      <div className={style.list}>
        {workshops ? (
          <ul className={style.style2}>
            {workshops.map((workshop) => (
              <li key={workshop.id}>
                <Link href={`/workshops/${workshop.slug}`} passHref>
                  <a>{workshop.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
      <Center>
        <div className={style.listmobile}>
          {workshops ? (
            <>
              <button
                style={{ display: "inline-block" }}
                onClick={() => {
                  handleControls(-220);
                }}
                className={style.prev}
              >
                {"<"}
              </button>

              <ul ref={myRef} style={{ display: "inline-block" }}>
                {workshops.map((workshop) => (
                  <li key={workshop.id}>
                    <Link href={`/workshops/${workshop.slug}`} passHref>
                      <a>{workshop.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                style={{ display: "inline-block" }}
                onClick={() => {
                  handleControls(220);
                }}
                className={style.next}
              >
                {">"}
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </Center>
      <div className={style.main2}>
        {/* <Ewl_component /> */}
        {children}
      </div>
    </div>
  );
}

export default function WorkshopName() {
  const [Workshop1, setWorkshop1] = useState(null);
  const { userWorkshops } = useUserContext();
  const [isRegistered, setIsRegistered] = useState(false);

  const router = useRouter();
  const { workshopName } = router.query;
  useEffect(() => {
    if (workshopName) {
      getWorkshopWithName(workshopName, setWorkshop1);
    }
  }, [workshopName]);
  useEffect(() => {
    if (Workshop1 && userWorkshops) {
      for (let i = 0; i < userWorkshops.length; i++) {
        if (userWorkshops[i].workshopId == Workshop1.id) {
          setIsRegistered(true);
        }
      }
    }
  }, [Workshop1, userWorkshops]);
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

// WorkshopName.getLayout = function (page) {
//   return (
//     // <Layout>
//       <Workshoplayout>{page}</Workshoplayout>
//        /* </Layout> */
//   );
// };

// import Loader from "@/components/common/loader";
// import RazerPay from "@/components/common/razerpay";
// import { useUserContext } from "@/context/userContext";
// import getWorkshopWithName from "@/lib/workshops/getWorkshop";
// import registerWorkshop from "@/lib/workshops/registerWorkshop";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// export default function Workshop() {
//   const router = useRouter();
//   const { workshopName } = router.query;
//   const [Workshop, setWorkshop] = useState(null);
//   const { user, userWorkshops } = useUserContext();
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [userLectureId, setUserLectureId] = useState(null);
//   // const [userLectureDetails, setUserLectureDetails] = useState(null);

//   useEffect(() => {
//     if (workshopName) getWorkshopWithName(workshopName, setWorkshop);
//   }, [workshopName]);
//   useEffect(() => {
//     if (Workshop && userWorkshops) {
//       for (var i = 0; i < userWorkshops.length; i++) {
//         if (userWorkshops[i].workshopId == Workshop.id) {
//           setIsRegistered(true);
//           setUserLectureId(userWorkshops[i].userWorkshopId);
//         }
//       }
//     }
//   }, [Workshop, userWorkshops]);
//   return (
//     <div>
//       {Workshop ? (
//         <>
//           {Workshop.name}
//           <Image
//             src={Workshop.coverImage.src}
//             width={200}
//             height={200}
//             alt="next-image"
//           ></Image>
//           {isRegistered ? (
//             <>you are registerd</>
//           ) : (
//             <>
//              {Workshop.regPrice?
//                <div>
//                <RazerPay event={Workshop} user={user} paymentType={"workshop"} regPrice={Workshop.regPrice}/>
//              </div>
//              :
//               <button
//               onClick={() => {
//                 registerWorkshop(workshop.id, user.id, user.jwt);
//               }}
//             >
//               Register
//             </button>
//             }
//             </>
//           )}
//         </>
//       ) : (
//         <Loader />
//       )}
//     </div>
//   );
// }
