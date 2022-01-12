import Loader from "@/components/common/loader";
import { useUserContext } from "@/context/userContext";
import getEvents from "@/lib/events/getEvents";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Events() {
  const {user}=useUserContext()
  const [Events, setEvents] = useState(null);
  useEffect(() => {
    getEvents(setEvents);
  }, []);
  return (
    <div>
      {Events ? (
        <div>
          {Events.map((event) => (
            <div key={event.id}>
              <Link href={`/events/${event.slug}`} passHref>
                {event.name}
              </Link>

            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
