import Loader from "@/components/common/loader";
import getLectureWithName from "@/lib/lectures/getLecture";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Lecture() {
  const router = useRouter();
  const { lectureName } = router.query;
  const [Lecture, setLecture] = useState(null);
  useEffect(() => {
    if (lectureName) getLectureWithName(lectureName, setLecture);
  }, [lectureName]);
  return <div>{Lecture ? <>{Lecture.name}</> : <Loader/>}</div>;
}
