
import ComingSoon from "@/components/common/coming_soon";
import Overlay from "@/components/common/overlay";

export default function Events() {
  return (
    <div>
      <Overlay>
        <ComingSoon />
      </Overlay>
    </div>
  );
}











// import Loader from "@/components/common/loader";
// import { useUserContext } from "@/context/userContext";
// import getLectures from "@/lib/lectures/getLectures";
// import registerLecture from "@/lib/lectures/registerLecture";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Lecture() {
//   const {user}=useUserContext()
//   const [Lectures, setLectures] = useState(null);
//   useEffect(() => {
//     getLectures(setLectures);
//   }, []);
//   return (
//     <div>
//       {Lectures?
//       <>
//       {Lectures.map((lecture)=>(
//         <div key={lecture.id}>
//           <Link href={`/lectures/${lecture.slug}`}><a>{lecture.name}</a></Link>
//         </div>
//       ))}
//       </>
//       :<Loader/>}
//     </div>
//     );
// }
