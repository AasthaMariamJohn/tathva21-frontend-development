import Loader from "@/components/common/loader";
import RazerPay from "@/components/common/razerpay";
import { useUserContext } from "@/context/userContext";
import getWorkshopWithName from "@/lib/workshops/getWorkshop";
import registerWorkshop from "@/lib/workshops/registerWorkshop";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Workshop() {
  const router = useRouter();
  const { workshopName } = router.query;
  const [Workshop, setWorkshop] = useState(null);
  const { user, userWorkshops } = useUserContext();
  const [isRegistered, setIsRegistered] = useState(false);
  const [userLectureId, setUserLectureId] = useState(null);
  // const [userLectureDetails, setUserLectureDetails] = useState(null);

  useEffect(() => {
    if (workshopName) getWorkshopWithName(workshopName, setWorkshop);
  }, [workshopName]);
  useEffect(() => {
    if (Workshop && userWorkshops) {
      for (var i = 0; i < userWorkshops.length; i++) {
        if (userWorkshops[i].workshopId == Workshop.id) {
          setIsRegistered(true);
          setUserLectureId(userWorkshops[i].userWorkshopId);
        }
      }
    }
  }, [Workshop, userWorkshops]);
  return (
    <div>
      {Workshop ? (
        <>
          {Workshop.name}
          <Image
            src={Workshop.coverImage.src}
            width={200}
            height={200}
            alt="next-image"
          ></Image>
          {isRegistered ? (
            <>you are registerd</>
          ) : (
            <>
             {Workshop.regPrice?
               <div>
               <RazerPay event={Workshop} user={user} paymentType={"workshop"} regPrice={Workshop.regPrice}/>
             </div>
             :
              <button
              onClick={() => {
                registerWorkshop(workshop.id, user.id, user.jwt);
              }}
            >
              Register
            </button> 
            }
            </>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
