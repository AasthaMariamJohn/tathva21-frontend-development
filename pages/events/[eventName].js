import Loader from "@/components/common/loader";
import SearchTeamMemberBox from "@/components/events_workshop_lectures/events/searchTeamMemBox";
import { useUserContext } from "@/context/userContext";
import getEventWithName from "@/lib/events/getEvent";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";


export default function Event() {
  const { user, userEvents } = useUserContext();
  const router = useRouter();
  const { eventName } = router.query;
  const [Event, setEvent] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  useEffect(() => {
    if (eventName) {
      getEventWithName(eventName, setEvent);
    }
  }, [eventName]);
  useEffect(()=>{
    if(Event && userEvents){
      for (var i = 0; i < userEvents.length; i++) {
        if (userEvents[i].eventId == Event.id) {
          setIsRegistered(true);
        }
      }
    }
  },[Event,userEvents])
  return (
    <div>
      {Event ? (
        <div>
          {Event.id}
          <br />
          <Image src={Event.coverImage} width={200} height={200}></Image>
          <br />
          <SearchTeamMemberBox />
          {isRegistered?
          <>
          you are registered for this event
          </>:
          <></>}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
