import Loader from "@/components/common/loader";
import { useUserContext } from "@/context/userContext";
import getLectureWithName from "@/lib/lectures/getLecture";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Lecture() {
  const router = useRouter();
  const { lectureName } = router.query;
  const [Lecture, setLecture] = useState(null);
  const { user, userLectures } = useUserContext();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (lectureName)
      getLectureWithName(
        lectureName,
        setLecture
      );
  }, [lectureName]);
  useEffect(() => {
    if (Lecture && userLectures) {
      for (var i = 0; i < userLectures.length; i++) {
        if (userLectures[i].lectureId == Lecture.id) {
          setIsRegistered(true);
        }
      }
    }
  }, [Lecture, userLectures]);
  return (
    <div>
      {Lecture ? (
        <>
          {Lecture.name}
          {isRegistered ? <>you are registerd</> : <>You are not registered</>}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
