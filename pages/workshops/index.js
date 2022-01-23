import ComingSoon from "@/components/common/coming_soon";
import Loader from "@/components/common/loader";
import Overlay from "@/components/common/overlay";
import { useWorkshopContext } from "@/context/workshopContext";
import getWorkshops from "@/lib/workshops/getWorkshops";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Workshops() {
  const router = useRouter();
  const { workshops, setWorkshops } = useWorkshopContext();
  useEffect(() => {
    if (workshops == null && router.asPath=="/workshops") 
      {
        async function test(){
          let data=await getWorkshops();
          setWorkshops(data)
          
        }
        test()
      }
      else if(workshops && router.asPath=="/workshops"){
        router.push(`/workshops/${workshops[0].slug}`)
      }
      // getWorkshops(setWorkshops,router);
  }, [router.asPath]);
  return (
    <>
      <Head>
        <title>Tathva 21</title>
      </Head>
      <Loader/>
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
