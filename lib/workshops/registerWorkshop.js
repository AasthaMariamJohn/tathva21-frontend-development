import { toast } from "@chakra-ui/react";
import axios from "axios";

export default function registerWorkshop(workshop, user,router,userWorkshops) {
  axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-workshop-details`,
    {
      user: {
        id: user.id,
      },
      event: {
        id: workshop.id,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    }
  ) 
  .then(()=>{
    userWorkshops({ workshopId: workshop.id, userWorkshopId: res.data.id })
    // toast.success('You are registered', {
    //   position: "top-right",
    //   autoClose: 500,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   });
  })
  .then(()=>{
    router.push(`/dashboard/workshop/${workshop.slug}`)
  })

}
