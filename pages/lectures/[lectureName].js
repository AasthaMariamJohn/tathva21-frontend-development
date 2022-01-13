import Loader from "@/components/common/loader";
import RazerPay from "@/components/common/razerpay";
import { useUserContext } from "@/context/userContext";
import getLectureWithName from "@/lib/lectures/getLecture";
import Image from "next/image";
import { useRouter } from "next/router";
import Workshop from "pages/workshops/[workshopName]";
import { useState, useEffect } from "react";
export default function Lecture() {
  const router = useRouter();
  const { lectureName } = router.query;
  const [Lecture, setLecture] = useState(null);
  const { user, userLectures } = useUserContext();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (lectureName) getLectureWithName(lectureName, setLecture);
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
          <Image
            src={Lecture.coverImage.src}
            width={200}
            height={200}
            alt="lecture-cover-image"
          ></Image>
          {isRegistered ? (
            <>you are registerd</>
          ) : (
            <>
              {Lecture.regPrice ? (
                <div>
                  <RazerPay
                    event={Lecture}
                    user={user}
                    paymentType={"lecture"}
                    regPrice={Lecture.regPrice}
                  />
                </div>
              ) : (
                <button
                  onClick={() => {
                    registerLecture(lecture.id, user.id, user.jwt);
                  }}
                >
                  Register
                </button>
              )}
            </>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
