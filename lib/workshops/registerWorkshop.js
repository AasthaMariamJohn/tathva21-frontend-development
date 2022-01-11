import axios from "axios";

export default function registerWorkshop(workshopId, userId, jwt) {
  axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-workshop-details`,
    {
      user: {
        id: userId,
      },
      event: {
        id: workshopId,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
}
