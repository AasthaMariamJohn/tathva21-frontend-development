import axios from "axios";
import { toast } from "react-toastify";

export default function registerEvent(event, userId, jwt,router) {
  axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-event-details`,
    {
      user: {
        id: userId,
      },
      event: {
        id: event.id,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  )
  .then(()=>{
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
