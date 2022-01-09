import Loader from "@/components/common/loader";
import getWorkshops from "@/lib/workshops/getWorkshops";
import { useState, useEffect } from "react";
export default function Workshops() {
  const [Workshops, setWorkshops] = useState(null);
  useEffect(() => {
    getWorkshops(setWorkshops);
  }, []);
  return (
    <div>
      {Workshops?<>Workshops</>:<Loader/>}
    </div>
  )
}
