import Loader from "@/components/common/loader";
import { useUserContext } from "@/context/userContext";
import getEvents from "@/lib/events/getEvents";
import Link from "next/link";
import { useState, useEffect } from "react";
import Ewl from "@/components/events_workshop_lectures/Ewl";

export default function Events() {
  return (
    <div>
      <Ewl />
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
