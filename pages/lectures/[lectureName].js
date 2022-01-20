import Ewl_component from "@/components/common/Ewl_component";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "@/components/common/loader";

import style from "../../components/events_workshop_lectures/ewl.module.css";
import { Center } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import getLectureWithName from "@/lib/lectures/getLecture";
import Head from "next/head";


export function Lecture({children}) {
  return (
    <div className={style.main}>
      <div className={style.list}>
        <ul>
          <li>AI</li>
          <li>ML</li>
          <li>ROCKET</li>
          <li>SPACEx</li>
          <li>Tesla</li>
          <li>Googe</li>
        </ul>
      </div>
      <Center>
        <div className={style.listmobile}>
          <ul>
            <li>AI</li>
            <li>ML</li>
            <li>ROCKET</li>
            <li>SPACEx</li>
            <li>Tesla</li>
            <li>Googe</li>
          </ul>
        </div>
      </Center>
      <div className={style.main2}>
        {/* <Ewl_component /> */}
        {children}
      </div>

    </div>
  );
}


export default function LectureName() {

  const [Lecture1, setLecture1] = useState(null);
  const router=useRouter()
  const { lectureName } = router.query;
  useEffect(() => {
    if (lectureName) {
      getLectureWithName(lectureName , setLecture1);
    }
  }, [lectureName]);

  return (
    <div>
      <Head>
        <title>Lecture</title>
      </Head>
      <Lecture>
        {Lecture1?<Ewl_component event={Lecture1} type="lecture"/>:<Loader/>}
        
      </Lecture>
      <ToastContainer></ToastContainer>

    </div>
  );
}
















// import Loader from "@/components/common/loader";
// import RazerPay from "@/components/common/razerpay";
// import { useUserContext } from "@/context/userContext";
// import getLectureWithName from "@/lib/lectures/getLecture";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import Workshop from "pages/workshops/[workshopName]";
// import { useState, useEffect } from "react";
// export default function Lecture() {
//   const router = useRouter();
//   const { lectureName } = router.query;
//   const [Lecture, setLecture] = useState(null);
//   const { user, userLectures } = useUserContext();
//   const [isRegistered, setIsRegistered] = useState(false);

//   useEffect(() => {
//     if (lectureName) getLectureWithName(lectureName, setLecture);
//   }, [lectureName]);
//   useEffect(() => {
//     if (Lecture && userLectures) {
//       for (var i = 0; i < userLectures.length; i++) {
//         if (userLectures[i].lectureId == Lecture.id) {
//           setIsRegistered(true);
//         }
//       }
//     }
//   }, [Lecture, userLectures]);
//   return (
//     <div>
//       {Lecture ? (
//         <>
//           {Lecture.name}
//           <Image
//             src={Lecture.coverImage.src}
//             width={200}
//             height={200}
//             alt="lecture-cover-image"
//           ></Image>
//           {isRegistered ? (
//             <>you are registerd</>
//           ) : (
//             <>
//               {Lecture.regPrice ? (
//                 <div>
//                   <RazerPay
//                     event={Lecture}
//                     user={user}
//                     paymentType={"lecture"}
//                     regPrice={Lecture.regPrice}
//                   />
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => {
//                     registerLecture(lecture.id, user.id, user.jwt);
//                   }}
//                 >
//                   Register
//                 </button>
//               )}
//             </>
//           )}
//         </>
//       ) : (
//         <Loader />
//       )}
//     </div>
//   );
// }
