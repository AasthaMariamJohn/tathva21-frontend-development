import axios from "axios";
import { toast } from "react-toastify";

export default function registerEvent(event, user,router ,userEvents) {
  axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-event-details`,
    {
      user: {
        id: user.id,
      },
      event: {
        id: event.id,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    }
  )
  .then((res)=>{


    var userEventid=res.data.id,eventId=event.id
    userEvents.push({eventId:eventId,userEventId:userEventid})



    toast.success('You are registered', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  })
  .then(()=>{
    router.push(`/dashboard/events/${event.slug}`)
  })
}
