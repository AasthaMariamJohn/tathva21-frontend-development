import Loader from "@/components/common/loader";
import { useUserContext } from "@/context/userContext";
import getWorkshopWithName from "@/lib/workshops/getWorkshop";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Workshop() {
  const router = useRouter();
  const { workshopName } = router.query;
  const [Workshop, setWorkshop] = useState(null);
  const { user, userWorkshops } = useUserContext();
  const [isRegistered, setIsRegistered] = useState(false);
  useEffect(() => {
    if (workshopName) getWorkshopWithName(workshopName, setWorkshop);
  }, [workshopName]);
  useEffect(() => {
    if (Workshop && userWorkshops) {
      for (var i = 0; i < userWorkshops.length; i++) {
        if (userWorkshops[i].workshopId == Workshop.id) {
          setIsRegistered(true);
        }
      }
    }
  }, [Workshop, userWorkshops]);
  return (
    <div>
      {Workshop ? (
        <>
          {Workshop.name}
          {isRegistered ? <>you are registerd</> : <>You are not registered</>}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
