import Loader from "@/components/common/loader";
import Test from "@/components/events_workshop_lectures/test";
import getEvents from "@/lib/events/getEvents";
import { useState, useEffect } from "react";
export default function Events() {
  const [Events, setEvents] = useState(null);
  useEffect(() => {
    getEvents(setEvents);
  }, []);
  return (
    <div>
      <Test></Test>
      {Events?<>Event</>:<Loader/>}
    </div>
  )
}
