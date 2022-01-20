
import ComingSoon from "@/components/common/coming_soon";
import Overlay from "@/components/common/overlay";

export default function Lectures() {
  return (
    <div>
      <Overlay>
        <ComingSoon event={"Workshops"} time={"01 22 2022, 4:00 pm"}/>
      </Overlay>
    </div>
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
