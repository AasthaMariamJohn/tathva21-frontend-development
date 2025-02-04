import ComingSoon from "@/components/common/coming_soon";
import Loader from "@/components/common/loader";
import Overlay from "@/components/common/overlay";
import EwlFrontPage from "@/components/events_workshop_lectures/EwlFrontPage";
import { useWorkshopContext } from "@/context/workshopContext";
import { setRefCode } from "@/lib/refCode";
import getWorkshops from "@/lib/workshops/getWorkshops";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Workshops() {
  const router = useRouter();
  const { workshops, setWorkshops } = useWorkshopContext();
  const { refCode } = router.query;

  useEffect(() => {
    if (workshops == null) {
      async function test() {
        let data = await getWorkshops();
        setWorkshops(data);
      }
      test();
    }
  }, []);

  // useEffect(() => {
  //   if (workshops == null && router.asPath.startsWith("/workshops")) {
  //     async function test() {
  //       let data = await getWorkshops();
  //       setWorkshops(data);
  //       // router.push(`/workshops/${data[0].slug}`);
  //     }
  //     test();
  //   }
  //   // else if (workshops && router.asPath.startsWith("/workshops")) {
  //   //   router.push(`/workshops/${workshops[0].slug}`);
  //   //   console.log(workshops);
  //   // }

  //   // getWorkshops(setWorkshops,router);
  // }, [router.asPath]);

  useEffect(() => {
    if (refCode) setRefCode(refCode);
  }, [refCode]);

  return (
    <>
      {/* <Head>
        <title>Tathva 21</title>
      </Head>
      <Loader /> */}
      <Overlay>
        <Head>
          <title>Workshops</title>
        </Head>
        {workshops ? <EwlFrontPage list={workshops} /> : <Loader />}
      </Overlay>
    </>
  );
}

// import Loader from "@/components/common/loader";
// import getWorkshops from "@/lib/workshops/getWorkshops";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import registerWorkshop from "@/lib/workshops/registerWorkshop";
// import { useUserContext } from "@/context/userContext";
// export default function Workshops() {
//   const {user}=useUserContext()
//   const [Workshops, setWorkshops] = useState(null);
//   useEffect(() => {
//     getWorkshops(setWorkshops);
//   }, []);
//   return (
//     <div>
//       {Workshops ? (
//         <div>
//           {Workshops.map((workshop) => (
//             <div key={workshop.id}>
//               <Link href={`/workshops/${workshop.slug}`} passHref>
//                 {workshop.name}
//               </Link>

//             </div>
//           ))}
//         </div>
//       ) : (
//         <Loader />
//       )}
//     </div>
//   );
// }
