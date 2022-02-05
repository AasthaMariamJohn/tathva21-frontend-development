import axios from "axios";

export function deleteSubmission(userEventId,submissionId,jwt,router){
      axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/submissions/${userEventId}/${submissionId}`,{
            headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${jwt}`
            }

      })
      .then(()=>{
            router.reload()
      })
}