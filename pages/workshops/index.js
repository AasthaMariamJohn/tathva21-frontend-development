import ComingSoon from "@/components/common/coming_soon";
import Overlay from "@/components/common/overlay";
import Head from "next/head";
import { useRouter } from "next/router";
import {useEffect} from 'react'

export default function Lectures() {
  const router =useRouter()
  useEffect(()=>{
    router.push("/workshops/data-science")
  },[])
  return (
    <>
      <Head>
        <title>Tathva 21</title>
      </Head>
      {/* <div>
        <Overlay>
          <ComingSoon event={"Workshops"} time={"01 22 2022, 4:00 pm"} />
        </Overlay>
      </div> */}
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
