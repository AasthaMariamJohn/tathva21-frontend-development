import axios from "axios";

export default function registerLecture(eventId, userId, jwt) {
  axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-lecture-details`,
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
