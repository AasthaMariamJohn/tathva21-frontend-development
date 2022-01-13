import axios from "axios";

export default function getRegisteredEventInfo(eventId){
      axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-event-details/${eventId}`)
      .then(res=>console.log(res))
}