import Loader from "@/components/common/loader";
import getLectures from "@/lib/lectures/getLectures";
import { useState, useEffect } from "react";

export default function Lecture() {
  const [Lectures, setLectures] = useState(null);
  useEffect(() => {
    getLectures(setLectures);
  }, []);
  return (
    <div>
      {Lectures?<>Lectures</>:<Loader/>}
    </div>
    );
}
