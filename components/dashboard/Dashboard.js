import style from "./db.module.css";
import Section2 from "./section2";
import EventComponent from "./EventComponent";
import Team from "./Team";
import registerEvent from "@/lib/events/registerEvent";
import getRegisteredEventInfo from "@/lib/events/getRegisterEventInfo";
import { TeamMemberWrapper } from "@/context/teamMemberContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUserContext } from "@/context/userContext";
import getEventWithName from "@/lib/events/getEvent";
import Loader from "../common/loader";

export default function Dashboard() {
  const { user, userEvents } = useUserContext();
  const router = useRouter();
  const { eventName } = router.query;
  const [Event, setEvent] = useState(null);
  const [userEventId, setUserEventId] = useState(null);
  const [userEventDetails, setUserEventDetails] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

<<<<<<< HEAD



export default function Dashboard() {
    return (
        <div className={style.main}>

            <div className={style.grid}>
                <div className={style.section1}>
                    <EventComponent />
                    <Team />
                </div>
                <Section2 />
            </div>
=======
  useEffect(() => {
    if (eventName) {
      getEventWithName(eventName, setEvent);
    }
  }, [eventName]);
>>>>>>> dec4e29181132beeb1f4d1eb002a5021f0510659

  useEffect(() => {
    if (Event && userEvents) {
      for (var i = 0; i < userEvents.length; i++) {
        if (userEvents[i].eventId == Event.id) {
          setUserEventId(userEvents[i].userEventId);
          setIsRegistered(true);
        }
      }
    }
  }, [Event, userEvents]);
  useEffect(() => {
    if (isRegistered && Event && userEventId) {
      getRegisteredEventInfo(
        userEventId,
        user.jwt,
        setEvent,
        setUserEventDetails
      );
      setEvent(null);
    }
  }, [isRegistered]);
  return (
    <div className={style.main}>
      {Event && userEventDetails && isRegistered ? (
        <div className={style.grid}>
          <div className={style.section1}>
            <EventComponent event={Event} />
            <Team teamMembers={userEventDetails.teamMembers}/>
          </div>
          <Section2 refId={userEventId} jwt={user.jwt} />
        </div>
<<<<<<< HEAD
    )
=======
      ) : (
        <Loader />
      )}
    </div>
  );
>>>>>>> dec4e29181132beeb1f4d1eb002a5021f0510659
}
