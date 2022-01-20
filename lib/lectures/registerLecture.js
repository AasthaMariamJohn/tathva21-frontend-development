import { toast } from "@chakra-ui/react";
import axios from "axios";

export default function registerLecture(event, user, router, userLectures) {
  axios
    .post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-lecture-details`,
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
    .then((res) => {
      userLectures.push({ lectureId: event.id, userLectureId: res.data.id });

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
    .then(() => {
      router.push(`/dashboard/lectures/${event.slug}`);
    });
}
