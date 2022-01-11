import axios from "axios";

export default function registerEvent(eventId, userId, jwt) {
  axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-event-details`,
    {
      user: {
        id: userId,
      },
      event: {
        id: eventId,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
}
