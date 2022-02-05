import Overlay from "@/components/common/overlay";
import Dashboard from "@/components/dashboard/Dashboard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserContext } from "@/context/userContext";
import { Login } from "@/lib/user/login";
import getEventWithName from "@/lib/events/getEvent";
import style from "./event.module.css";
import Loader from "@/components/common/loader2";
import EventComponent from "@/components/dashboard/EventComponent";
import Team from "@/components/dashboard/Team";
import Section2 from "@/components/dashboard/section2";
import getRegisteredEventInfo from "@/lib/events/getRegisterEventInfo";
export default function Index() {
  const router = useRouter();
  const { isLoggedIn, user, userEvents } = useUserContext();
  // useEffect(() => {
  //   if (!isLoggedIn && !user) {
  //     Login(router);
  //   }
  // }, [isLoggedIn]);
  const { eventName, refresh } = router.query;
  const [Event, setEvent] = useState(null);
  const [userEventDetails, setUserEventDetails] = useState(null);
  useEffect(() => {
    if (eventName) {
      getEventWithName(eventName, (e) => {
        setEvent(e);
      });
    }
  }, [eventName]);
  useEffect(() => {
    if (Event && userEvents) {
      for (var i = 0; i < userEvents.length; i++) {
        if (userEvents[i].eventId == Event.id) {
          getRegisteredEventInfo(
            userEvents[i].userEventId,
            user.jwt,
            () => {},
            setUserEventDetails
          );
        }
      }
    }
  }, [userEvents, Event]);
  // useEffect(() => {
  //   if (refresh == "True") router.push(`/dashboard/events/${eventName}`);
  // }, [refresh]);
  return (
    <div>
      <ToastContainer />
      <Overlay>
        <div className={style.main}>
          {Event && userEventDetails ? (
            <>
              <EventComponent event={Event} />
              <Team
                userEventId={userEventDetails.id}
                teamMembers={userEventDetails.teamMembers}
              />
              <div className={style["section2-wrapper"]}>
                <Section2 refId={userEventDetails.id} jwt={user.jwt} />
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </Overlay>
    </div>
  );
}
