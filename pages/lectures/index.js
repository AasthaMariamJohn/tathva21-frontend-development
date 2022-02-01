import ComingSoon from "@/components/common/coming_soon";
import Overlay from "@/components/common/overlay";
import EwlFrontPage from "@/components/events_workshop_lectures/EwlFrontPage";
import Head from "next/head";

export default function Lectures() {
  return (
    <div>
      <Overlay>
        <Head>
          <title>Lecture</title>
        </Head>
        <ComingSoon event={"Lectures"} time={"02 10 2022, 12:00 am"} />
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
