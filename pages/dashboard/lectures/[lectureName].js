import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import getLectureWithName from "@/lib/lectures/getLecture";
import getRegisteredLectureInfo from "@/lib/lectures/getRegisterLectureInfo";

import styles from "@/components/dashboard/db.module.css";
import Loader from "@/components/common/loader";
import EventComponent from "@/components/dashboard/EventComponent";
import Overlay from "@/components/common/overlay";

export default function DashboardLectureName() {
  return (
    <div>
      <ToastContainer />
      <Overlay>
        <Dashboard />
      </Overlay>
    </div>
  );
}
function Dashboard() {
  const { user, userLectures } = useUserContext();
  const router = useRouter();
  const { lectureName } = router.query;
  const [Lecture, setLecture] = useState(null);
  const [userLectureId, setUserLectureId] = useState(null);
  const [userLectureDetails, setUserLectureDetails] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (lectureName) {
      getLectureWithName(lectureName, setLecture);
    }
  }, [lectureName]);

  useEffect(() => {
    if (Lecture && userLectures) {
      for (var i = 0; i < userLectures.length; i++) {
        if (userLectures[i].userLectureId == Lecture.id) {
          setUserLectureId(userLectures[i].userLectureId);
          setIsRegistered(true);
        }
      }
    }
  }, [Lecture, userLectures]);

  useEffect(() => {
    if (isRegistered && Lecture && userLectureId) {
      getRegisteredLectureInfo(
        userLectureId,
        user.jwt,
        setLecture,
        setUserLectureDetails
      );
    }
  }, [isRegistered]);

  return (
    <div className={styles["main"]}>
      {Lecture && isRegistered && userLectureDetails ? (
        <div className={styles["grid"]}>
          <div className={styles["section1"]}>
            <EventComponent event={Lecture}></EventComponent>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
