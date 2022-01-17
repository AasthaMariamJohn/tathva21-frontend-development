import { toast } from "@chakra-ui/react";
import axios from "axios";

export default function registerWorkshop(workshop, userId, jwt,router) {
  axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-workshop-details`,
    {
      user: {
        id: userId,
      },
      event: {
        id: workshop.id,
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
    router.push(`/dashboard/workshop/${workshop.slug}`)
  })

}
