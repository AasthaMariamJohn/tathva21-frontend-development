import getEvents from "@/lib/events/getEvents";
import { useState, useEffect } from "react";
export default function Events() {
  const [Events, setEvents] = useState(null);
  useEffect(() => {
    getEvents(setEvents);
  }, []);
  return <div>Events</div>;
}
