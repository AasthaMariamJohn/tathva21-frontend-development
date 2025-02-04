import style from "./db.module.css";
import Section2 from "./section2";
import Event_component from "./EventComponent";
import Team from "./Team";
import getRegisteredEventInfo from "@/lib/events/getRegisterEventInfo";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUserContext } from "@/context/userContext";
import getEventWithName from "@/lib/events/getEvent";
import Loader from "../common/loader";
// import Event_component from "./events/eventComponent";

export default function Dashboard() {
  const { user, userEvents } = useUserContext();
  const router = useRouter();

  const { eventName, refresh } = router.query;
  const [Event, setEvent] = useState(null);
  const [userEventId, setUserEventId] = useState(null);
  const [userEventDetails, setUserEventDetails] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (eventName) {
      getEventWithName(eventName, setEvent);
    }
  }, [eventName]);

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
            <Event_component event={Event}></Event_component>
            <Team
              userEventId={userEventId}
              teamMembers={userEventDetails.teamMembers}
            />
          </div>
          <div className={style["section2-wrapper"]}>
            <Section2
              refId={userEventId}
              jwt={user.jwt}
              submissions={userEventDetails.submission}
              questions={Event.submissionInfo}
              event={Event}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
