import getLectures from "@/lib/lectures/getLectures";
import { useState, useEffect } from "react";

export default function Lecture() {
  const [Lectures, setLectures] = useState(null);
  useEffect(() => {
    getLectures(setLectures);
  }, []);
  return <div>Lecture</div>;
}
