import Loader from "@/components/common/loader";
import getEvents from "@/lib/events/getEvents";
import Link from "next/link";
import { useState, useEffect } from "react";
import Ewl from "@/components/events_workshop_lectures/Ewl";
import getEventWithName from "@/lib/events/getEvent";
import ComingSoon from "@/components/common/coming_soon";

export default function Events() {

  const [Event1, setEvent1] = useState(null);
  const eventName="test-event1"
  useEffect(() => {
    if (eventName) {
      getEventWithName(eventName, setEvent1);
    }
  }, [eventName]);

  return (
    <div>
     {/* {Event1? <Ewl event={Event1}/>:<Loader/>} */}
     <ComingSoon/>
    </div>
  );
}

// {
//   Events ?  : <Loader />;
// }
// const { user } = useUserContext();
// const [Events, setEvents] = useState(null);
// useEffect(() => {
//   getEvents(setEvents);
// }, []);
/* <div>
  {Events.map((event) => (
    <div key={event.id}>
      <Link href={`/events/${event.slug}`} passHref>
        {event.name}
      </Link>
    </div>
  ))}
</div> */
