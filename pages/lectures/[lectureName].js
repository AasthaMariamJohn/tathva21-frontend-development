import Ewl_component from "@/components/common/Ewl_component";
import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";
import Loader from "@/components/common/loader";
import style from "../../components/events_workshop_lectures/ewl.module.css";
import { Center } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Link from "next/link";
import { useUserContext } from "@/context/userContext";
import Overlay from "@/components/common/overlay";
import getLectureWithName from "@/lib/lectures/getLecture";
export function Lecture({ children }) {
  return (
    <div className={style.main}>
      <Center>
        <Link href={"/lectures"} passHref>
          <button className={style.backbtn}>Back</button>
        </Link>
        <div className={style.main2}>{children}</div>
      </Center>
    </div>
  );
}
function isReg(Workshop1, userWorkshops) {
  if (Workshop1 && userWorkshops) {
    for (let i = 0; i < userWorkshops.length; i++) {
      if (userWorkshops[i].lectureId === Workshop1.id) {
        return true;
      }
    }
  }
  return false;
}
export default function LectureName() {
  const { userLectures } = useUserContext();
  const [Lecture1, setLecture1] = useState(null);

  const router = useRouter();
  const { lectureName } = router.query;

  useEffect(() => {
    if (lectureName) {
      getLectureWithName(lectureName, setLecture1);
    }
  }, [lectureName]);

  const isRegistered = useMemo(
    () => isReg(Lecture1, userLectures),
    [Lecture1, userLectures]
  );

  return (
    <div>
      <Head>
        <title>Lecture</title>
      </Head>
      <Overlay>
        {Lecture1 ? (
          <Lecture>
            <Ewl_component
              event={Lecture1}
              type={"lecture"}
              isRegistered={isRegistered}
            />
          </Lecture>
        ) : (
          <Loader />
        )}
      </Overlay>

      <ToastContainer></ToastContainer>
    </div>
  );
}
