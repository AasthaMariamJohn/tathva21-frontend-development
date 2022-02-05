import axios from "axios";

export function updateUserMeta(jwt,userEventId,data){
      axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-event-details-resmeta/${userEventId}`,data ,{  
            headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${jwt}`
            }

      })
}


    