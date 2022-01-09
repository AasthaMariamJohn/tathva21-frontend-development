import getEventWithName from "@/lib/events/getEvent";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
export default function Event() {
  const router = useRouter();
  const { eventName } = router.query;
  const [Event, setEvent] = useState(null)
  useEffect(() => {
    if(eventName)
      getEventWithName(eventName,setEvent)
  }, [eventName])
  return (
    <div>
      {Event?<>{Event.name}</>:<>Data fetching</>}
    </div>
  );
}
