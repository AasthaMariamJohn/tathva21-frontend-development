import Loader from "@/components/common/loader";
import getWorkshopWithName from "@/lib/workshops/getWorkshop";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
export default function Workshop() {
  const router = useRouter();
  const { workshopName } = router.query;
  const [Workshop, setWorkshop] = useState(null)
  useEffect(() => {
    if(workshopName)
      getWorkshopWithName(workshopName,setWorkshop)
  }, [workshopName])
  return (
    <div>
      {Workshop?<>{Workshop.name}</>:<Loader/>  }
    </div>
  );
}
